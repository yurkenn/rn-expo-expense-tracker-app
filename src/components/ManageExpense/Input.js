import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, textInputConfig, style }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
