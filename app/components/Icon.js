import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableHighlight } from "react-native";
const Icon = (props) => {
  return (
    <TouchableHighlight onPress={props.action} style={{ ...props.iconStyle }}>
      <Ionicons name={props.name} size={props.size} color={props.color} />
    </TouchableHighlight>
  );
};

export default Icon;
