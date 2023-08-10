// import React, { useEffect } from "react";
// import { Outlet, Navigate } from "react-router-dom";
// import Stack from "@mui/material/Stack";
// import Sidebar from "./Sidebar";
// import { useDispatch, useSelector } from "react-redux";
// import { connectSocket, socket } from "../../socket";
// import { showSnackbar } from "../../Redux/slices/app";

// const DashboardLayout = () => {
//   const { isLoggedIn } = useSelector((state) => state.auth);

//   const user_id = window.localStorage.getItem("user_id");

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (isLoggedIn) {
//       window.onload = function () {
//         if (!window.location.hash) {
//           window.location = window.location + "#loaded";
//           window.location.reload();
//         }
//       };

//       window.location.reload();
// ;

//       if (!socket) {
//         connectSocket(user_id);
//       }

//       // "new_friend_request"

//       socket.on("new_friend_request", (data) => {
//         console.log(data.message);
//         dispatch(showSnackbar({ severity: "success", message: data.message }));
//       });
//       socket.on("request_accepted", (data) => {
//         console.log(data.message);
//         dispatch(showSnackbar({ severity: "success", message: data.message }));
//       });
//       socket.on("request_sent", (data) => {
//         console.log(data.message);
//         dispatch(showSnackbar({ severity: "success", message: data.message }));
//       });
//     }

//     return () => {
//       socket.off("new_friend_request");
//       socket.off("request_accepted");
//       socket.off("request_sent");
//     };
//   }, [isLoggedIn, socket]);
//   if (!isLoggedIn) {
//     return <Navigate to="/auth/login" />;
//   }

//   return (
//     <Stack direction="row">
//       <Sidebar />
//       <Outlet />
//     </Stack>
//   );
// };

// export default DashboardLayout;


import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../../socket";
import { showSnackbar } from "../../Redux/slices/app";

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const user_id = window.localStorage.getItem("user_id");

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      if (!socket) {
        connectSocket(user_id);
      }

      socket.on("new_friend_request", (data) => {
        console.log(data.message);
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });
      socket.on("request_accepted", (data) => {
        console.log(data.message);
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });
      socket.on("request_sent", (data) => {
        console.log(data.message);
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });
    }

    return () => {
      socket.off("new_friend_request");
      socket.off("request_accepted");
      socket.off("request_sent");
    };
  }, [isLoggedIn, socket]);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Stack direction="row">
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
