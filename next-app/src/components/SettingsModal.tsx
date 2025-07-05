import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  Checkbox,
  FormControlLabel,
  MenuItem,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useSpAPIClientConfig } from "../hook/useSpAPIClientConfig";

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SettingsModal({ open, onClose }: SettingsModalProps) {
  const { config, setConfig } = useSpAPIClientConfig();

  const [formData, setFormData] = useState(config);

  useEffect(() => {
    if (open) {
      setFormData(config);
    }
  }, [open, config]);

  const handleChange =
    (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: event.target.value });
    };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, use_sandbox: event.target.checked });
  };

  const handleClear = (field: keyof typeof formData) => () => {
    setFormData({ ...formData, [field]: "" });
  };

  const handleSave = () => {
    setConfig(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Configuration</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Region"
            select
            fullWidth
            value={formData.region}
            onChange={handleChange("region")}
          >
            <MenuItem value="eu">EU</MenuItem>
            <MenuItem value="na">NA</MenuItem>
            <MenuItem value="fe">FE</MenuItem>
          </TextField>
          <TextField
            label="Refresh Token"
            fullWidth
            value={formData.refresh_token}
            onChange={handleChange("refresh_token")}
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton
                    size="small"
                    onClick={handleClear("refresh_token")}
                    aria-label="Clear"
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                ),
              },
            }}
          />
          <TextField
            label="Access Token"
            fullWidth
            value={formData.access_token}
            onChange={handleChange("access_token")}
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton
                    size="small"
                    onClick={handleClear("access_token")}
                    aria-label="Clear"
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                ),
              },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.use_sandbox}
                onChange={handleCheckboxChange}
              />
            }
            label="Use Sandbox"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
