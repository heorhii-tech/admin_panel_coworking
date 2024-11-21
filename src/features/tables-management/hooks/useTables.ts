import { useState, useEffect } from "react";
import { tablesServices } from "../api";
import { Table } from "@src/shared/types";

interface UseTablesResult {
  tables: Table[];
  isLoading: boolean;
  tablesActions: {
    handleAddNewTable: (tableData: Table) => Promise<void>;
  };
}
export const useTables = (): UseTablesResult => {
  const [tables, setTables] = useState<Table[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchTables = async () => {
    setIsLoading(true);
    try {
      const tables: Table[] = await tablesServices.getTables();
      setTables(tables);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);
  const tablesActions = {
    handleAddNewTable: async (tableData: Table) => {
      console.log(tableData);
      const { addTable } = tablesServices;
      setIsLoading(true);
      try {
        const newTable = await addTable(tableData);
        setIsLoading(false);
        console.log(`new table added`, newTable);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    },
  };

  return { tables, isLoading, tablesActions };
};
