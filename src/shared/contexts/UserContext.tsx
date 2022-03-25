import React, { createContext, useCallback, useEffect, useState } from "react";
import { IUser, userService } from "../services/api/user/User";
import { Api } from "../services/axios-config/AxiosConfig";
import { Feedback } from "../services/feedback/Feedback";

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
    setIsLoading(true);

    const response = await userService.signIn(email, password);
    if (response.success) {
      localStorage.setItem("token", JSON.stringify(response.token));
      Api.defaults.headers.common["Authorization"] = `Bearer ${response.token}`;
      setUser(response.data);
      setAuthenticated(true);
      Feedback("Login realizado com sucesso!", "success");
    } else {
      console.log(response.messages?.join(",\n"));
    }
    setIsLoading(false);
  }, []);

  const handleLogout = useCallback(async () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    Api.defaults.headers.common["Authorization"] = "";
    setUser({} as IUser);
  }, []);

  const handleSignUp = useCallback(async (user: IUser) => {
    setIsLoading(true);

    const response = await userService.signUp(user);
    if (response.success) {
      localStorage.setItem("token", JSON.stringify(response.token));
      Api.defaults.headers.common["Authorization"] = `Bearer ${response.token}`;
      setUser(response.data);
      setAuthenticated(true);
      Feedback("Cadastro realizado com sucesso!", "success");
    } else {
      console.log(response.messages?.join(",\n"));
    }
    setIsLoading(false);
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
