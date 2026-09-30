export type Token = { word: string; accent: boolean };

/** Splits a line into words; spans wrapped in *asterisks* (across any number of words) are marked as accent. */
export function tokenize(line: string): Token[] {
  const out: Token[] = [];
  let inAccent = false;
  for (const raw of line.split(" ")) {
    if (!raw) continue;
    let word = raw;
    let accent = inAccent;
    if (word.startsWith("*")) {
      word = word.slice(1);
      accent = true;
      inAccent = true;
    }
    if (word.endsWith("*")) {
      word = word.slice(0, -1);
      inAccent = false;
    }
    out.push({ word, accent });
  }
  return out;
}

export const plain = (text: string) => text.replace(/\*/g, "").replace(/\n/g, " ");
