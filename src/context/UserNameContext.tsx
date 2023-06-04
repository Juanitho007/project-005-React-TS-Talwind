/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext, useState, ReactNode } from "react";
import { UserNameContextType } from "../interfaces/interfaces";
interface UserNameProviderProps {
  children: ReactNode;
}

export const UserNameContext = createContext<UserNameContextType>({
  userName: "",
  saveUserName: () => {},
  removeUserName: () => {},
});

export const UserNameProvider = ({ children }: UserNameProviderProps) => {
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const saveUserName = (name: string) => {
    setUserName(name);
    localStorage.setItem("userName", name);
  };
  const removeUserName = () => {
    setUserName("");
  };
  const values: UserNameContextType = {
    userName,
    saveUserName,
    removeUserName,
  };

  return (
    <UserNameContext.Provider value={values}>
      {children}
    </UserNameContext.Provider>
  );
};
