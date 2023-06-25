import React from "react";
import { StyleSheet, View } from "react-native";
import InputText from "../components/TextInput";
import Button from "../components/Button";

function Dob({ navigation }) {
  const handlePress = () => {
    navigation.navigate("InterestDiscovery");
  };

  return (
    <View style={styles.container}>
      <InputText label={"What's your date of birth?"} />
      <Button name={"Sign up"} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "6.125rem",
    paddingHorizontal: "3rem",
    gap: "1.75rem",
  },
});

export default Dob;
