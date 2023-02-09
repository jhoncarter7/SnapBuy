// import { useDispatch } from "react-redux";
import { cartAction } from "./cart-Slice";
// import notificationAction from "./notification-slice"
export const FetchingCartData = (localId) => {

  return async (dispatch) => {
    const fetchingData = async () => {
      // dispatch(
      //   notificationAction.showNotification({
      //     status: "pending",
      //     title: "pending",
      //     isdataFetch: "false"
      //   }))
      const response = await fetch(
        `https://e-commerse-afecb-default-rtdb.firebaseio.com/${localId}/cart.json`
      );

      if (!response.ok) {
        throw new Error("data cant fetch");
      }
      
      const data = await response.json();

   
      console.log(data);
      return data;
    };
    try {
      const cartData = await fetchingData();
      // dispatch(
      //   notificationAction.showNotification({
      //     isdataFetch: "false"
      //   }))

      dispatch(
        cartAction.replaceCartData({
          items: cartData.items || [],
          actualProduct: cartData.actualProduct,
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      console.log("fetching  cart data failed");
    }
  };
};

// sending cart data to the backend....
export const sendingCartData = (localId, cart) => {
  // const dispatch = useDispatch();
  return async (dispatch) => {
    const sendingData = async () => {
      const response = await fetch(
        `https://e-commerse-afecb-default-rtdb.firebaseio.com/${localId}/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            actualProduct: cart.actualProduct,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("data can't send");
      }
    };

    try {
      await sendingData();
      // dispatch(
      // notificationAction.showNotification({
      //   status: "success",
      //   title: "your item is added",
      //   isdataFetch: "true"
      // })
      // )
    } catch (error) {
      // dispatch(
      //   notificationAction.showNotification({
      //     status: "error",
      //     title: "Error",
      //     isdataFetch: "false"
      //   }))
    }
  };
};
