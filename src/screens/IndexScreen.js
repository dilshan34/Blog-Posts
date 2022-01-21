import { Container, Button, Right, Icon } from "native-base";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import BlogContext from "../context/BlogContext";
import ShowResult from "./ShowResult";

export default function IndexScreen() {
  const { data, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  const deletePost = () => {
    //localStorage.setItem("id", JSON.stringify(item.id));
    console.log(item.id);
  };

  return (
    <Container>
      <View style={{ marginHorizontal: 20 }}>
        <Button full light onPress={addBlogPost}>
          <Text>Add</Text>
        </Button>
        <FlatList
          data={data}
          vertical={true}
          keyExtractor={(blogPost) => blogPost.title}
          renderItem={({ item }) => {
            return (
              <View style={style.main}>
                <Text style={style.text}>{item.title}</Text>
                <Text style={style.id}>{item.id}</Text>
                <Right style={style.icon}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log(item.id);
                      deleteBlogPost(item.id);
                    }}
                  >
                    <Icon name="trash" />
                  </TouchableOpacity>
                </Right>
              </View>
            );
          }}
        />
      </View>
    </Container>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    height: 25,
    width: 25,
    flex: 1,
    justifyContent: "flex-end",
    marginRight: 20,
  },
  main: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: "black",
    borderWidth: 1,
  },
});
