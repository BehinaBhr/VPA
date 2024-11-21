import "./Admin.scss";
import { DocumentTitle } from "../../utils/utils.js";
import adminIcon from "../../assets/images/admin.svg";
import LoginForm from "../../components/LoginForm/LoginForm.js";
import Logout from "../../components/Logout/Logout.js";
import { useAuth } from "../../utils/auth.js";

const Admin = () => {
  DocumentTitle("Admin Panel");
  const { token } = useAuth();

  return (
    <div className="admin">
      <section className="admin__header">
        <img className="admin__header-icon" src={adminIcon} alt="admin panel icon" />
        <h2 className="admin__header-title">Admin Panel</h2>
        <p className="admin__header-info">
          {token ? (
            <>You are currently logged in as an admin.</>
          ) : (
            <>Please log in to access the admin features for manageing the website's content and settings.</>
          )}
        </p>
      </section>

      {token ? <Logout /> : <LoginForm />}
    </div>
  );
};

export default Admin;
