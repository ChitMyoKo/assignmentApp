import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import FirstInput from "./component/FirstInput";
import SecondInput from "./component/SecondInput";
import ThirdInput from "./component/ThirdInput";

export default function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [thirdNumber, setThirdNumber] = useState(0);

  const increase = (num, value) => {
    let number = num + 1;
    if (value == "first") setFirstNumber(number);
    else if (value == "second") setSecondNumber(number);
    else setThirdNumber(number);
  };
  const decrease = (num, value) => {
    let number = num - 1;
    if (value == "first") {
      setFirstNumber(number);
    } else if (value == "second") {
      setSecondNumber(number);
    } else {
      setThirdNumber(number);
    }
  };
  return (
    <View style={styles.container}>
      <FirstInput
        onDecrease={decrease}
        numberValue={firstNumber}
        onIncrease={increase}
      />
      <SecondInput
        onDecrease={decrease}
        numberValue={secondNumber}
        onIncrease={increase}
      />
      <ThirdInput
        onDecrease={decrease}
        numberValue={thirdNumber}
        onIncrease={increase}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "0.8rem",
  },
});
