import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Autocomplete,
  Avatar,
  Badge,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import CastIcon from "@mui/icons-material/Cast";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

import { Colors } from "src/constants/colors";
import { top100Films } from "src/constants/data";
import { useAuth } from "src/providers/AuthProvider";

export interface IAccountMenuProps {
  logout?: () => void;
}

export function AccountMenu(props: IAccountMenuProps) {
  const { t } = useTranslation();
  const auth = useAuth();

  const navigate = useNavigate();

  const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState<boolean>(false);

  const settingsOpen = Boolean(settingsAnchorEl);

  function onSettingsClick(event: React.MouseEvent<HTMLElement>) {
    setSettingsAnchorEl(event.currentTarget);
  }

  function onSettingsClose() {
    setSettingsAnchorEl(null);
  }

  function toggleSearch() {
    setShowSearch((state) => !state);
  }

  function onLogout() {
    setShowLogoutConfirm(true);
  }

  function onLogoutCancel() {
    setShowLogoutConfirm(false);
  }

  function onLogoutConfirm() {
    logout();
  }

  function logout() {
    onLogoutCancel();
    if (props?.logout!) {
      props?.logout();
    } else {
      auth?.logout(() => navigate("/"));
    }
  }

  return (
    <Grid container alignItems={"center"} columnGap={3}>
      <Grid item>
        <Grid container>
          <Collapse orientation="horizontal" in={showSearch} timeout={700}>
            <Autocomplete
              disablePortal
              id="search-box"
              options={top100Films}
              sx={{
                width: 250,
              }}
              size={"small"}
              renderInput={(params) => (
                <TextField {...params} label={t("common.inputs.search")} />
              )}
            />
          </Collapse>
          <Collapse orientation="horizontal" in={!showSearch}>
            <IconButton onClick={toggleSearch}>
              <SearchIcon sx={{ color: Colors?.common?.white }} />
            </IconButton>
          </Collapse>
          <Collapse orientation="horizontal" in={showSearch}>
            <IconButton onClick={toggleSearch}>
              <CancelIcon sx={{ color: Colors?.common?.white }} />
            </IconButton>
          </Collapse>
          <IconButton>
            <CastIcon sx={{ color: Colors?.common?.white }} />
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="primary">
              <NotificationsIcon sx={{ color: Colors?.common?.white }} />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
      <Grid item>
        <Tooltip title={t("common.texts.account-settings")}>
          <IconButton
            onClick={onSettingsClick}
            size="small"
            aria-controls={settingsOpen ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={settingsOpen ? "true" : undefined}
          >
            <Avatar
              sx={{
                width: 36,
                height: 36,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
            ></Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={settingsAnchorEl}
          id="account-menu"
          open={settingsOpen}
          onClose={onSettingsClose}
          onClick={onSettingsClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={onSettingsClose}>
            <Avatar /> {t("common.menus.account-menu.profile")}
          </MenuItem>
          <MenuItem onClick={onSettingsClose}>
            <Avatar /> {t("common.menus.account-menu.my-account")}
          </MenuItem>
          <Divider />
          <MenuItem onClick={onSettingsClose}>
            <ListItemIcon>
              <PersonAddIcon fontSize="small" />
            </ListItemIcon>
            {t("common.menus.account-menu.add-another-account")}
          </MenuItem>
          <MenuItem onClick={onSettingsClose}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            {t("common.menus.account-menu.settings")}
          </MenuItem>
          <MenuItem onClick={onLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            {t("common.menus.account-menu.logout")}
          </MenuItem>
        </Menu>
      </Grid>
      <Dialog
        open={showLogoutConfirm}
        onClose={onLogoutCancel}
        aria-labelledby="logout-confirm-dialog-title"
        aria-describedby="logout-confirm-dialog-description"
      >
        <DialogTitle id="logout-confirm-dialog-title">
          {t("common.texts.confirm-logout")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="logout-confirm-dialog-description">
            {t("common.texts.logout-confirmation-message")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onLogoutConfirm} autoFocus>
            {t("common.buttons.yes")}
          </Button>
          <Button onClick={onLogoutCancel}>{t("common.buttons.no")}</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default AccountMenu;
