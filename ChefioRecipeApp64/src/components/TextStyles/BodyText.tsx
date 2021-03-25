import React, { FC } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import StyleConfig from "../../constants/StyleConfig";

export interface Props {
  bodyType: string;
  addStyles?: object;
  children?: any;
}

const BodyText: FC<Props> = (props) => {
  //Variable for setting text style
  let textStyle: StyleProp<TextStyle>;

  /*
    bodyType prop will be used to set different styles for body text

    There are 3 types of body styles: 
    1. P1
    2. P2
    3. S
  */
  if (props.bodyType === "P1" || props.bodyType === "p1") {
    textStyle = { ...styles.body, ...styles.p1, ...props.addStyles };
  } else if (props.bodyType === "P2" || props.bodyType === "p2") {
    textStyle = { ...styles.body, ...styles.p2, ...props.addStyles };
  } else if (props.bodyType === "S" || props.bodyType === "s") {
    textStyle = { ...styles.body, ...styles.s, ...props.addStyles };
  }

  return <Text style={textStyle}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  //common style for body text
  body: {
    fontFamily: StyleConfig.fontInter,
    fontWeight: "500",
    letterSpacing: 0.5,
  },

  //style for "P1" body type
  p1: {
    fontSize: 17,
    lineHeight: (StyleConfig.height * 3.3) / 100,
  },

  //style for "P2" body type
  p2: {
    fontSize: 15,
    lineHeight: (StyleConfig.height * 3) / 100,
  },

  //style for "S" body type
  s: {
    fontSize: 12,
    lineHeight: (StyleConfig.height * 1.8) / 100,
  },
});

export default BodyText;
