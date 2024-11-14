import { useState, useEffect } from "react";
import { services } from "../api/services";
export const useTables = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    (async () => {
      const tables = await services.getTables();
      console.log(tables);
    })();
  }, []);
  return {};
};
