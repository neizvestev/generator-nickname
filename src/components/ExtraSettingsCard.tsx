import React from "react";
import { Origin, TranslationSchema } from "../types";
import { SvgIcon } from "./SvgIcon";

interface ExtraSettingsCardProps {
  origin: Origin;
  mixOrigins: boolean;
  setMixOrigins: (val: boolean) => void;
  useUnderscore: boolean;
  setUseUnderscore: (val: boolean) => void;
  t: TranslationSchema;
  playBeep: (freq?: number, type?: OscillatorType, duration?: number) => void;
}

export function ExtraSettingsCard({
  origin,
  mixOrigins,
  setMixOrigins,
  useUnderscore,
  setUseUnderscore,
  t,
  playBeep
}: ExtraSettingsCardProps) {
  return (
    <div className="bg-[#1F1F1F]/45 backdrop-blur-md rounded-2xl border border-zinc-800/60 p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4 border-b border-zinc-800/60 pb-3">
        <SvgIcon src="/icons/settings.svg" className="h-4 w-4 text-zinc-400" />
        <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
          {t.settings}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {/* Mix cultures options (Only if "all" nationalities selected) */}
        {origin === "all" && (
          <label className="flex items-center justify-between cursor-pointer select-none">
            <div className="max-w-[75%]">
              <span className="text-xs font-semibold text-zinc-300 block">{t.mixNations}</span>
              <span className="text-[10px] text-zinc-500 block leading-tight">{t.mixNationsSub}</span>
            </div>
            <div className="relative">
              <input 
                type="checkbox" 
                checked={mixOrigins}
                onChange={(e) => { setMixOrigins(e.target.checked); playBeep(850); }}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-focus:ring-1 peer-focus:ring-zinc-500/40 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-zinc-400 after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-400 peer-checked:after:bg-[#191919] peer-checked:after:border-zinc-300"></div>
            </div>
          </label>
        )}

        {/* Underscore separator option */}
        <label className="flex items-center justify-between cursor-pointer select-none">
          <div className="max-w-[75%]">
            <span className="text-xs font-semibold text-zinc-300 block">{t.underscore}</span>
            <span className="text-[10px] text-zinc-500 block leading-tight">{t.underscoreSub}</span>
          </div>
          <div className="relative">
            <input 
              type="checkbox" 
              checked={useUnderscore}
              onChange={(e) => { setUseUnderscore(e.target.checked); playBeep(850); }}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-focus:ring-1 peer-focus:ring-zinc-500/40 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-zinc-400 after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-400 peer-checked:after:bg-[#191919] peer-checked:after:border-zinc-300"></div>
          </div>
        </label>
      </div>
    </div>
  );
}
export default ExtraSettingsCard;
