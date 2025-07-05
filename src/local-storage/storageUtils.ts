import { SpAPIClientConfig } from "types/types";

const STORAGE_KEY = "SpAPIClientConfig";

export function saveSettings(data: SpAPIClientConfig) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadSettings(): SpAPIClientConfig | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      return JSON.parse(raw) as SpAPIClientConfig;
    } catch {
      console.error("Invalid settings JSON");
      return null;
    }
  }
  return null;
}
