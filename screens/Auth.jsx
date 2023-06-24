import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { AppleIcon, BookLogo } from "../components/Images";

function Auth({ navigation }) {
  const onPressFunction = (e) => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <BookLogo />

      <View style={styles.btn}>
        <Button name={"Sign up with Apple"} icon={<AppleIcon />} />
        <Button log={true} nav={navigation} />
        <Pressable onPress={onPressFunction}>
          <Text style={styles.text}>Sign up with email instead</Text>
        </Pressable>

        <Text style={styles.tos}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    // gap: "14.4375rem",
    paddingVertical: 0,
    paddingHorizontal: "1.3125rem",
    alignSelf: "stretch",
    height: "100%",
  },
  logo: {
    width: "200",
    height: "400",
  },
  btn: {
    gap: "1.31rem",
  },
  text: {
    color: "#171919",
    fontSize: "0.9375rem",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: 600,
    alignSelf: "center",
  },
  tos: {
    color: "#63646F",
    alignSelf: "center",
    fontSize: "0.625rem",
    fontFamily: `Montserrat_300Light`,
    paddingBottom: "0.625rem",
    paddingTop: "0.75rem",
    paddingHorizontal: "0.625rem",
    textAlign: "center",
  },
});
export default Auth;
