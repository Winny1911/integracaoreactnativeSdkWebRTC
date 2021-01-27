import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";

const TouchAction =
  Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;

const CustomButton = ({ title = "Some title", onPress = () => {} }) => {
  return (
    <View style={style.buttonContainer}>
      <TouchAction onPress={onPress}>
        <View style={style.button}>
          <Text style={style.text}>{title}</Text>
        </View>
      </TouchAction>
    </View>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#6e56ed",
    color: "#FFFFFF",
    borderRadius: 8,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
  },
});

export default CustomButton;
