import React, { useState, useEffect, useReducer } from "react";
import { tablesServices } from "../api";
import { Table } from "@src/shared/types";
import { message } from "antd";
import { Primitive } from "firebase/firestore";

interface UseTablesResult {
  tables: Table[];
  isLoading: boolean;
  tablesActions: {
    handleAddNewTable: (tableData: Table) => Promise<void>;
    handleDeleteTable: (tableID: string) => Promise<void>;
    getTableById: (id: string | undefined) => Table | undefined;
    handleEditTable: (data: Table) => Promise<void>;
  };
  contextHolder: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
}
export const useTables = (): UseTablesResult => {
  const [tables, setTables] = useState<Table[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();
  const [error, setError] = useState<string>("");

  const fetchTables = async () => {
    setIsLoading(true);
    try {
      const tables: Table[] = await tablesServices.getTables();
      setTables(tables);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const tablesActions = {
    handleAddNewTable: async (tableData: Table) => {
      setIsLoading(true);
      const { addTable } = tablesServices;

      try {
        const newTable = await addTable(tableData);

        fetchTables();
        setIsLoading(false);
        setSuccess(`New table added successfully`);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    },
    handleDeleteTable: async (tableID: string) => {
      try {
        const { deleteTable } = tablesServices;
        const table = await deleteTable(tableID);
        fetchTables();
        setSuccess(`Table with name ${tableID} was successfully deleted.`);
      } catch (error: any) {
        setError(error);
      }
    },
    getTableById: (id: string | undefined) => {
      return tables.find((table) => table.tableID === id);
    },
    handleEditTable: async (data: Table) => {
      const { editTable } = tablesServices;
      try {
        const edited = await editTable(data);
        console.log(edited);
      } catch (error) {
        console.log(error);
      }
    },
  };

  useEffect(() => {
    if (error) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  }, [error, messageApi]);

  useEffect(() => {
    if (success) {
      messageApi.open({
        type: "success",
        content: success,
      });
    }
  }, [success, messageApi]);

  return { tables, isLoading, tablesActions, contextHolder };
};
