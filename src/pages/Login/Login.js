// import "./Admin.scss";
// import { DocumentTitle } from "../../utils/utils";
// import { useAuth } from "../../utils/auth";
// import adminIcon from "../../assets/images/admin.svg";
// import loginIcon from "../../assets/images/login.svg";
// import logoutIcon from "../../assets/images/logout.svg";
// import { supabase } from "../../utils/supabaseClient";
// import { useEffect, useState } from "react";

// const Admin = () => {
//   const [user2, setUser] = useState(null);

//   useEffect(() => {
//     const checkAuth = async () => {
//       let user = await supabase.auth.getUser(sessionStorage.getItem("access_token"));
//       setUser(user);
//     };

//     checkAuth();
//   }, []);

//   console.log(sessionStorage.getItem("access_token"));
//   console.log(user2);

//   DocumentTitle("Admin Panel");
//   const { isAuthenticated, user, login, logout } = useAuth();
//   return (
//     <div className="admin">
//       <section className="admin__header">
//         <img className="admin__header-icon" src={adminIcon} alt="admin panel icon" loading="lazy" />
//         <h2 className="admin__header-title">Admin Panel</h2>
//         <p className="admin__header-info">
//           Please log in with your google account to access the admin features for manageing the website's content and
//           settings.
//         </p>
//       </section>
//       {isAuthenticated ? (
//         <section className="admin__status">
//           <h3 className="admin__status-title">You are currently Logged In as {user.email}</h3>
//           <button className="admin__status-action" onClick={logout}>
//             <img className="admin__status-icon" src={logoutIcon} alt="logout icon" loading="lazy" />
//             Logout
//           </button>
//         </section>
//       ) : (
//         <section className="admin__status">
//           <button className="admin__status-action" onClick={login}>
//             <img className="admin__status-icon" src={loginIcon} alt="login icon" loading="lazy" />
//             Login
//           </button>
//         </section>
//       )}
//     </div>
//   );
// };

// export default Admin;

import { DocumentTitle } from "../../utils/utils";
import { supabase } from "../../utils/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

const Login = () => {
  DocumentTitle("Login Page");
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      // Forward to success page
      navigate("/login");
    } else {
      // Forward to login page
      navigate("/login");
    }
  });

  return (
    <div className="login">
      <Auth
        supabaseClient={supabase}
        providers={["google", "github"]}
        appearance={{ theme: ThemeSupa }}
        // Ensures no email/password inputs appear
        onlyThirdPartyProviders={true}
      />
    </div>
  );
};

export default Login;
