import React, { useEffect, useState } from "react";
import { otherServices } from "../../services/otherServices";

export default function Basket() {
  const [data, setData] = useState([]);

  useEffect(() => {
    otherServices
      .getAllFood()
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, []);

  return <div className="basket-container">bnm</div>;
}
