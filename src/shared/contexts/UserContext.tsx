import React, { createContext, useCallback, useState } from "react";
import { IUser, IUserSingUp, userService } from "../services/api/user/User";

interface IUserContextData {
  user: IUser;
  isAuth: boolean;
  signIn: (email: string, password: string) => void;
  signUp: (user: IUserSingUp) => void;
  signOut: () => void;
}
export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isAuth, setIsAuth] = useState(false);

  const signIn = useCallback(async (email: string, password: string) => {
    const response = await userService.signIn(email, password);
    if (response.success) {
      setUser(response.data);
      setIsAuth(true);
    } else {
      console.log(response.messages?.join(",\n"));
    }
  }, []);

  const signUp = useCallback(async (user: IUserSingUp) => {
    const response = await userService.signUp(user);
    if (response.success) {
      setUser(response.data);
      setIsAuth(true);
    } else {
      console.log(response.messages?.join(",\n"));
    }
  }, []);

  const signOut = useCallback(async () => {
    setIsAuth(false);
    setUser({} as IUser);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isAuth,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
