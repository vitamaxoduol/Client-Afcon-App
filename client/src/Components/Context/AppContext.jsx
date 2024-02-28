import React, { createContext, useContext, useState } from "react";

const CONT = createContext();
export const useMyCustomHook = () => useContext(CONT);

function AppContext(props) {
  const [userIsLoged, setUserIsLoged] = useState(false);
  const [payCardState, setPayCardState] = useState(false);

  // State to store logged-in user ID
  const [LOGGED_IN_USER_ID, setLoggedInUserID] = useState(null); 

  const API_URL = "http://127.0.0.1:5000";
  const classes = {
    functions: "function",
  };

  return (
    <CONT.Provider 
      value={{
        classes,
        API_URL,
        LOGGED_IN_USER_ID, // provide this to child components
        setLoggedInUserID, // method to set the user ID
        userIsLoged,
        setUserIsLoged,
        payCardState,
        setPayCardState
      }}
    >
      {props.children}
    </CONT.Provider>
  );
}

export { AppContext, CONT };
