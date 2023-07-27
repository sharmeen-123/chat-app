import React from "react";
import { Box, Divider, IconButton, Link, Stack, Typography} from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import {useTheme } from "@mui/material/styles";
import { Calllogs, ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import ChatElement from "../../components/ChatElement";
import CreateGroup from "../../sections/main/CreateGroup";
import { useState } from "react";
import { CalllogElement } from "../../components/CallElement";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const theme = useTheme()
  const [openDialog, setOpenDialog] = useState(false);
  
  const handleCloseDialog= () => {
    setOpenDialog(false);
  };

  return (
    <>
       <Stack
        direction={"row"}
        sx={{
          width: "100%",
        }}
      >
        {/* Left */}
        <Box
          sx={{
            height: "100%",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
                width: 320,
                boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',

          }}
        >

            <Stack p={3} spacing={2} sx={{
                maxHeight:'100vh'
            }}>

            <Stack>
                <Typography variant='h5'>
                    Call Logs
                </Typography>
            </Stack>
            <Stack sx={{width: '100%'}}>
            <Search>
            <Stack sx={{ width: "100%" }} direction="row">
              <SearchIconWrapper>
                <MagnifyingGlass color="#209CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                sx={{
                  marginLeft: 5,
                }}
              />
            </Stack>
          </Search>

            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant={'subtitle2'} component={Link}>
                    Start Conversation
                </Typography>
                <IconButton onClick={() => {
                    setOpenDialog(true)
                }}>
                    <Plus style={{color:  theme.palette.primary.main}}/>
                </IconButton>
            </Stack>
<Divider />

<Stack
          direction="column"
          spacing={3}
          sx={{
            flexGrow: 1,
            overflowY: "scroll",
            height: "100%",
          }}
        >
          <SimpleBarStyle
          timeout={500}
          clickOnTrack={false}
          >
            <Stack spacing={2.5}>
             
             {/* Call logs */}
             {Calllogs.map((el) => {
              return(<CalllogElement {...el} />)
             })}


            </Stack>
          </SimpleBarStyle>
        </Stack>
            </Stack>
        </Box>
        {/* Right */}
        {/* TODO => reuse conversation component*/}
      </Stack>

      {openDialog &&<StartCall open={openDialog} handleClose={handleCloseDialog} />}
    </>
  )
}

export default Call
