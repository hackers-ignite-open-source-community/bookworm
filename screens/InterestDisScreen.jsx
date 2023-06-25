import React from "react";
import Interest from "../components/Interest";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

function InterestDisScreen({ navigation }) {
  const intersts = [
    "Romance",
    "Sci-fi",
    "Horror",
    "Thriller",
    "True Crime",
    "Travel",
    "Non-Friction",
    "Biography/Memoir",
    "Western",
    "Young Adult",
  ];

  const handlePress = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.skip}>Skip</Text>
      <Text style={styles.heading}>
        Help us personalize your <Text style={styles.blue}>Bookworm</Text>{" "}
        experience!
      </Text>
      <View>
        <Text style={styles.sub}>Please select up to five bok genres:</Text>

        <FlatList
          data={intersts}
          renderItem={({ item }) => <Interest name={item} />}
          keyExtractor={(item, index) => index}
          horizontal={true}
          contentContainerStyle={styles.list}
        />
      </View>
      <Button name={"Continue"} onPress={handlePress} bg={"#004BE0"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "1.44rem",
    gap: "1.31rem",
  },
  skip: {
    fontFamily: "Montserrat_300Light",
    fontSize: "0.9375rem",
    color: "#171919",
  },
  heading: {
    fontFamily: "Montserrat_700Bold",
    fontSize: "1.875rem",
    color: "#171919",
  },
  blue: {
    color: "#004BE0",
    display: "inline",
  },
  sub: {
    fontFamily: "Montserrat_300Light",
    fontSize: "0.9375rem",
    color: "#171919",
    marginBottom: "2.44rem",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    gap: "0.81rem",
    width: "100%",
    flexWrap: "wrap",
    marginBottom: "2.02rem",
  },
});

export default InterestDisScreen;
