import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AmazonFeedProcessingStatus } from "enums";

export interface FilterValues {
  feed_id: string;
  feedStatus: string[];
}

interface FilterFormProps {
  onSubmit: (values: FilterValues) => void;
}

export default function FilterForm({ onSubmit }: FilterFormProps) {
  const [feedId, setFeedId] = React.useState("");
  const [feedStatus, setFeedStatus] = React.useState<string[]>([]);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ feed_id: feedId, feedStatus });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, marginBottom: 2 }}
    >
      <TextField
        label="Feed ID"
        variant="outlined"
        value={feedId}
        onChange={(e) => setFeedId(e.target.value)}
      />
      <FormControl variant="outlined" sx={{ minWidth: 200 }}>
        <InputLabel>Feed Status</InputLabel>
        <Select
          multiple
          value={feedStatus}
          onChange={(e) =>
            setFeedStatus(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            )
          }
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
        Entrer
      </Button>
    </Box>
  );
}
