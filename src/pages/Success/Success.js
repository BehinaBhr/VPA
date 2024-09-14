import { DocumentTitle } from "../../utils/utils";
import { supabase } from "../../utils/supabaseClient";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  DocumentTitle("Success Page");

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      await supabase.auth.getUser().then((value) => {
        //value.data.user
        if (value.data?.user) {
          setUser(value.data.user);
        }
        getUserData();
      });
    };
  }, []);

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="success">
      {Object.keys(user).length !== 0 ? (
        <>
          <h2>Success</h2>
          <button onClick={() => signOutUser()}>Logout</button>
        </>
      ) : (
        <>
          <h2> User is not logged in </h2>
          <button onClick={() => navigate("/login")}>Go to Login page</button>
        </>
      )}
    </div>
  );
};

export default Success;
