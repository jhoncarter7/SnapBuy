import { createSlice } from "@reduxjs/toolkit";


// const notificationSlice = createSlice({
//     name: "ui",
//     initialState: {notification: null},
//     reducers:{
//     showNotification(state, action)  {
//     state.notification = {
//         status: action.payload.status,
//         title: action.payload.title,
//         isdataFetch: action.payload.isdataFetch
//     }
//     }
//     }
// })

const notificationSlice = createSlice({
    name: "ui",
    initialState: { cardIsVisible: false, notification: null },
    reducers: {
     
      showNotification(state, action) {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      },
    },
  });

export const notificationAction = notificationSlice.actions
export default notificationSlice