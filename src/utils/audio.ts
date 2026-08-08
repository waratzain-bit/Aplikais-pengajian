// Web Speech API helper for Arabic pronunciation
export function speakArabic(text: string, rate: number = 0.85): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      resolve();
      return;
    }

    try {
      window.speechSynthesis.cancel();
    } catch {
      // Ignore cancel error
    }

    // Clean text for speech
    const cleanText = (text || '')
      .replace(/[\u0610-\u061A\u064B-\u065F]/g, (match) => match)
      .trim();

    if (!cleanText) {
      resolve();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ar-SA';
    utterance.rate = rate; // Configurable speech rate
    utterance.pitch = 1.0;

    // Try to find an Arabic voice
    try {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const arabicVoice = voices.find(
          (v) => v.lang.startsWith('ar') || v.name.toLowerCase().includes('arabic')
        );
        if (arabicVoice) {
          utterance.voice = arabicVoice;
        }
      }
    } catch {
      // Ignore voice lookup errors
    }

    let resolved = false;
    const safeResolve = () => {
      if (!resolved) {
        resolved = true;
        resolve();
      }
    };

    // Safety timeout in case speech end callback doesn't fire
    const timeout = setTimeout(() => {
      safeResolve();
    }, Math.max(2500, cleanText.length * 250));

    utterance.onend = () => {
      clearTimeout(timeout);
      safeResolve();
    };

    utterance.onerror = () => {
      clearTimeout(timeout);
      safeResolve();
    };

    try {
      window.speechSynthesis.speak(utterance);
    } catch {
      clearTimeout(timeout);
      safeResolve();
    }
  });
}

export function stopArabicSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // Ignore cancel error
    }
  }
}

