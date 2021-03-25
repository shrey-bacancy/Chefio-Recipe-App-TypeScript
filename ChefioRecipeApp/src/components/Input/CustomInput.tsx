import React, { FC, forwardRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";
import Strings from "../../constants/Strings";
import StyleConfig from "../../constants/StyleConfig";
import { CustomInputProps } from "../../interfaces/CustomInputInteface";

const CustomInput: FC<CustomInputProps> = forwardRef((props, ref) => {
  const {
    autoFocus,
    incorrectInput,
    rightIcon,
    leftIcon,
    placeholder,
    secureTextEntry,
    keyboardType,
    value,
    onChangeText,
    onCrossPress,
    returnKeyType,
    blurOnSubmit,
    onSubmitEditing,
  } = props;

  const [focused, setFocused] = useState(false);

  let borderColor: string, iconRight: any;

  if (incorrectInput) {
    borderColor = StyleConfig.colors.secondary;
    iconRight = (
      <Icon
        name={Strings.Components.CustomInput.iconName}
        type={Strings.Components.CustomInput.iconType}
        size={24}
        color={StyleConfig.colors.secondary}
        onPress={onCrossPress}
      />
    );
  } else {
    borderColor = focused
      ? StyleConfig.colors.primary
      : StyleConfig.colors.outline;
    iconRight = rightIcon;
  }

  return (
    <Input
      autoFocus={autoFocus}
      containerStyle={{
        ...styles.containerStyle,
        ...{ borderColor: borderColor },
      }}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      leftIcon={leftIcon}
      placeholder={placeholder}
      placeholderTextColor={StyleConfig.colors.secondaryText}
      rightIcon={iconRight}
      renderErrorMessage={false}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      onFocus={() => {
        setFocused(true);
      }}
      onBlur={() => {
        setFocused(false);
      }}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      keyboardType={keyboardType}
      blurOnSubmit={blurOnSubmit}
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
