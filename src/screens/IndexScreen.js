import { Container } from "native-base";
import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

export default function IndexScreen() {
  const blogPosts = useContext(BlogContext);

  return (
    <Container>
      <View style={{ marginLeft: 20 }}>
        <Text>rgt</Text>
        <FlatList data={blogPosts} 
        keyExtractor={(blogPost)=>blogPost.title}
        renderItem={({item})=>{
            return <Text>{item.title}</Text>
        }}
        />
      </View>
    </Container>
  );
}
