import { useState, useEffect } from "react";
import { loadSettings, saveSettings } from "../local-storage/storageUtils";
import { SpAPIClientConfig } from "../types/types";

export function useSpAPIClientConfig() {
  const [config, setSettings] = useState<SpAPIClientConfig>({
    region: "eu",
    refresh_token: "",
    access_token: "",
    use_sandbox: false,
  });

  useEffect(() => {
    const saved = loadSettings();
    if (saved) {
      setSettings(saved);
    }
  }, []);

  const setConfig = (newConfig: SpAPIClientConfig) => {
    setSettings(newConfig);
    saveSettings(newConfig);
  };

  return { config, setConfig, setSettings };
}
