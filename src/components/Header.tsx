import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Lang, TranslationSchema } from "../types";
import { SvgIcon } from "./SvgIcon";

interface HeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  t: TranslationSchema;
  playBeep: (freq?: number, type?: OscillatorType, duration?: number) => void;
}

export function Header({
  lang,
  setLang,
  soundEnabled,
  setSoundEnabled,
  t,
  playBeep
}: HeaderProps) {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex flex-row items-center justify-between gap-4 flex-wrap sm:flex-nowrap mb-8 bg-[#1a1a1a]/45 backdrop-blur-md p-4 rounded-2xl border border-zinc-800/60 relative z-50"
    >
      {/* Title */}
      <div className="flex items-center h-[38px]">
        <span className="font-display font-extrabold text-xs sm:text-sm tracking-wider text-white uppercase flex items-center gap-2">
          <div className="h-5 w-5 text-zinc-300 shrink-0">
            <SvgIcon src="/icons/logo.svg" className="h-full w-full" />
          </div>
          <span>{t.title}</span>
        </span>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 md:justify-end">
        {/* Language selector */}
        <div className="relative z-50" ref={langDropdownRef}>
          <button
            type="button"
            onClick={() => { setLangDropdownOpen(!langDropdownOpen); playBeep(850); }}
            className="bg-[#2a2a2a]/45 hover:bg-[#333333]/45 border border-[#3a3a3a]/60 text-zinc-300 font-bold text-xs uppercase tracking-wider py-2 px-3.5 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>{lang.toUpperCase()}</span>
            <SvgIcon src="/icons/dropdown.svg" className="h-3 w-3 text-zinc-400" />
          </button>
          <AnimatePresence>
            {langDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 4, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 w-28 bg-[#1a1a1a] border border-zinc-800/80 rounded-xl shadow-2xl p-1.5 z-50 flex flex-col gap-1"
              >
                {(["ru", "en", "ua"] as Lang[]).map((ln) => (
                  <button
                    key={ln}
                    type="button"
                    onClick={() => { setLang(ln); setLangDropdownOpen(false); playBeep(850 + (ln === "en" ? 50 : ln === "ua" ? 100 : 0)); }}
                    className={`w-full text-center px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      lang === ln ? "bg-zinc-300 text-[#191919]" : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    {ln.toUpperCase()}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sound toggle */}
        <button 
          onClick={() => {
            setSoundEnabled(!soundEnabled);
            playBeep(1000, "sine", 0.05);
          }}
          className={`p-2 rounded-xl border transition-all duration-150 cursor-pointer ${
            soundEnabled 
              ? 'text-zinc-200 bg-[#2a2a2a]/45 border-[#3a3a3a]/60' 
              : 'text-zinc-600 bg-[#1F1F1F]/45 border-zinc-800/80'
          }`}
          title={soundEnabled ? "Mute" : "Unmute"}
        >
          {soundEnabled ? (
            <SvgIcon src="/icons/sound-on.svg" className="h-4 w-4 text-zinc-300" />
          ) : (
            <SvgIcon src="/icons/sound-off.svg" className="h-4 w-4 text-zinc-500" />
          )}
        </button>

        {/* GitHub link */}
        <a
          href="https://generator-nickname.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playBeep(1100, "triangle", 0.1)}
          className="bg-[#2a2a2a]/45 hover:bg-[#333333]/45 border border-[#3a3a3a]/60 text-zinc-300 font-bold text-xs uppercase tracking-wider py-2 px-3.5 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <SvgIcon src="/icons/github.svg" className="h-4 w-4 text-zinc-300" />
          <span>{t.githubBtn}</span>
        </a>
      </div>
    </motion.div>
  );
}
export default Header;
