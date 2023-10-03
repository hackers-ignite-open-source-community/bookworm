import React from "react";
import { Image, StyleSheet, Text, View, Platform } from "react-native";
import { BskFill, RatingStar } from "./Images";

function Book({ Newest, book }) {
  if (Newest) {
    styles.container = {
      ...styles.container,
      flexDirection: "row",
      gap: "0.75rem",
      alignItems: "center",
      maxWidth: "100%",
    };
    styles.img = {
      ...styles.img,
      width: "5.5625rem",
      height: "7.9375rem",
      marginBottom: "0rem",
    };
    styles.title = { ...styles.title, fontSize: "0.9375rem" };
    styles.stats = {
      ...styles.stats,
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "1.34rem",
    };
    styles.statsText = { ...styles.statsText, fontSize: "0.625rem" };
    z;
    return (
      <View style={styles.container}>
        <View style={styles.shadowProps}>
          <Image
            source={require(`../public/images/${book.img}`)}
            style={styles.img}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{book.title}</Text>
          <View style={styles.stats}>
            <Text style={styles.statsText}>{book.author}</Text>
            <Text style={styles.statsText}>
              {" "}
              <RatingStar width={"0.7275rem"} height={"0.7275rem"} />
              <RatingStar width={"0.7275rem"} height={"0.7275rem"} />
              <RatingStar width={"0.7275rem"} height={"0.7275rem"} />
              <RatingStar width={"0.7275rem"} height={"0.7275rem"} />
              <RatingStar width={"0.7275rem"} height={"0.7275rem"} />
            </Text>
          </View>
        </View>
        <BskFill />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={[styles.shadowProps, { marginBottom: "0.569rem" }]}>
        <Image
          source={require(`../public/images/${book.img}`)}
          style={styles.img}
        />
      </View>
      <Text style={styles.title}>{book.title}</Text>
      <View style={styles.stats}>
        <Text style={styles.statsText}>{book.author}</Text>
        <Text style={styles.statsText}>
          {" "}
          <RatingStar width={"0.63875rem"} height={"0.63875rem"} /> 5.0(7)
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: "0.041rem",
    maxWidth: "9.53038rem",
    shadowColor: "#171717",
    display: "inline-flex",
  },
  img: {
    width: "9.53038rem",
    height: "14.65425rem",
    alignSelf: "flex-start",
    display: "flex",
  },
  shadowProps:
    Platform.OS === "android"
      ? { elevation: 20, shadowColor: "#171919" }
      : {
          shadowColor: "#171919",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
        },
  title: {
    fontSize: "0.76856rem",
    fontFamily: "Montserrat_700Bold",
    color: "#171919",
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statsText: {
    color: "#63646F",
    fontSize: "0.51238rem",
    fontFamily: "Montserrat_300Light",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
  },
});
export default Book;
