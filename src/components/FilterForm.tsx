import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AmazonFeedProcessingStatus, AmazonMarketplaces } from "constant";
import { GetFeedsFilters } from "types/types";
import { loadSettings } from "local-storage/storageUtils";
import { FormEvent, useState } from "react";

interface FilterFormProps {
  onSubmit: (values: GetFeedsFilters) => void;
  isLoading: boolean;
}

export default function FilterForm({
  onSubmit,
  isLoading = false,
}: FilterFormProps) {
  const [marketplaceIds, setMarketplaceIds] = useState<string[]>([]);
  const [feedStatus, setFeedStatus] = useState<AmazonFeedProcessingStatus[]>(
    []
  );
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ feedStatus, startDate, endDate, marketplaceIds });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, marginBottom: 2 }}
    >
      <FormControl variant="outlined" sx={{ minWidth: 200 }}>
        <InputLabel>Feed Status</InputLabel>
        <Select
          multiple
          value={feedStatus}
          onChange={(e) =>
            setFeedStatus(
              (typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
              ).map((v) => v as AmazonFeedProcessingStatus)
            )
          }
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
          label="Feed Status"
          renderValue={(selected) => (selected as string[]).join(", ")}
        >
          {Object.values(AmazonFeedProcessingStatus).map((status) => (
            <MenuItem key={status} value={status}>
              <Checkbox checked={feedStatus.indexOf(status) > -1} />
              <ListItemText primary={status} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 200 }}>
        <InputLabel>Marketplaces</InputLabel>
        <Select
          multiple
          value={marketplaceIds}
          onChange={(e) =>
            setMarketplaceIds(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            )
          }
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
          label="Marketplaces"
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {(selected as string[]).map((value) => {
                // Trouve le code pays (key) à partir du id
                const entry = Object.entries(AmazonMarketplaces).find(
                  ([, v]) => v.id === value
                );
                const key = entry ? entry[0] : "";
                const label = entry ? entry[1].name : value;

                return (
                  <Chip
                    key={value}
                    label={label}
                    size="small"
                    avatar={
                      key ? (
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/16x12/${key.toLowerCase()}.png`}
                          alt={`${key} flag`}
                          style={{ borderRadius: 2 }}
                        />
                      ) : undefined
                    }
                  />
                );
              })}
            </Box>
          )}
        >
          {Object.entries(AmazonMarketplaces).map(([key, value]) => (
            <MenuItem key={key} value={value.id}>
              <Checkbox checked={marketplaceIds.indexOf(value.id) > -1} />
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/32x24/${key.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/16x12/${key.toLowerCase()}.png`}
                alt={`${key} flag`}
              />
              <ListItemText sx={{ marginLeft: "6px" }} primary={value.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Date de début"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        label="Date de fin"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <Button type="submit" variant="contained">
        {isLoading ? "Loading" : "Enter"}
      </Button>
    </Box>
  );
}
