
import { useNavigate } from "react-router-dom";

const OrderPlace = () => {
    const navigate = useNavigate();
    const exitButton = () => {
        navigate("/");
      };
    return<div style={{
        
        textAlign: `center`
        
      }}>
        <img
        onClick={exitButton}
        src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/null/external-cross-interface-royyan-wijaya-detailed-outline-royyan-wijaya-2.png"
        alt=""
        style={{
          float: `right`,
          margin: `0rem 10rem 0 0`,
          fontSize: `1rem`,
          cursor: `pointer`,
        }}
      />
        <p>your order is placed.. have a great day.</p>
    </div>
}

export default OrderPlace