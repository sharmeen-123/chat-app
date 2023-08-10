import React from "react";
import {
  Box,
  Badge,
  Stack,
  Avatar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {Chat} from 'phosphor-react'
import { socket } from "../socket";
import StyledBadge from "./StyledBadge.";
const StyledChatBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
  },
}));
const user_id = window.localStorage.getItem("user_id");

const UserComponent = ({ firstName, lastName, _id, online, img }) => {
  
  const theme = useTheme();
  const name = `${firstName} ${lastName}`;

  return (
    <StyledChatBox
      sx={{
        width: "100%",

        borderRadius: 1,

        backgroundColor: theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction="row" alignItems={"center"} spacing={2}>
          {" "}
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt={name} src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center" direction={"row"}>
          <Button
            onClick={() => {
              socket.emit("friend_request", { to: _id, from: user_id }, () => {
                alert("request sent");
              });
            }}
          >
            Send Request
          </Button>
        </Stack>
      </Stack>
    </StyledChatBox>
  );
};


// id ==> request id
const FriendRequestComponent = ({ firstName, lastName, _id, online, img, id  }) => {
    
    const theme = useTheme();
    const name = `${firstName} ${lastName}`;
  
    return (
      <StyledChatBox
        sx={{
          width: "100%",
  
          borderRadius: 1,
  
          backgroundColor: theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction="row" alignItems={"center"} spacing={2}>
            {" "}
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt={name} src={img} />
              </StyledBadge>
            ) : (
              <Avatar alt={name} src={img} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} alignItems="center" direction={"row"}>
            <Button
              onClick={() => {
                socket.emit("accept_request", { request_id: id}, () => {
                  alert("request sent");
                });
              }}
            >
              Accept Request
            </Button>
          </Stack>
        </Stack>
      </StyledChatBox>
    );
  };

  const FriendComponent = ({ firstName, lastName, _id, online, img }) => {
    const theme = useTheme();
    const name = `${firstName} ${lastName}`;
  
    return (
      <StyledChatBox
        sx={{
          width: "100%",
  
          borderRadius: 1,
  
          backgroundColor: theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction="row" alignItems={"center"} spacing={2}>
            {" "}
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt={name} src={img} />
              </StyledBadge>
            ) : (
              <Avatar alt={name} src={img} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} alignItems="center" direction={"row"}>
            <IconButton onClick={() => {
                // start a new conversation

                socket.emit("start_conversation", {to: _id, from: user_id});
            }}>
                <Chat />
            </IconButton>
          </Stack>
        </Stack>
      </StyledChatBox>
    );
  };

export { UserComponent, FriendRequestComponent, FriendComponent };
