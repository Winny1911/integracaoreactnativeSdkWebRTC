import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomText = ({ text = "Custom text", children, preset }) => {
  return (
    <View style={style.textWrapper}>
      <Text style={preset === "title" ? style.title : style.text}>
        {children || text}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  textWrapper: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  text: {
    color: "#000000",
    fontSize: 14,
    lineHeight: 18,
  },
  title: {
    color: "#000000",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
});

export default CustomText;
