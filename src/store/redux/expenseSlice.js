import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    allExpenses: [
      {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
      },
    ],
  },
  reducers: {
    addExpense: (state, action) => {
      state.allExpenses.push(action.payload);
    },
    deleteExpense: (state, action) => {
      state.allExpenses = state.allExpenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    updateExpense: (state, action) => {
      const expenseIndex = state.allExpenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      state.allExpenses[expenseIndex] = action.payload;
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expenseSlice.actions;

export default expenseSlice.reducer;
