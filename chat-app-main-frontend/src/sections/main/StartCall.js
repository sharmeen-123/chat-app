import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { MembersList } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        sx={{
          p: 4,
        }}
      >
        {/* title */}
        <DialogTitle
          sx={{
            mb: 3,
          }}
        >
          Start Call
        </DialogTitle>
        {/* content */}
        <DialogContent>
          <Stack spacing={0.2}>
            <Stack sx={{ width: "100%" }}>
              {/* Search  */}
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

            {/* Call list */}
            {MembersList.map((el) => {
              return <CallElement {...el} />;
            })}
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StartCall;
