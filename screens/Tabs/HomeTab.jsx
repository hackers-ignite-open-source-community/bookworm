import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Book from "../../components/Book";

function HomeTab() {
  const PopularBooks = [
    {
      img: "gs.png",
      title: "The Good Sister",
      author: "Alexa Blye",
    },
    {
      img: "AP.png",
      title: "American Predator",
      author: "Maureen Callahan",
    },
    {
      img: "three.png",
      title: "American Predator",
      author: "Maureen Callahan",
    },
  ];

  const NextBooks = [
    {
      img: "AH.png",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "Thtbm.png",
      title: "There has to be more",
      author: "Alexa Blye",
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Popular Books</Text>
      <ScrollView horizontal={true} scrollEnabled={true}>
        <FlatList
          data={PopularBooks}
          renderItem={({ item }) => <Book book={item} />}
          horizontal={true}
          contentContainerStyle={styles.list}
        />
      </ScrollView>
      <Text style={styles.heading}>Newest</Text>
      <FlatList
        data={NextBooks}
        renderItem={({ item }) => <Book Newest={true} book={item} />}
        contentContainerStyle={styles.list}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "1.44rem",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F0F0F0",
  },
  heading: {
    fontSize: "1.5625rem",
    fontFamily: "Montserrat_600Semibold",
    marginTop: "1.59rem",
    marginBottom: "1.84rem",
  },
  list: {
    gap: "1.06rem",
  },
});
export default HomeTab;
