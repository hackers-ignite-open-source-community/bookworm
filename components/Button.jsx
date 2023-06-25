import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ log, name, icon, onPress, bg }) {
  if (log) {
    return (
      <Pressable onPress={""}>
        <View style={styles.containerLog}>
          <Text style={styles.textLog}>Login</Text>
        </View>
      </Pressable>
    );
  }
  if (bg) {
    styles.container = { ...styles.container, backgroundColor: bg };
  }
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {icon}

        <Text style={styles.text}>{name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: "18px",
    paddingHorizontal: "71px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    alignSelf: "stretch",
    borderRadius: "30px",
    backgroundColor: "#171919",
  },
  containerLog: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: "18px",
    paddingHorizontal: "71px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    alignSelf: "stretch",
    borderRadius: "30px",
    backgroundColor: "#FFF",
    borderWidth: "2px",
    borderColor: "#171919",
    borderStyle: "solid",
    color: "#171919",
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    fontSize: "0.9375rem",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: 600,
  },
  textLog: {
    color: "#171919",
    textAlign: "center",
    fontSize: "0.9375rem",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: 600,
  },
  appleLogo: {
    display: "flex",
    flexDirection: "column",
    width: 15,
    height: 15,
  },
});

export default Button;
