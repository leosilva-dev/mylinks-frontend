import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

export const useTask = () => {
  const context = useContext(UserContext);

  return context;
};
