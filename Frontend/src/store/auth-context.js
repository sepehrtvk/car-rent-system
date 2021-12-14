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
    localStorage.removeItem('email');

  }, []);

  const loginHandler = (token, expirationTime,data) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('name', data.name);
    localStorage.setItem('role', data.role);
    localStorage.setItem('email', data.email);
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
