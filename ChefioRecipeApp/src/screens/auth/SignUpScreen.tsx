import React, { FC, useRef, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import StyleConfig from "../../constants/StyleConfig";
import Headings from "../../components/TextStyles/Headings";
import BodyText from "../../components/TextStyles/BodyText";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import CustomInput from "../../components/Input/CustomInput";
import { StackNavProp } from "../../interfaces/NavigationInterface";
import Strings from "../../constants/Strings";

const SignUpScreen: FC<StackNavProp> = (props) => {
  const [secure, setSecure] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordIconVisible, setIsPasswordIconVisible] = useState(false);

  const passwordInput = useRef(null);
  const emailInput = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <Headings headingType="H1" addStyles={styles.mainText}>
            {Strings.Screens.SignUp.heading}
          </Headings>
          <View style={styles.secondaryTextContainer}>
            <BodyText bodyType="P2" addStyles={styles.secondaryText}>
              {Strings.Screens.SignUp.subHeading}
            </BodyText>
          </View>
          <View style={{ paddingVertical: StyleConfig.height / 100 }}>
            <CustomInput
              ref={emailInput}
              autoFocus
              keyboardType="email-address"
              placeholder={Strings.Screens.SignUp.emailPlaceholder}
              value={email}
              onChangeText={(value: string) => setEmail(value)}
              leftIcon={
                <Ionicons
                  name="md-mail-outline"
                  size={24}
                  color={StyleConfig.colors.mainText}
                />
              }
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => passwordInput.current.focus()}
            />
          </View>
          <View style={{ paddingVertical: StyleConfig.height / 100 }}>
            <CustomInput
              ref={passwordInput}
              placeholder={Strings.Screens.SignUp.passwordPlaceholder}
              secureTextEntry={secure}
              value={password}
              onChangeText={(value: string) => {
                setPassword(value);

                if (value.length > 0) {
                  setIsPasswordIconVisible(true);
                } else {
                  setIsPasswordIconVisible(false);
                }
              }}
              leftIcon={
                <SimpleLineIcons
                  name="lock"
                  size={24}
                  color={StyleConfig.colors.mainText}
                />
              }
              rightIcon={
                isPasswordIconVisible ? (
                  <Ionicons
                    name={secure ? "md-eye-off-outline" : "md-eye-outline"}
                    size={24}
                    color={StyleConfig.colors.secondaryText}
                    onPress={() => setSecure(!secure)}
                  />
                ) : undefined
              }
              returnKeyType="go"
              onSubmitEditing={() => props.navigation.goBack()}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={{ paddingVertical: (StyleConfig.height * 1.6) / 100 }}>
            <PrimaryButton
              title={Strings.Screens.SignUp.signUpButtonTitle}
              onPress={() => props.navigation.goBack()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.form,
  },
  inputContainer: {
    paddingHorizontal: (StyleConfig.width * 6.1) / 100,
    paddingTop: (StyleConfig.height * 14.7) / 100,
  },
  mainText: {
    color: StyleConfig.colors.mainText,
    textAlign: "center",
  },
  secondaryTextContainer: {
    paddingTop: StyleConfig.height / 100,
    paddingBottom: (StyleConfig.height * 3) / 100,
  },
  secondaryText: {
    color: StyleConfig.colors.secondaryText,
    textAlign: "center",
  },
  forgotPasswordContainer: {
    paddingTop: (StyleConfig.height * 2) / 100,
    paddingBottom: (StyleConfig.height * 8.6) / 100,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: StyleConfig.colors.mainText,
  },
  buttonsContainer: {
    flex: 1,
    paddingHorizontal: (StyleConfig.width * 6.1) / 100,
  },
});

export default SignUpScreen;
