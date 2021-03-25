import React, { FC, ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import StyleConfig from "../../constants/StyleConfig";

export interface Props {
  headingType: string;
  addStyles?: object;
  children?: ReactNode;
}

const Headings: FC<Props> = (props) => {
  const { headingType, children, addStyles } = props;

  let textStyle: StyleProp<TextStyle>;

  if (headingType === "H1" || headingType === "h1") {
    textStyle = { ...styles.heading, ...styles.h1, ...addStyles };
  } else if (headingType === "H2" || headingType === "h2") {
    textStyle = { ...styles.heading, ...styles.h2, ...addStyles };
  } else if (headingType === "H3" || headingType === "h3") {
    textStyle = { ...styles.heading, ...styles.h3, ...addStyles };
  }

  return <Text style={textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  //common style for heading text
  heading: {
    fontFamily: StyleConfig.fontInter,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  //style for "H1" heading type
  h1: {
    fontSize: 22,
    lineHeight: (StyleConfig.height * 4) / 100,
  },

  //style for "H2" heading type
  h2: {
    fontSize: 17,
    lineHeight: (StyleConfig.height * 3.3) / 100,
  },

  //style for "H3" heading type
  h3: {
    fontSize: 15,
    lineHeight: (StyleConfig.height * 3) / 100,
  },
});

export default Headings;
