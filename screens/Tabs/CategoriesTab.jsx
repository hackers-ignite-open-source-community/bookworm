import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import InterestCard from "../../components/InterestCard";

function CategoriesTab({ navigation }) {
  const interests = [
    { name: "Thriller", img: "thrill.png", flex: "22.1875rem" },
    { name: "Romance", img: "romance.png", flex: "10.625rem" },
    { name: "Poetry", img: "poetry.png", flex: "10.625rem" },
    { name: "Non-Fiction", img: "nonFiction.png", flex: "22.1875rem" },
    { name: "Sci-fi", img: "sciFi.png", flex: "10.625rem" },
    { name: "Crime", img: "crime.png", flex: "10.625rem" },
    { name: "Self Help", img: "selfH.png", flex: "22.1875rem" },
  ];

  const handlePress = () => {
    navigation.navigate("CategoriesScreen");
  };

  return (
    <ScrollView style={styles}>
      <View style={styles.container}>
        {interests.map((item, index) => (
          <InterestCard interest={item} handlePress={handlePress} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "1.06rem",
    width: "25.0625rem",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    alignSelf: "flex-start",
    display: "inline-flex",
    flexDirection: "row",
    width: "100%",
  },
});

export default CategoriesTab;
