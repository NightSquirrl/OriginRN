import * as React from "react";
import { View, Text, Button } from "react-native";
function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything you want here",
          });
        }}
      />
      <Text>--data from back :{route.params?.post}</Text>
    </View>
  );
}

function DetailsScreen({ navigation, route }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate("Details")}
        // onPress={() => navigation.push('Details')}
      />
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate({
            name: "Home",
            params: { post: "asdasdas" },
            merge: true,
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="change params itemId"
        onPress={() => navigation.setParams({ itemId: 100 })}
      />
    </View>
  );
}

export { HomeScreen, DetailsScreen };
