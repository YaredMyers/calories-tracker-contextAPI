import { useContext } from "react";

import { ActivityContext } from "../context/ActivityContext.tsx";

export const useActivity = () => {
  const context = useContext(ActivityContext);

  if (!context) {
    throw new Error(
      "El hooks useActivity debe ser utilizado en un ActivityProvider",
    );
  }
  return context;
};
