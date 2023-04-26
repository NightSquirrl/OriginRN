import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        style={{
          marginBottom: 5,
        }}
        mode="contained"
        onPress={() => {
          navigation.navigate("NavigationHome");
        }}
      >
        <Text variant="titleLarge">React native navigation</Text>
      </Button>
      <Button
        style={{
          marginBottom: 5,
        }}
        mode="contained"
        onPress={() => {
          navigation.navigate("animation-lottie");
        }}
      >
        <Text variant="titleLarge">animation lottie</Text>
      </Button>
      <Button
        style={{
          marginBottom: 5,
        }}
        mode="contained"
        onPress={() => {
          navigation.navigate("animation-animatable");
        }}
      >
        <Text variant="titleLarge">animation animatable</Text>
      </Button>
      <Button
        style={{
          marginBottom: 5,
        }}
        mode="contained"
        onPress={() => {
          navigation.navigate("image blue and storage");
        }}
      >
        <Text variant="titleLarge">image blue and storage</Text>
      </Button>
    </View>
  );
}

export default Home;
