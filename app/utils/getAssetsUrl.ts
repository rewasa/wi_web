export function getAssetUrl(id: string) {
  return `https://cms.wasescha.immobilien/assets/${id}.jpeg?fix=contain&quality=10`;
}

export function getAssetUrlQuality(id: string) {
  const assetUrl = `https://cms.wasescha.immobilien/assets/${id}.jpeg?fix=contain&quality=`;
  return {
    low: `${assetUrl}10`,
    medium: `${assetUrl}50`,
    high: `${assetUrl}100`,
  };
}
