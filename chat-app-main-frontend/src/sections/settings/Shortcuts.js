import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
  {
    key: 0,
    title: "Mark as unread",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    key: 1,
    title: "Mute",
    combination: ["Cmd", "Shift", "M"],
  },
  {
    key: 2,
    title: "Archive Chat",
    combination: ["Cmd", "Shift", "E"],
  },
  {
    key: 3,
    title: "Delete Chat",
    combination: ["Cmd", "Shift", "D"],
  },
  {
    key: 4,
    title: "Pin Chat",
    combination: ["Cmd", "Shift", "P"],
  },
  {
    key: 5,
    title: "Search",
    combination: ["Cmd", "F"],
  },
  {
    key: 6,
    title: "Search Chat",
    combination: ["Cmd", "Shift", "F"],
  },
  {
    key: 7,
    title: "New Chat",
    combination: ["Cmd", "N"],
  },
  {
    key: 8,
    title: "Next Chat",
    combination: ["Ctrl", "Tab"],
  },
  {
    key: 9,
    title: "Previous Chat",
    combination: ["Ctrl", "Shift", "Tab"],
  },
  {
    key: 10,
    title: "New Group",
    combination: ["Cmd", "Shift", "N"],
  },
  {
    key: 11,
    title: "Profile & About",
    combination: ["Cmd", "P"],
  },
  {
    key: 13,
    title: "Settings",
    combination: ["Shift", "."],
  },
  {
    key: 14,
    title: "Emoji Panel",
    combination: ["Cmd", "E"],
  },
  {
    key: 15,
    title: "Sticker Panel",
    combination: ["Cmd", "S"],
  },
];

const Shortcuts = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        keepMounted
        maxWidth="md"
        TransitionComponent={Transition}
        open={open}
        onClose={handleClose}
        sx={{ p: 4 }}
      >
        <DialogTitle>Keyboard Shortcuts</DialogTitle>
        <DialogContent
          p={2}
          sx={{
            mt: 4,
            overflowY: "scroll",
          }}
        >
          <Grid container spacing={3}>
            {list.map(({ key, title, combination }) => {
              return (
                <Grid key={key} container xs={6} p={0.5}>
                  <Stack
                    sx={{ width: "100%" }}
                    justifyContent={"space-between"}
                    spacing={3}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography variant="caption" sx={{ fontSize: 14, mt: 4 }}>
                      {title}
                    </Typography>
                    <Box style={{ marginTop: "32px" }}>
                      <Stack spacing={2} direction={"row"}>
                        {combination.map((el) => {
                          return (
                            <Button
                              disabled
                              variant="contained"
                              sx={{ color: "#212121" }}
                            >
                              {el}
                            </Button>
                          );
                        })}
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Shortcuts;
