import { createContext, useState, useContext, useEffect } from "react";
import Regiser from "../components/contents/Register";

export const RegisterContext = createContext({});

export function useRegister() {
  return useContext(RegisterContext);
}
export const RegisterContextProvider = (props) => {
  const [register, setRegister] = useState({});
  useEffect(() => {
    localStorage.setItem("user", register);
  }, [register]);
  return (
    <RegisterContext.Provider value={[register, setRegister]}>
      {props.children}
    </RegisterContext.Provider>
  );
};
export default RegisterContextProvider;
