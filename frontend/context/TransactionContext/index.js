import React, { createContext, useContext, useEffect } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import myAxios from "@/utils/axios";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState({
    name: "alim",
    amount: 8999,
    transaction_type: "EXP",
    description: "jims",
    category_id: "e49029c3-a0ed-4881-aa07-e1ad69cd740e",
    updatedat: "2014",
  });
  const [transactions, setTransactions] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
    // transactionData.amount <=> transactionData['amount'] <==> key="amount" transaction[key] : ''
  };

  const addTransaction = async () => {
    console.log("DATA", transactionData);
    console.log("USER", user);
    try {
      const { data } = await myAxios.post("/transaction", {
        ...transactionData,
        user_id: "1fcdbe50-037a-492b-99db-76725a3db8f0",
      });
      setReFetch(!reFetch);
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };
  const getTransactions = async () => {
    try {
      const {
        data: { transaction },
      } = await myAxios.get("/transaction/" + user_id);
      console.log("TRA");
      // toast.success("Гүйлгээнүүдийг амжилттай татлаа.");
      setTransactions(transaction);
    } catch (error) {
      console.log("TER", error);
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  // const getTotalIncome = async () => {
  //   try {
  //     const {
  //       data: { transactions },
  //     } = await axios.get("http://localhost:8008/transaction/" + user_id);
  //   } catch (error) {
  //     console.log("TER", error);
  //     toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
  //   }
  // };
  // };

  useEffect(() => {
    console.log("TCT");
    getTransactions();
  }, [reFetch]);

  return (
    <TransactionContext.Provider
      value={{
        transactionData,
        changeTransactionData,
        addTransaction,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
