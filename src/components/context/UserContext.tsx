import React, { createContext, useContext, useState } from 'react';

export type AuthUser = {
  name: string;
  email: string;
};

type UserContext = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProvider = {
  children: React.ReactNode;
};

const UserContext = createContext({} as UserContext);

function UserContextProvider({ children }: UserContextProvider) {
  const [user, setUser] = useState<AuthUser | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error('context is outside the scope of the useUser scope');
  return context;
}

export { UserContextProvider, useUser };
