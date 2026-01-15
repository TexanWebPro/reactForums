export function reputationSymbol(reputation: number) {
  if (reputation > 0) return "+";
  return "";
}

export function reputationWord(reputation: number) {
  if (reputation === 0) return "Neutral";
  return reputation > 0 ? "Positive" : "Negative";
}

export function reputationClassStyle(reputation: number) {
  if (reputation === 0) return "";
  return reputation > 0 ? "text-green-700" : "text-red-700";
}
