import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function InterestCard({ interest, handlePress }) {
  return (
    <View
      style={[
        styles.container,
        { width: interest?.flex, zIndex: `${0} !important`, flex: interest?.x },
      ]}
    >
      <Pressable onPress={handlePress}>
        <ImageBackground
          source={require(`../public/images/${interest.img}`)}
          imageStyle={styles.wrapper}
          resizeMode="fill"
        >
          <Text style={styles.text}>{interest.name}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingTop: "8.44rem",
    paddingBottom: "1.19rem",
    paddingLeft: "1.06rem",
    fontFamily: "Montserrat_500Medium",
    fontSize: "1.25rem",
    color: "white",
    backgroundColor: "linear-gradient(#000000, #000000)",
    borderRadius: "30px",
  },
  wrapper: {
    borderRadius: "30px",
    width: "100%",
  },
  container: {
    borderRadius: "30px",
    zIndex: 0,
    position: "relative",
    display: "inline-flex",
  },
});

export default InterestCard;
