import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "motion/react";
import { Lang, Gender, Origin } from "./types";
import { translations } from "./config/translations";
import { nicknamesData, calculateTotalCombinations } from "./data/nicknamesData";
import { playBeep, playTypewriterClick } from "./utils/audio";
import { Header } from "./components/Header";
import { NicknameDisplay } from "./components/NicknameDisplay";
import { SettingsPanel } from "./components/SettingsPanel";
import { ExtraSettingsCard } from "./components/ExtraSettingsCard";

export default function App() {
  const [lang, setLang] = useState<Lang>("ru");
  const t = translations[lang];

  const [gender, setGender] = useState<Gender>("random");
  const [origin, setOrigin] = useState<Origin>("all");
  const [mixOrigins, setMixOrigins] = useState<boolean>(false);
  const [useUnderscore, setUseUnderscore] = useState<boolean>(true);
  
  const [customFirstName, setCustomFirstName] = useState<string>("");
  const [customLastName, setCustomLastName] = useState<string>("");
  const [isFirstNameLocked, setIsFirstNameLocked] = useState<boolean>(false);
  const [isLastNameLocked, setIsLastNameLocked] = useState<boolean>(false);

  const [currentNickname, setCurrentNickname] = useState<string>("John_Doe");
  const [currentNicknameGender, setCurrentNicknameGender] = useState<"male" | "female">("male");
  const [displayedNickname, setDisplayedNickname] = useState<string>("");
  const typingIntervalRef = useRef<any>(null);

  const [copiedText, setCopiedText] = useState<string>("");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const typeNickname = (targetName: string) => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    setDisplayedNickname("");
    let currentStr = "";
    let index = 0;
    
    typingIntervalRef.current = setInterval(() => {
      if (index < targetName.length) {
        currentStr += targetName[index];
        setDisplayedNickname(currentStr);
        playTypewriterClick(soundEnabled);
        index++;
      } else {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
        }
      }
    }, 45); 
  };

  const performNameGeneration = (genderOverride?: "male" | "female") => {
    const selectedGender = genderOverride || (gender === "random" ? (Math.random() > 0.5 ? "male" : "female") : gender);
    
    const availableOrigins: Origin[] = [
      "american", "italian", "russian", "japanese", "hispanic", "german"
    ];
    
    const chosenOrigin = origin === "all" 
      ? availableOrigins[Math.floor(Math.random() * availableOrigins.length)] 
      : origin;

    const fNameOrigin = mixOrigins && origin === "all" 
      ? availableOrigins[Math.floor(Math.random() * availableOrigins.length)] 
      : chosenOrigin;

    const lNameOrigin = mixOrigins && origin === "all"
      ? availableOrigins[Math.floor(Math.random() * availableOrigins.length)]
      : chosenOrigin;

    let finalFirstName = "";
    if (customFirstName.trim()) {
      finalFirstName = customFirstName.trim();
    } else {
      const firstNamesList = nicknamesData.firstNames[selectedGender][fNameOrigin];
      finalFirstName = firstNamesList[Math.floor(Math.random() * firstNamesList.length)];
    }

    let finalLastName = "";
    if (customLastName.trim()) {
      finalLastName = customLastName.trim();
    } else {
      const lastNamesList = nicknamesData.lastNames[lNameOrigin];
      finalLastName = lastNamesList[Math.floor(Math.random() * lastNamesList.length)];
    }

    finalFirstName = finalFirstName.charAt(0).toUpperCase() + finalFirstName.slice(1);
    finalLastName = finalLastName.charAt(0).toUpperCase() + finalLastName.slice(1);

    const separator = useUnderscore ? "_" : " ";
    const nicknameResult = `${finalFirstName}${separator}${finalLastName}`;

    return {
      name: nicknameResult,
      gender: selectedGender
    };
  };

  useEffect(() => {
    const gen = performNameGeneration();
    setCurrentNickname(gen.name);
    setCurrentNicknameGender(gen.gender);
    
    // Небольшая задержка перед печатью первого имени, чтобы всё плавно загрузилось
    const timeout = setTimeout(() => {
      typeNickname(gen.name);
    }, 150);

    return () => {
      clearTimeout(timeout);
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const totalCombinations = useMemo(() => calculateTotalCombinations(), []);

  const triggerGenerateSingle = () => {
    playBeep(soundEnabled, 900, "sine", 0.08);
    const gen = performNameGeneration();
    setCurrentNickname(gen.name);
    setCurrentNicknameGender(gen.gender);
    typeNickname(gen.name);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      playBeep(soundEnabled, 1300, "sine", 0.15);
      setTimeout(() => setCopiedText(""), 2000);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  const getOriginLabel = (val: Origin) => {
    switch (val) {
      case "all": return t.allNat;
      case "american": return t.american;
      case "italian": return t.italian;
      case "russian": return t.russian;
      case "japanese": return t.japanese;
      case "hispanic": return t.hispanic;
      case "german": return t.german;
      default: return t.allNat;
    }
  };

  return (
    <div 
      className="min-h-screen text-[#f3f4f6] font-sans antialiased flex flex-col justify-between relative overflow-x-hidden"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-neutral-950/75 z-0 pointer-events-none" />

      <div className="relative z-10 flex-grow flex flex-col justify-between">
        <div className="max-w-4xl w-full mx-auto px-4 py-8 flex-grow flex flex-col justify-center">
          
          <Header
            lang={lang}
            setLang={setLang}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
            t={t}
            playBeep={(freq, type, duration) => playBeep(soundEnabled, freq, type, duration)}
          />

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10"
          >
            <div className="md:col-span-7">
              <SettingsPanel
                gender={gender}
                setGender={setGender}
                origin={origin}
                setOrigin={setOrigin}
                customFirstName={customFirstName}
                setCustomFirstName={setCustomFirstName}
                customLastName={customLastName}
                setCustomLastName={setCustomLastName}
                isFirstNameLocked={isFirstNameLocked}
                setIsFirstNameLocked={setIsFirstNameLocked}
                isLastNameLocked={isLastNameLocked}
                setIsLastNameLocked={setIsLastNameLocked}
                triggerGenerateSingle={triggerGenerateSingle}
                getOriginLabel={getOriginLabel}
                t={t}
                playBeep={(freq, type, duration) => playBeep(soundEnabled, freq, type, duration)}
              />
            </div>

            <div className="md:col-span-5 flex flex-col gap-6">
              <NicknameDisplay
                displayedNickname={displayedNickname}
                currentNickname={currentNickname}
                currentNicknameGender={currentNicknameGender}
                copiedText={copiedText}
                copyToClipboard={copyToClipboard}
                useUnderscore={useUnderscore}
                t={t}
                totalCombinations={totalCombinations}
              />

              <ExtraSettingsCard
                origin={origin}
                mixOrigins={mixOrigins}
                setMixOrigins={setMixOrigins}
                useUnderscore={useUnderscore}
                setUseUnderscore={setUseUnderscore}
                t={t}
                playBeep={(freq, type, duration) => playBeep(soundEnabled, freq, type, duration)}
              />
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
