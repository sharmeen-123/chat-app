import React from "react";
import Chat from "./Chat";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import SharedMsg from "../../components/SharedMsg";
import StarredMsg from "../../components/StarredMsg";
const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <>
      <Stack
        direction="row"
        sx={{
          width: "100%",
        }}
      >
        <Chat />
        <Box
          sx={{
            height: "100%",
            width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.paper,
          }}
        >
          <Conversation />
        </Box>
        {/* Contact */}
        {sidebar.open &&
          (() => {
            switch (sidebar.type) {
              case "CONTACT":
                return <Contact />;
              case "STARRED":
                return <StarredMsg />
              case "SHARED":
                return <SharedMsg />;
              default:
                break;
            }
          })()}
      </Stack>
    </>
  );
};

export default GeneralApp;
