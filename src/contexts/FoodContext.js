import { createContext, useState, useContext, useEffect } from "react";
export default FoodContext = createContext({});

export function useFood() {
  return useContext(FoodContext);
}

export const FoodProvider = (props) => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    foodServices
      .getAllFood()
      .then((res) => res.json())
      .then((data) => {
        setFood(data.data);
      });
  }, []);
};
return (
  <FoodContext.Provider value={[food, setFood]}>
    {props.children}
  </FoodContext.Provider>
);
