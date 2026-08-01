import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Gender, Origin, TranslationSchema } from "../types";
import { SvgIcon } from "./SvgIcon";

interface SettingsPanelProps {
  gender: Gender;
  setGender: (g: Gender) => void;
  origin: Origin;
  setOrigin: (o: Origin) => void;
  customFirstName: string;
  setCustomFirstName: (val: string) => void;
  customLastName: string;
  setCustomLastName: (val: string) => void;
  isFirstNameLocked: boolean;
  setIsFirstNameLocked: (val: boolean) => void;
  isLastNameLocked: boolean;
  setIsLastNameLocked: (val: boolean) => void;
  triggerGenerateSingle: () => void;
  getOriginLabel: (val: Origin) => string;
  t: TranslationSchema;
  playBeep: (freq?: number, type?: OscillatorType, duration?: number) => void;
}

export function SettingsPanel({
  gender,
  setGender,
  origin,
  setOrigin,
  customFirstName,
  setCustomFirstName,
  customLastName,
  setCustomLastName,
  isFirstNameLocked,
  setIsFirstNameLocked,
  isLastNameLocked,
  setIsLastNameLocked,
  triggerGenerateSingle,
  getOriginLabel,
  t,
  playBeep
}: SettingsPanelProps) {
  const [originDropdownOpen, setOriginDropdownOpen] = useState(false);
  const originDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (originDropdownRef.current && !originDropdownRef.current.contains(event.target as Node)) {
        setOriginDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const originsList: Origin[] = ["all", "american", "italian", "russian", "japanese", "hispanic", "german"];

  return (
    <div className="bg-[#1F1F1F]/45 backdrop-blur-md rounded-2xl border border-zinc-800/60 p-4 sm:p-6 relative z-10" id="card-generator-settings">
      {/* Title */}
      <div className="mb-6">
        <h2 className="font-display font-bold text-base tracking-wide text-white uppercase flex items-center gap-2">
          <SvgIcon src="/icons/settings.svg" className="h-4 w-4 text-zinc-400" />
          <span className="leading-none">{t.params}</span>
        </h2>
      </div>

      {/* Gender Picker */}
      <div className="mb-5">
        <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
          {t.chooseGender}
        </label>
        <div className="grid grid-cols-3 gap-2 bg-[#161616]/45 p-1 rounded-xl border border-zinc-800/40">
          <button
            type="button"
            onClick={() => { setGender("male"); playBeep(850); }}
            className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              gender === "male"
                ? "bg-zinc-300 text-[#191919] font-bold"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/30"
            }`}
          >
            <SvgIcon src="/icons/user-round.svg" className={`h-3.5 w-3.5 ${gender === "male" ? "text-[#191919]" : "text-zinc-400"}`} />
            <span>{t.male}</span>
          </button>
          <button
            type="button"
            onClick={() => { setGender("female"); playBeep(950); }}
            className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              gender === "female"
                ? "bg-zinc-300 text-[#191919] font-bold"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/30"
            }`}
          >
            <SvgIcon src="/icons/user-round.svg" className={`h-3.5 w-3.5 ${gender === "female" ? "text-[#191919]" : "text-zinc-400"}`} />
            <span>{t.female}</span>
          </button>
          <button
            type="button"
            onClick={() => { setGender("random"); playBeep(900); }}
            className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              gender === "random"
                ? "bg-zinc-300 text-[#191919] font-bold"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/30"
            }`}
          >
            <SvgIcon src="/icons/gender-random.svg" className={`h-3.5 w-3.5 ${gender === "random" ? "text-[#191919]" : "text-zinc-400"}`} />
            <span>{t.random}</span>
          </button>
        </div>
      </div>

      {/* Style/Nationality Dropdown */}
      <div className="mb-5 relative z-40" ref={originDropdownRef}>
        <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
          {t.styleNat}
        </label>
        
        <button
          type="button"
          onClick={() => { setOriginDropdownOpen(!originDropdownOpen); playBeep(850); }}
          className="w-full bg-[#161616]/45 hover:bg-[#161616]/65 text-[#f3f4f6] text-xs font-semibold rounded-xl border border-zinc-800/40 px-3.5 py-3 transition-all flex items-center justify-between cursor-pointer"
        >
          <span>{getOriginLabel(origin)}</span>
          <SvgIcon src="/icons/dropdown.svg" className="h-4 w-4 text-zinc-400" />
        </button>

        <AnimatePresence>
          {originDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 4, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 bg-[#161616] border border-zinc-800/80 rounded-xl shadow-2xl p-1.5 z-50 flex flex-col gap-1 max-h-60 overflow-y-auto"
            >
              {originsList.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => {
                    setOrigin(o);
                    setOriginDropdownOpen(false);
                    playBeep(880);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    origin === o 
                      ? "bg-zinc-300 text-[#191919] font-bold" 
                      : "text-zinc-300 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  {getOriginLabel(o)}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lock Name Options */}
      <div className="mb-5">
        <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
          {t.fixName}
        </label>
        
        <div className="flex flex-col gap-3">
          {/* Custom First Name */}
          <div className="flex items-center gap-2 bg-[#161616]/45 hover:bg-[#161616]/65 transition-all rounded-xl px-3.5 py-2.5 border border-zinc-800/40">
            <SvgIcon src="/icons/user.svg" className="h-4 w-4 text-zinc-500 shrink-0" />
            <input
              type="text"
              value={customFirstName}
              onChange={(e) => {
                const val = e.target.value.replace(/[^A-Za-z]/g, ""); 
                setCustomFirstName(val);
                if (val.trim() && !isFirstNameLocked) {
                  setIsFirstNameLocked(true);
                }
              }}
              placeholder={t.customFirst}
              className="bg-transparent text-xs font-semibold text-white placeholder-zinc-600 focus:outline-none w-full px-1"
            />
            {customFirstName && (
              <button 
                onClick={() => { setCustomFirstName(""); setIsFirstNameLocked(false); }}
                className="text-zinc-600 hover:text-zinc-400 text-xs px-1 font-bold hover:scale-110 transition-transform"
              >
                ×
              </button>
            )}
          </div>

          {/* Custom Last Name */}
          <div className="flex items-center gap-2 bg-[#161616]/45 hover:bg-[#161616]/65 transition-all rounded-xl px-3.5 py-2.5 border border-zinc-800/40">
            <SvgIcon src="/icons/tag.svg" className="h-4 w-4 text-zinc-500 shrink-0" />
            <input
              type="text"
              value={customLastName}
              onChange={(e) => {
                const val = e.target.value.replace(/[^A-Za-z]/g, ""); 
                setCustomLastName(val);
                if (val.trim() && !isLastNameLocked) {
                  setIsLastNameLocked(true);
                }
              }}
              placeholder={t.customLast}
              className="bg-transparent text-xs font-semibold text-white placeholder-zinc-600 focus:outline-none w-full px-1"
            />
            {customLastName && (
              <button 
                onClick={() => { setCustomLastName(""); setIsLastNameLocked(false); }}
                className="text-zinc-600 hover:text-zinc-400 text-xs px-1 font-bold hover:scale-110 transition-transform"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="mt-6">
        <button
          type="button"
          onClick={triggerGenerateSingle}
          className="w-full bg-zinc-300 hover:bg-zinc-200 text-[#191919] font-bold text-xs uppercase tracking-wider py-4 px-5 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
        >
          <SvgIcon src="/icons/wand.svg" className="h-4 w-4 text-[#191919]" />
          <span>{t.generateBtn}</span>
        </button>
      </div>
    </div>
  );
}
export default SettingsPanel;
