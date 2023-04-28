export function getAssetUrl(id: string) {
  return `https://cms.wasescha.immobilien/assets/${id}.jpeg?fit=contain&quality=10`;
}

export function getAssetUrlQuality(id: string) {
  const assetUrl = `https://cms.wasescha.immobilien/assets/${id}.png?fit=contain&format=png&quality=`;
  return {
    low: `${assetUrl}30`,
    medium: `${assetUrl}50`,
    high: `${assetUrl}90`,
  };
}
