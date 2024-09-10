import "./Admin.scss";
import { DocumentTitle } from "../../utils/utils";
import { useAuth } from "../../utils/auth";
import adminIcon from "../../assets/images/admin.svg";
import loginIcon from "../../assets/images/login.svg";
import logoutIcon from "../../assets/images/logout.svg";

const Admin = () => {
  DocumentTitle("Admin Panel");

  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="admin">
      <section className="admin__header">
        <img className="admin__header-icon" src={adminIcon} alt="admin panel icon" loading="lazy" />
        <h2 className="admin__header-title">Admin Panel</h2>
        <p className="admin__header-info">
          Please log in with your google account to access the admin features for manageing the website's content and
          settings.
        </p>
      </section>
      {isAuthenticated ? (
        <section className="admin__status">
          <h3 className="admin__status-title">You are currently Logged In as Authorised Admin</h3>
          <button className="admin__status-action" onClick={logout}>
            <img className="admin__status-icon" src={logoutIcon} alt="logout icon" loading="lazy" />
            Logout
          </button>
        </section>
      ) : (
        <section className="admin__status">
          <button className="admin__status-action" onClick={login}>
            <img className="admin__status-icon" src={loginIcon} alt="login icon" loading="lazy" />
            Login
          </button>
        </section>
      )}
    </div>
  );
};

export default Admin;
