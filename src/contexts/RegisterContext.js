import { createContext, useState, useContext, useEffect } from "react";

export const RegisterContext = createContext({});

export function useRegister() {
  return useContext(RegisterContext);
}
const RegisterContextProvider = (props) => {
  const [register, setRegister] = useState({});
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(register));
  }, [register]);
  return (
    <RegisterContext.Provider value={[register, setRegister]}>
      {props.children}
    </RegisterContext.Provider>
  );
};
export default RegisterContextProvider;
