import "./Admin.scss";
import { DocumentTitle } from "../../utils/utils";
import adminIcon from "../../assets/images/admin.svg";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logout from "../../components/Logout/Logout";
import { useEffect, useState } from "react";

const Admin = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("access_token");
    if (token) {
      setToken(token);
    }
  }, []);

  DocumentTitle("Admin Panel");

  return (
    <div className="admin">
      <section className="admin__header">
        <img className="admin__header-icon" src={adminIcon} alt="admin panel icon" loading="lazy" />
        <h2 className="admin__header-title">Admin Panel</h2>
        <p className="admin__header-info">
          {token ? (
            <>You are currently logged in as an admin.</>
          ) : (
            <>Please log in to access the admin features for manageing the website's content and settings.</>
          )}
        </p>
      </section>

      {token ? <Logout setToken={setToken} /> : <LoginForm setToken={setToken} />}
    </div>
  );
};

export default Admin;
