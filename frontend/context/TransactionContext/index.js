import React, { createContext, useContext, useState } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";
import { toast } from "react-toastify";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState({
    name: "alim",
    amount: 8999,
    transaction_type: "EXP",
    description: "jims",
    category_id: "",
    updatedat: "",
  });

  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
    // transactionData.amount <=> transactionData['amount'] <==> key="amount" transaction[key] : ''
  };

  const addTransaction = async () => {
    console.log("DATA", transactionData);
    console.log("USER", user);
    try {
      const { data } = await axios.post("http://localhost:8008/transaction", {
        ...transactionData,
        category_id: "46b9c1f0-ff76-4f90-8e13-ec66dc5210cd",
      });
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  return (
    <TransactionContext.Provider
      value={{ transactionData, changeTransactionData, addTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
