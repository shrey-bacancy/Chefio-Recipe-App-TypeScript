import React from "react";
import { GestureResponderEvent } from "react-native";
import { IconNode } from "react-native-elements/dist/icons/Icon";

export interface CustomButtonProps {
  size?: "default" | "medium" | "small";
  type?: "solid" | "clear" | "outline";
  addButtonStyles?: object;
  children?: any;
  title?:
    | string
    | React.ReactElement<{}, string | React.JSXElementConstructor<any>>;
  icon?: IconNode;
  onPress?: (event: GestureResponderEvent) => void;
}
