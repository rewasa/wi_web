export function getAssetUrl(id: string) {
  return `https://cms.wasescha.immobilien/assets/${id}.png?format=png&quality=70`;
}

export function getThreeToTwoRatioAssetUrl(id: string) {
  return `https://cms.wasescha.immobilien/assets/${id}.png?format=png&quality=70&fit=cover`;
}

const transformFace = () => {
  return `transform=${encodeURIComponent(`[
    ["resize", { "width": 800, "height": 600]`)}`;
};

export function getAssetUrlQuality(id: string) {
  const assetUrl = `https://cms.wasescha.immobilien/assets/${id}.png?fit=contain&format=webp&quality=`;
  return {
    low: `${assetUrl}30`,
    medium: `${assetUrl}50`,
    high: `${assetUrl}90`,
  };
}
