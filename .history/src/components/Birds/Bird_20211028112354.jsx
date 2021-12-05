import React from "react";
import { View, Text } from "react-native";

const id = useParams().id;

export default function Bird() {
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
}
