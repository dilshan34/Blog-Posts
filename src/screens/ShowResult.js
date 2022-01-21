import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Container, Icon, Right } from "native-base";

export default function ShowResult({ name, id,press }) {
  const show = () => console.log(id);
  return (
    <View style={style.main}>
      <Text style={style.text}>{name}</Text>
      <Right style={style.icon}>
        <TouchableOpacity>
          <Icon name="trash" onPress={()=>press(id)} />
        </TouchableOpacity>
      </Right>
    </View>
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
