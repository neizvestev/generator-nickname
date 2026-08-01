let sharedAudioCtx: AudioContext | null = null;

function getAudioCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    if (!sharedAudioCtx) {
      sharedAudioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (sharedAudioCtx.state === "suspended") {
      sharedAudioCtx.resume().catch(() => {});
    }
    return sharedAudioCtx;
  } catch (e) {
    return null;
  }
}

// Global user-gesture listener to unlock the Web Audio API on strict browsers
if (typeof window !== "undefined") {
  const unlockAudio = () => {
    try {
      const ctx = getAudioCtx();
      if (ctx && ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }
    } catch (e) {}
  };
  window.addEventListener("click", unlockAudio, { passive: true });
  window.addEventListener("touchstart", unlockAudio, { passive: true });
  window.addEventListener("keydown", unlockAudio, { passive: true });
}

export function playBeep(soundEnabled: boolean, freq = 800, type: OscillatorType = "sine", duration = 0.08) {
  if (!soundEnabled) return;
  try {
    const audioCtx = getAudioCtx();
    if (!audioCtx) return;

    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.type = type;
    oscillator.frequency.value = freq;
    
    const startTime = audioCtx.currentTime;
    // Audibly clear volume: start at 0.15
    gainNode.gain.setValueAtTime(0.15, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.onended = () => {
      try {
        oscillator.disconnect();
        gainNode.disconnect();
      } catch (e) {}
    };

    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  } catch (e) {
    console.error("playBeep error:", e);
  }
}

export function playTypewriterClick(soundEnabled: boolean) {
  if (!soundEnabled) return;
  try {
    const audioCtx = getAudioCtx();
    if (!audioCtx) return;

    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.type = "triangle"; 
    oscillator.frequency.setValueAtTime(280 + Math.random() * 180, audioCtx.currentTime);
    
    const startTime = audioCtx.currentTime;
    const clickDuration = 0.04;
    // Audibly clear typewriter click: start at 0.08
    gainNode.gain.setValueAtTime(0.08, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + clickDuration);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.onended = () => {
      try {
        oscillator.disconnect();
        gainNode.disconnect();
      } catch (e) {}
    };

    oscillator.start(startTime);
    oscillator.stop(startTime + clickDuration);
  } catch (e) {
    console.error("playTypewriterClick error:", e);
  }
}
