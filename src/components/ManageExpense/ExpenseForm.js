import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";

const ExpenseForm = () => {
  const amountChangedHandler = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.innerContainer}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          textInputConfig={{
            placeholder: "Amount of Expense",
            keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label={"Title"}
        textInputConfig={{
          placeholder: "Title of Expense ",
          multiline: true,
          autoCorrect: false,
          autoCapitalize: "none",
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
