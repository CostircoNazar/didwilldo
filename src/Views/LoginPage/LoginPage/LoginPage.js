import React, { useState, useEffect } from "react";
import Form from "../components/Form/Form";
import TabBar from "../components/TabBar/TabBar";
import "./styles.css";
import PropTypes from "prop-types";

function LoginPage({ loginUser }) {
   const [login, setLogin] = useState({ email: "", password: "" });
   const [signUp, setSingUp] = useState({ email: "", password: "" });
   const [tabBarButtonId, setTabBarButtonId] = useState("login");

   const handleLogin = (email, password) => {
      setLogin({ email, password });
      loginUser(email, password);
   };

   const handleSignUp = (email, password) => {
      setSingUp({ email, password });
   };

   const handleChanges = (inputData, name) => {
      if (tabBarButtonId === "login") {
         setLogin({ ...login, [name]: inputData });
      }
      if (tabBarButtonId === "register") {
         setSingUp({ ...signUp, [name]: inputData });
      }
   };

   useEffect(() => {}, [tabBarButtonId]);

   return (
      <div className="loginPage">
         <TabBar tabBarButtonId={tabBarButtonId} setTabBarButtonId={setTabBarButtonId} />
         {tabBarButtonId === "login" ? (
            <Form key="login" handleChanges={handleChanges} onSubmit={handleLogin} initValues={login} name="Logged" />
         ) : (
            <Form key="register" handleChanges={handleChanges} onSubmit={handleSignUp} initValues={signUp} name="new" />
         )}
      </div>
   );
}

LoginPage.propTypes = {
   loginUser: PropTypes.func,
   logoutUser: PropTypes.func,
};

export default LoginPage;