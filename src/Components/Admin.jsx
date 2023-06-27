import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../services/UserService";
import styles from "../style";
import Admin_Ship from "./Admin_Ship";
import Admin_Trade from "./Admin_Trade";

const Admin = () => {
  const [active, setActive] = useState("Shipping Fulffilment");
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  console.log("Token is : " + localStorage.getItem("balboaToken"));
  console.log(userService.isLoggedIn());

  useEffect(() => {
    if (!userService.isLoggedIn()) {
      navigate("/login");
    }
    // userService.logout();
  }, []);

  return (
    <section className="flex bg-section">
      <div>
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <Admin_Ship />
        </div>
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <Admin_Trade />
        </div>
      </div>
    </section>
  );
};

export default Admin;
