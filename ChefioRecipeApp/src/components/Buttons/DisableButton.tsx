import React, { FC } from "react";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Button } from "react-native-elements";
import Strings from "../../constants/Strings";
import StyleConfig from "../../constants/StyleConfig";
import { CustomButtonProps } from "../../interfaces/ButtonInterface";

const DisableButton: FC<CustomButtonProps> = (props) => {
  const { addButtonStyles, size, type, title, icon, onPress } = props;

  //Variables for setting styles for button
  let buttonSizeStyle: StyleProp<ViewStyle> = styles.buttonDefault;
  let titleStyle: StyleProp<TextStyle> = styles.title;
  let buttonStyle: StyleProp<ViewStyle> = {
    ...buttonSizeStyle,
    ...styles.buttonSolid,
    ...addButtonStyles,
  };

  if (size === "medium") {
    buttonSizeStyle = styles.buttonMedium;
  } else if (size === "small") {
    buttonSizeStyle = styles.buttonSmall;
    titleStyle = { ...styles.title, ...styles.titleSmall };
  }

  /*
    type prop will be used to set different styles for button

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
  } else if (type === Strings.Components.AllButtons.typeClear) {
    buttonStyle = { ...buttonSizeStyle, ...addButtonStyles };
  }

  return (
    <Button
      title={title}
      type={type}
      icon={icon}
      containerStyle={styles.container}
      disabledStyle={buttonStyle}
      disabledTitleStyle={titleStyle}
      onPress={onPress}
      disabled
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
    backgroundColor: StyleConfig.colors.form,
  },

  //style for "outline" button type
  buttonOutline: {
    borderWidth: 2,
    borderColor: StyleConfig.colors.outline,
  },

  //style for button title
  title: {
    fontFamily: StyleConfig.fontInter,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 18.15,
    color: StyleConfig.colors.secondaryText,
    textAlign: "center",
    // paddingHorizontal: (StyleConfig.width * 2) / 100,
  },
  titleSmall: {
    fontSize: 12,
    lineHeight: 14.52,
  },
});

export default DisableButton;
