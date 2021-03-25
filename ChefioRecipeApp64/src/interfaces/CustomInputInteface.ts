import {
  GestureResponderEvent,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  TextInputSubmitEditingEventData,
} from "react-native";

export interface CustomInputProps {
  autoFocus?: boolean | undefined;
  incorrectInput?: boolean;
  rightIcon?: any;
  leftIcon?: any;
  placeholder?: string;
  secureTextEntry?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  onChangeText?: (text: string) => void;
  onCrossPress?: (event: GestureResponderEvent) => void;
  returnKeyType?: ReturnKeyTypeOptions;
  blurOnSubmit?: boolean | undefined;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
}
