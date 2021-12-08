import React, { useState, useCallback } from 'react';


const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});


export const AuthContextProvider = (props) => {
  const tokenData = localStorage.getItem('token');
  
  let initialToken;
  if (tokenData) {
    initialToken = tokenData;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');

  }, []);

  const loginHandler = (token, expirationTime,fname,role) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('name', fname);
    localStorage.setItem('role', role);
  };


  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
