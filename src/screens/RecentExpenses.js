import React from "react";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutPut";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../util/date";
const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expenses.allExpenses);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutPut
      expenses={recentExpenses}
      expensesPeriod={"Last 7 Days"}
      fallbackText="No expenses registered for the last 7 days"
    />
  );
};

export default RecentExpenses;
