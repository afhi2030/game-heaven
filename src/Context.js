import React, { useEffect, useState } from 'react';

export const AuthContext =  React.createContext();

export const GameProvider = ({ children }) => {
  const [user, serUser] = useState(null);
  useEffect(() => {
    // firebase.auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}