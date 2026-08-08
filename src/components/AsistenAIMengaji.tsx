import React, { useState } from 'react';
import { AIMessage } from '../types';
import { speakArabic } from '../utils/audio';
import { Bot, Send, Sparkles, Volume2, User, Loader2, MessageSquare, Lightbulb } from 'lucide-react';

export const AsistenAIMengaji: React.FC = () => {
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Assalamu\'alaikum Sahabat Mengaji! Saya Ustadz AI NgajiYuk. Silakan tanyakan hukum Tajwid, makhraj huruf, tips hafalan Juz \'Amma, atau minta kuis tes hafalan!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const quickPrompts = [
    'Bagaimana perbedaan makhraj ع (\'Ain) dan ء (Hamzah)?',
    'Jelaskan hukum Nun Sukun bertemu Ba (Iqlab) beserta contohnya.',
    'Beri tips mudah menghafal Surah An-Naba\' untuk pemula.',
    'Uji hafalan saya untuk Surah Al-Ikhlas.'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const prompt = (textToSend || inputPrompt).trim();
    if (!prompt || loading) return;

    const userMsg: AIMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setLoading(true);

    try {
      // Build conversation history for API
      const history = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, history }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Gagal menghubungi server AI.');
      }

      const aiMsg: AIMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      console.error('AI Error:', err);
      const errorMsg: AIMessage = {
        id: `ai-err-${Date.now()}`,
        sender: 'ai',
        text: `Mohon maaf Sahabat, terjadi kendala: ${err.message || 'Koneksi ke Gemini AI terputus.'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-6 text-white shadow-lg border border-emerald-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold shadow-md shadow-amber-400/20 shrink-0">
            <Bot className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold text-amber-300">Asisten AI Mengaji & Tajwid</h2>
              <span className="bg-amber-400/20 text-amber-300 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-400/30">
                Gemini AI 3.6
              </span>
            </div>
            <p className="text-xs text-emerald-200 mt-0.5">
              Tanya jawab seputar hukum tajwid, tempat keluar huruf (makhraj), dan tips bimbingan hafalan.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Chips */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <span>Pertanyaan Populer (Klik untuk Bertanya):</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {quickPrompts.map((qp, idx) => (
            <button

              key={idx}
              onClick={() => handleSendMessage(qp)}
              disabled={loading}
              className="bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200 hover:border-emerald-300 text-xs font-medium px-3.5 py-2 rounded-xl whitespace-nowrap transition-all shadow-sm shrink-0"
            >
              {qp}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Conversation Box */}
      <div className="bg-white rounded-3xl p-6 shadow-md border border-emerald-100 flex flex-col h-[500px]">
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg) => (
            <div

              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 font-bold text-xs ${
                  msg.sender === 'user'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-amber-400 text-emerald-950'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-5 h-5" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-700 text-white rounded-tr-none'
                    : 'bg-slate-50 text-slate-800 border border-slate-200/80 rounded-tl-none space-y-2'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-200/40 text-[10px] text-slate-400">
                  <span>{msg.timestamp}</span>

                  {msg.sender === 'ai' && (
                    <button

                      onClick={() => speakArabic(msg.text)}
                      className="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-1 bg-emerald-100/60 px-2 py-0.5 rounded-md"
                      title="Bacakan dengan Suara"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Bacakan</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3 text-slate-400 text-xs font-medium italic">
              <div className="w-8 h-8 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold">
                <Bot className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-2xl">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                <span>Ustadz AI sedang mengetik jawaban...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="pt-4 border-t border-slate-100 mt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input

              type="text"
              placeholder="Ketik pertanyaan seputar tajwid, makhraj, atau hafalan di sini..."
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              disabled={loading}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
            />
            <button

              type="submit"
              disabled={!inputPrompt.trim() || loading}
              className={`p-3.5 rounded-2xl font-bold transition-all shadow-md ${
                inputPrompt.trim() && !loading
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
