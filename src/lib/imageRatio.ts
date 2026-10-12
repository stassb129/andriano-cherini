/**
 * Native aspect ratios of collection photos, so product frames match the photo
 * exactly (no crop, no bars). Update when new `model_N/color_M` shots land.
 */
const LANDSCAPE = "1536 / 1024";
const SQUARE = "1 / 1";
const STUDIO = "1312 / 1199";

const OVERRIDES: Record<string, string> = {
  "model_1/color_1": LANDSCAPE,
  "model_1/color_2/1": LANDSCAPE,
  "model_1/color_2/2": SQUARE,
  "model_1/color_2/3": SQUARE,
};

export function imageRatio(src: string): string | undefined {
  const m = src.match(/andreano_cherini_collection\/(model_\d+\/color_\d+)\/(\d+)\.png$/);
  if (!m) return undefined;
  const [, folder, n] = m;
  return OVERRIDES[`${folder}/${n}`] ?? OVERRIDES[folder!] ?? STUDIO;
}
