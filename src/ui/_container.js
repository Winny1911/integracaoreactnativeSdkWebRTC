import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Container = ({ children }) => (
  <SafeAreaView style={style.container}>{children}</SafeAreaView>
);

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default Container;
