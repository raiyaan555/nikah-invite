function isAppleDevice() {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

export function mapsSearchUrl(address: string, mapUrl?: string) {
  if (mapUrl) return mapUrl;
  const query = encodeURIComponent(address);
  if (isAppleDevice()) {
    return `https://maps.apple.com/?q=${query}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function directionsUrl(address: string) {
  const query = encodeURIComponent(address);
  if (isAppleDevice()) {
    return `https://maps.apple.com/?daddr=${query}&dirflg=d`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}
