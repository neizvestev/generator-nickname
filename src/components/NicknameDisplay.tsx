import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { TranslationSchema } from "../types";
import { SvgIcon } from "./SvgIcon";

interface NicknameDisplayProps {
  displayedNickname: string;
  currentNickname: string;
  currentNicknameGender: "male" | "female";
  copiedText: string;
  copyToClipboard: (text: string) => void;
  useUnderscore: boolean;
  t: TranslationSchema;
  totalCombinations: number;
}

export function NicknameDisplay({
  displayedNickname,
  currentNickname,
  currentNicknameGender,
  copiedText,
  copyToClipboard,
  useUnderscore,
  t,
  totalCombinations
}: NicknameDisplayProps) {
  return (
    <div className="bg-[#1F1F1F]/45 backdrop-blur-md rounded-2xl border border-zinc-800/60 p-4 sm:p-5 relative overflow-hidden" id="card-display">
      {/* Glow Effect Ornament */}
      <div className="absolute top-0 right-0 h-32 w-32 bg-zinc-500/5 rounded-full blur-2xl pointer-events-none"></div>

      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2 mb-4">
        <span className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <SvgIcon src="/icons/wand.svg" className="h-3.5 w-3.5 text-zinc-400" />
          {t.result}
        </span>
        
        <span className="text-[10px] font-mono font-bold bg-[#141414]/45 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800/60">
          {useUnderscore ? t.withUnderscore : t.withSpace}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key="single-nickname"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center py-2"
        >
          <div className="w-full flex flex-col items-center justify-center p-4 bg-[#161616]/45 rounded-xl border border-zinc-800/40 relative mb-4">
            
            {/* Gender Badge */}
            <span className={`absolute top-2 right-2 text-xs font-black px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
              currentNicknameGender === "male"
                ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
                : "bg-pink-500/15 text-pink-400 border-pink-500/30"
            }`}>
              <SvgIcon 
                src={currentNicknameGender === "male" ? "/icons/gender-male.svg" : "/icons/gender-female.svg"} 
                className={`h-3 w-3 ${currentNicknameGender === "male" ? "text-blue-400" : "text-pink-400"}`}
              />
              <span className="leading-none">{currentNicknameGender === "male" ? t.maleBadge.slice(2) : t.femaleBadge.slice(2)}</span>
            </span>

            {/* Nickname String */}
            <div 
              data-allow-copy="true"
              className="text-base sm:text-lg font-mono font-bold text-white tracking-wider text-center pt-8 pb-4 select-all break-all selection:bg-zinc-500 selection:text-black"
            >
              {displayedNickname}
            </div>

            {/* Copy Button */}
            <button
              onClick={() => copyToClipboard(currentNickname)}
              className={`px-3.5 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider border transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                copiedText === currentNickname
                  ? "bg-zinc-700/40 border-zinc-500/30 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  : "bg-[#2a2a2a]/60 hover:bg-[#333333]/60 border-[#3a3a3a]/60 text-white"
              }`}
            >
              {copiedText === currentNickname ? (
                <>
                  <SvgIcon src="/icons/checked-square.svg" className="h-3.5 w-3.5 text-zinc-300 shrink-0" />
                  <span className="text-white">{t.copied}</span>
                </>
              ) : (
                <>
                  <SvgIcon src="/icons/copy.svg" className="h-3.5 w-3.5 text-zinc-300 shrink-0" />
                  <span className="text-white">{t.copyBtn}</span>
                </>
              )}
            </button>

            {/* Total Combinations Stats */}
            <div className="mt-4 pt-3 border-t border-zinc-800/40 w-full flex items-center justify-between text-[10px] text-zinc-500 font-medium">
              <span>{t.combinationsLabel}:</span>
              <span className="font-mono font-bold text-zinc-400 bg-zinc-800/30 px-2 py-0.5 rounded border border-zinc-800/40">
                {totalCombinations.toLocaleString("ru-RU")}
              </span>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default NicknameDisplay;
