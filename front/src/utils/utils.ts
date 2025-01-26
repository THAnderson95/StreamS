import { REACTION_TYPE_SYMBOLS, REACTION_TYPES } from "@/constants";

export function getReactionSymbol(reaction: REACTION_TYPES): string {
    return REACTION_TYPE_SYMBOLS[reaction]
}