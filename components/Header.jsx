import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { BookIcon, SearchIcon } from "./Images";

function Header() {
  return (
    <View style={[styles.container, styles.shadowProps]}>
      <BookIcon />
      <Text style={styles.title}>Hi, Favour!</Text>
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
    backgroundColor: "#F0F0F0",
  },
  shadowProps:
    Platform.OS === "android"
      ? { elevation: 20, shadowColor: "#FFFF" }
      : {
          shadowColor: "#FFFFFF",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
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
