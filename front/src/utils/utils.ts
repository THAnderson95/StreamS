import { REACTION_TYPE_SYMBOLS, REACTION_TYPES } from "@/constants";

export function getReactionSymbol(reaction: string): string {
  if (reaction in REACTION_TYPE_SYMBOLS) {
    return REACTION_TYPE_SYMBOLS[reaction as REACTION_TYPES];
  }
  return "❔";
}
