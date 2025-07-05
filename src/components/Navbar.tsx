import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsModal from "./SettingsModal";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: "22px" }}>
        <AppBar position="static">
          <Toolbar>
            {/* Title */}
            <Typography variant="h6" component="div" sx={{ marginRight: 4 }}>
              Amazon Seller API
            </Typography>

            {/* Navigation Links */}
            <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
              <Link href="/feeds" passHref>
                <Button color="inherit">Feeds</Button>
              </Link>
              <Link href="/orders" passHref>
                <Button color="inherit">Orders</Button>
              </Link>
            </Stack>

            {/* Settings Icon */}
            <IconButton
              color="inherit"
              onClick={() => setOpen(true)}
              aria-label="settings"
            >
              <SettingsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Settings Modal */}
      <SettingsModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
