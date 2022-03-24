import React, { createContext, useCallback, useEffect, useState } from "react";
import { IUser, userService } from "../services/api/user/User";
import { Api } from "../services/axios-config/AxiosConfig";

interface IUserContextData {
  user: IUser;
  authenticated: boolean;
  isLoading: boolean;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
  handleSignUp: (user: IUser) => void;
}
export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      Api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        token
      )}`;
      setAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  const handleLogin = useCallback(async (email: string, password: string) => {
    const response = await userService.signIn(email, password);
    if (response.success) {
      localStorage.setItem("token", JSON.stringify(response.data.token));
      Api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setUser(response.data);
      setAuthenticated(true);
    } else {
      console.log(response.messages?.join(",\n"));
    }
  }, []);

  const handleLogout = useCallback(async () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    Api.defaults.headers.common["Authorization"] = "";
    setUser({} as IUser);
  }, []);

  const handleSignUp = useCallback(async (user: IUser) => {
    const response = await userService.signUp(user);
    if (response.success) {
      handleLogin(response.data.email, response.data.password);
    } else {
      console.log(response.messages?.join(",\n"));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        authenticated,
        isLoading,
        handleLogin,
        handleLogout,
        handleSignUp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
