import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Book from "../components/Book";

function CatePage() {
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
    {
      img: "Thtbm.png",
      title: "There has to be more",
      author: "Alexa Blye",
    },
    {
      img: "Thtbm.png",
      title: "There has to be more",
      author: "Alexa Blye",
    },
    {
      img: "Thtbm.png",
      title: "There has to be more",
      author: "Alexa Blye",
    },
    {
      img: "Thtbm.png",
      title: "There has to be more",
      author: "Alexa Blye",
    },
    {
      img: "Thtbm.png",
      title: "There has to be more",
      author: "Alexa Blye",
    },
    {
      img: "Thtbm.png",
      title: "There has to be more",
      author: "Alexa Blye",
    },
    {
      img: "Thtbm.png",
      title: "There has to be more",
      author: "Alexa Blye",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Newest</Text>
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <FlatList
          data={NextBooks}
          renderItem={({ item }) => <Book Newest={true} book={item} />}
          contentContainerStyle={styles.list}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: "1.06rem",
  },
  text: {
    fontSize: "1.5625rem",
    fontFamily: "Montserrat_600Semibold",
    marginBottom: "1.16rem",
  },
  container: {
    paddingHorizontal: "1.38rem",
    paddingVertical: "4rem",
  },
});

export default CatePage;
