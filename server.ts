import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side Gemini AI setup
  const getAi = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('GEMINI_API_KEY is not set in environment variables.');
    }
    return new GoogleGenAI({
      apiKey: apiKey || '',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // API endpoint for AI Mengaji Tutor
  app.post('/api/ai-tutor', async (req, res) => {
    try {
      const { prompt, history, mode } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(400).json({
          error: 'GEMINI_API_KEY belum dikonfigurasi. Silakan atur di Secrets Settings.',
        });
      }

      const ai = getAi();
      
      let systemInstruction = `Anda adalah Ustadz / Ustadzah AI Mengaji & Tajwid yang sangat santun, ramah, sabar, dan penuh kasih membimbing pengguna belajar mengaji Al-Qur'an (Iqra, Makhraj, Tajwid) dan menghafal Juz 'Amma.
Gunakan bahasa Indonesia yang hangat, sebut pengguna dengan "Sahabat Mengaji" atau "Adik/Kakak".
Gunakan penulisan Arab lengkap dengan harakat jika memberikan contoh ayat atau hukum tajwid.
Jika pengguna meminta mengecek hafalan, berikan penilaian apresiatif, koreksi jika ada salah kata/huruf, dan jelaskan hukum tajwid terkait.`;

      if (mode === 'quiz') {
        systemInstruction += ` Mode saat ini: Buat pertanyaan kuis tajwid atau kuis sambung ayat yang menarik untuk pengguna.`;
      }

      // Build contents for gemini-3.6-flash
      const contents = [];
      if (Array.isArray(history) && history.length > 0) {
        for (const item of history) {
          contents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }],
          });
        }
      }
      contents.push({
        role: 'user',
        parts: [{ text: prompt }],
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const responseText = response.text || 'Maaf, Ustadz AI belum dapat menjawab saat ini. Coba lagi ya.';
      return res.json({ text: responseText });
    } catch (error: any) {
      console.error('Error in /api/ai-tutor:', error);
      return res.status(500).json({
        error: 'Terjadi kesalahan pada server AI Mengaji: ' + (error.message || 'Unknown error'),
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Vite development middleware or production static server
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server NgajiYuk running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
