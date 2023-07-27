import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { updateSidebarType } from "../Redux/slices/app";
import { CaretLeft, X } from "phosphor-react";
import Message from "./conversation/Message";
const StarredMsg = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          height: "100%",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={3}
            sx={{
              height: "100%",
              p: 2,
            }}
          >
            <IconButton
              onClick={() => {
                dispatch(updateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">STARRED Messages</Typography>
          </Stack>
        </Box>

        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Message menu={false}/>
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMsg;
