import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const renderExpenses = ({ item }) => {
  return <ExpenseItem {...item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenses}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
