import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BookIcon, SearchIcon } from "./Images";

function Header() {
  return (
    <View style={styles.container}>
      <BookIcon />
      <Text style={styles.title}>Hi, Favour</Text>
      <View style={styles.prop}>
        <SearchIcon />
        <Image source={require("/public/images/user.png")} style={styles.img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "1.44rem",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "0.9375rem",
    color: "#171919",
    fontFamily: "Montserrat_500Medium",
  },
  prop: {
    flexDirection: "row",
    gap: "0.5rem",
    alignItems: "center",
  },
  img: {
    width: "1.875rem",
    height: "1.875rem",
    borderRadius: "50%",
  },
});

export default Header;
