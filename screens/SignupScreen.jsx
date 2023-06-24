import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  Platform,
  Keyboard,
} from "react-native";
import Button from "../components/Button";
import InputText from "../components/TextInput";
import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { BaseApple, BaseFaceBook, BaseGoogle } from "../components/Images";

const Separator = () => <View style={styles.separator} />;

function SignupScreen({ navigation }) {
  const onPress = () => {
    navigation.navigate("Dob");
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.key}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <InputText name={"name"} />
            <InputText name={"email"} />
            <InputText name={"password"} />
            <View style={styles.btnContainer}>
              <Button name={"Next"} onPress={onPress} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={styles.divider}>
        <Separator />
        <Text style={styles.divText}>or</Text>
        <Separator />
      </View>
      <View style={styles.authOrders}>
        <BaseFaceBook />
        <BaseGoogle />
        <BaseApple />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F0F0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: "3rem",
  },
  key: {
    alignSelf: "stretch",
  },
  inner: {
    gap: "2rem",
  },
  separator: {
    borderBottomColor: "#171919",
    borderBottomWidth: "0.125rem",
    height: 0,
    flex: 1,
  },
  divider: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "5px",
    alignSelf: "stretch",
    gap: "0.75rem",
    marginTop: "1.81rem",
    marginBottom: "2.38rem",
  },
  divText: {
    fontSize: "0.9375rem",
    fontFamily: "Montserrat_700Bold",
  },
  authOrders: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
export default SignupScreen;
