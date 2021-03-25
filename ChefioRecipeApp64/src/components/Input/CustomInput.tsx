import React, { FC, forwardRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import StyleConfig from "../../constants/StyleConfig";
import Feather from "react-native-vector-icons/Feather";
import { CustomInputProps } from "../../interfaces/CustomInputInteface";

const CustomInput: FC<CustomInputProps> = forwardRef((props, ref) => {
  const [focused, setFocused] = useState(false);

  let borderColor: string, iconRight: any;

  if (props.incorrectInput) {
    borderColor = StyleConfig.colors.secondary;
    iconRight = (
      <Feather
        name="x-circle"
        size={24}
        color={StyleConfig.colors.secondary}
        onPress={props.onCrossPress}
      />
    );
  } else {
    borderColor = focused
      ? StyleConfig.colors.primary
      : StyleConfig.colors.outline;
    iconRight = props.rightIcon;
  }

  return (
    <Input
      autoFocus={props.autoFocus}
      containerStyle={{
        ...styles.containerStyle,
        ...{ borderColor: borderColor },
      }}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      leftIcon={props.leftIcon}
      placeholder={props.placeholder}
      placeholderTextColor={StyleConfig.colors.secondaryText}
      rightIcon={iconRight}
      renderErrorMessage={false}
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      onChangeText={props.onChangeText}
      onFocus={() => {
        setFocused(true);
      }}
      onBlur={() => {
        setFocused(false);
      }}
      returnKeyType={props.returnKeyType}
      onSubmitEditing={props.onSubmitEditing}
      keyboardType={props.keyboardType}
      blurOnSubmit={props.blurOnSubmit}
      ref={ref}
    />
  );
});

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 2,
    borderRadius: 32,
    height: 56,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    flex: 1,
  },
  inputStyle: {
    fontFamily: StyleConfig.fontInter,
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 18.15,
    textAlignVertical: "center",
  },
});

export default CustomInput;
