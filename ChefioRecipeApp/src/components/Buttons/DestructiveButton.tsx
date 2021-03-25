import React, { FC } from "react";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Button } from "react-native-elements";
import Strings from "../../constants/Strings";
import StyleConfig from "../../constants/StyleConfig";
import { CustomButtonProps } from "../../interfaces/ButtonInterface";

interface DestructiveButtonProp extends CustomButtonProps {
  addTitleStyles?: object;
}

const DestructiveButton: FC<DestructiveButtonProp> = (props) => {
  const {
    addButtonStyles,
    addTitleStyles,
    size,
    type,
    title,
    icon,
    onPress,
  } = props;

  //Variables for setting styles for button and its title
  let buttonSizeStyle: StyleProp<ViewStyle> = styles.buttonDefault;
  let titleSizeStyle: StyleProp<TextStyle> = styles.title;
  let buttonStyle: StyleProp<ViewStyle> = {
    ...buttonSizeStyle,
    ...styles.buttonSolid,
    ...addButtonStyles,
  };
  let titleStyle: StyleProp<TextStyle> = {
    ...titleSizeStyle,
    ...styles.titleSolid,
    ...addTitleStyles,
  };

  if (size === "medium") {
    buttonSizeStyle = styles.buttonMedium;
  } else if (size === "small") {
    buttonSizeStyle = styles.buttonSmall;
    titleSizeStyle = { ...styles.title, ...styles.titleSmall };
  }

  /*
    type prop will be used to set different styles for button and its title

    There are 3 types of buttons: 
    1. solid (default)
    2. outline
    3. clear (for iOS devices)
  */
  if (type === Strings.Components.AllButtons.typeOutline) {
    buttonStyle = {
      ...buttonSizeStyle,
      ...styles.buttonOutline,
      ...addButtonStyles,
    };
    titleStyle = {
      ...titleSizeStyle,
      ...styles.titleOutlineClear,
      ...addTitleStyles,
    };
  } else if (type === Strings.Components.AllButtons.typeClear) {
    buttonStyle = { ...buttonSizeStyle, ...addButtonStyles };
    titleStyle = {
      ...titleSizeStyle,
      ...styles.titleOutlineClear,
      ...addTitleStyles,
    };
  }

  return (
    <Button
      title={title}
      type={type}
      icon={icon}
      containerStyle={styles.container}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  //style for button container
  container: {
    borderRadius: 32,
    overflow: "hidden",
  },

  //common style for the button
  buttonDefault: {
    borderRadius: 32,
    height: 56,
  },

  buttonMedium: {
    borderRadius: 32,
    height: 48,
  },

  buttonSmall: {
    borderRadius: 32,
    height: 39,
  },

  //style for "solid" button type
  buttonSolid: {
    backgroundColor: StyleConfig.colors.secondary,
  },

  //style for "outline" button type
  buttonOutline: {
    borderWidth: 2,
    borderColor: StyleConfig.colors.secondary,
  },

  //common style for button title
  title: {
    fontFamily: StyleConfig.fontInter,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 18.15,
    textAlign: "center",
    // paddingHorizontal: (StyleConfig.width * 2) / 100,
  },

  titleSmall: {
    fontSize: 12,
    lineHeight: 14.52,
  },

  //style for "solid" button type title
  titleSolid: {
    color: StyleConfig.colors.white,
  },

  //style for "outline" and "clear" button type title
  titleOutlineClear: {
    color: StyleConfig.colors.secondary,
  },
});

export default DestructiveButton;
