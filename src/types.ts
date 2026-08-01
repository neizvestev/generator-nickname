export type Lang = "ru" | "en" | "ua";

export type Gender = "male" | "female" | "random";

export type Origin = "all" | "american" | "italian" | "russian" | "japanese" | "hispanic" | "german";

export interface TranslationSchema {
  title: string;
  params: string;
  chooseGender: string;
  male: string;
  female: string;
  random: string;
  styleNat: string;
  allNat: string;
  american: string;
  italian: string;
  russian: string;
  japanese: string;
  hispanic: string;
  german: string;
  fixName: string;
  customFirst: string;
  customLast: string;
  mixNations: string;
  mixNationsSub: string;
  underscore: string;
  underscoreSub: string;
  generateBtn: string;
  result: string;
  withUnderscore: string;
  withSpace: string;
  maleBadge: string;
  femaleBadge: string;
  copied: string;
  copyBtn: string;
  githubBtn: string;
  settings: string;
  feedbackTitle: string;
  feedbackSub: string;
  fieldName: string;
  fieldNamePlaceholder: string;
  fieldTelegram: string;
  fieldTelegramPlaceholder: string;
  fieldQuestion: string;
  fieldQuestionPlaceholder: string;
  fieldImage: string;
  fieldImageDrag: string;
  feedbackSend: string;
  feedbackSending: string;
  feedbackSuccess: string;
  feedbackSuccessSub: string;
  feedbackError: string;
  closeBtn: string;
  requiredField: string;
  or: string;
  combinationsLabel: string;
}
