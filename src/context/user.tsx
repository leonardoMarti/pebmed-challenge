import React, { createContext, ReactNode, useState } from 'react';

export const UserContext = createContext(null);

interface UserContextProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState();

  const context = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
