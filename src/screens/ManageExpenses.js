import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../store/redux/expenseSlice";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

export default function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    navigation.goBack();
    dispatch(deleteExpense(editedExpenseId));
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    navigation.goBack();
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          title: "Update Title",
          amount: 100,
          date: new Date(),
        })
      );
    } else {
      dispatch(
        addExpense({
          id: "e3",
          title: "Add TV",
          amount: 799.49,
          date: new Date(),
        })
      );
    }
  };

  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
