import { View, Text } from "react-native";
import React from "react";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutPut";
import { useSelector } from "react-redux";

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expenses.allExpenses);
  return (
    <ExpensesOutPut
      expenses={expenses}
      expensesPeriod={"Total"}
      fallbackText="No registered expenses found"
    />
  );
};

export default AllExpenses;
