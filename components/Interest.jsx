import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Interest({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    paddingHorizontal: "1.5625rem",
    paddingVertical: "0.625rem",
    alignItems: "center",
    borderRadius: "30px",
    borderColor: "#171919",
    borderWidth: "1px",
    display: "inline",
  },
  name: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "0.9375rem",
  },
});

export default Interest;
