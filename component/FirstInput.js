import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const FirstInput = (props) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onDecrease.bind(this, props.numberValue, "first")}
      >
        <Text style={styles.buttonColor}>-</Text>
      </TouchableOpacity>
      <TextInput
        onChangeText={() => null}
        value={props.numberValue}
        style={styles.textInput}
        keyboardType={"number-pad"}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={props.onIncrease.bind(this, props.numberValue, "first")}
      >
        <Text style={styles.buttonColor}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: "0.8rem",
  },
  textInput: {
    marginLeft: "0.8rem",
    marginRight: "0.8rem",
    flex: 1,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: "0.8rem",
    textAlign: "center",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 50,
    width: "2rem",
    height: "2rem",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonColor: {
    color: "white",
  },
});

export default FirstInput;
