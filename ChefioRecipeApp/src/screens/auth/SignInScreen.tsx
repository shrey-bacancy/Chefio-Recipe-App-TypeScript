import React, { FC, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import StyleConfig from "../../constants/StyleConfig";
import Headings from "../../components/TextStyles/Headings";
import BodyText from "../../components/TextStyles/BodyText";
import CustomInput from "../../components/Input/CustomInput";
import { StackNavProp } from "../../interfaces/NavigationInterface";
import Strings from "../../constants/Strings";

const SignInScreen: FC<StackNavProp> = (props) => {
  const [secure, setSecure] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [isPasswordIconVisible, setIsPasswordIconVisible] = useState(false);

  const passwordInput = useRef(null);
  const emailInput = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <Headings headingType="H1" addStyles={styles.mainText}>
            {Strings.Screens.SignIn.heading}
          </Headings>
          <View style={styles.secondaryTextContainer}>
            <BodyText bodyType="P2" addStyles={styles.secondaryText}>
              {Strings.Screens.SignIn.subHeading}
            </BodyText>
          </View>
          <View style={{ paddingVertical: StyleConfig.height / 100 }}>
            <CustomInput
              ref={emailInput}
              autoFocus
              keyboardType="email-address"
              placeholder={Strings.Screens.SignIn.emailPlaceholder}
              value={email}
              incorrectInput={wrongEmail}
              onChangeText={(value: string) => {
                setEmail(value);

                if (wrongEmail === true) {
                  setWrongEmail(false);
                }
              }}
              leftIcon={
                <Icon
                  name="md-mail-outline"
                  type="ionicon"
                  size={24}
                  color={StyleConfig.colors.mainText}
                />
              }
              onCrossPress={() => {
                setEmail("");

                if (wrongEmail === true) {
                  setWrongEmail(false);
                }
              }}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => passwordInput.current.focus()}
            />
          </View>
          <View style={{ paddingVertical: StyleConfig.height / 100 }}>
            <CustomInput
              ref={passwordInput}
              placeholder={Strings.Screens.SignIn.passwordPlaceholder}
              secureTextEntry={secure}
              value={password}
              incorrectInput={wrongPassword}
              onChangeText={(value: string) => {
                setPassword(value);
                if (value.length > 0) {
                  setIsPasswordIconVisible(true);
                } else {
                  setIsPasswordIconVisible(false);
                }

                if (wrongPassword === true) {
                  setWrongPassword(false);
                }
              }}
              leftIcon={
                <Icon
                  name="lock"
                  type="simple-line-icon"
                  size={24}
                  color={StyleConfig.colors.mainText}
                />
              }
              rightIcon={
                isPasswordIconVisible ? (
                  <Icon
                    name={secure ? "md-eye-off-outline" : "md-eye-outline"}
                    type="ionicon"
                    size={24}
                    color={StyleConfig.colors.secondaryText}
                    onPress={() => setSecure(!secure)}
                  />
                ) : undefined
              }
              onCrossPress={() => {
                setPassword("");

                if (wrongPassword === true) {
                  setWrongPassword(false);
                }
              }}
              returnKeyType="go"
              onSubmitEditing={() => props.navigation.navigate("SignUp")}
            />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <BodyText bodyType="P2" addStyles={styles.forgotPasswordText}>
              {Strings.Screens.SignIn.forgotPassword}
            </BodyText>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={{ paddingVertical: (StyleConfig.height * 1.6) / 100 }}>
            <PrimaryButton
              title={Strings.Screens.SignIn.loginButtonTitle}
              onPress={() => {
                if (email !== "12345" && password !== "123") {
                  console.log(password, "Wrong");
                  setWrongEmail(true);
                  setWrongPassword(true);
                } else if (password !== "123") {
                  console.log(password, "Wrong");
                  setWrongPassword(true);
                } else if (email !== "12345") {
                  console.log(password, "Wrong");
                  setWrongEmail(true);
                } else {
                  props.navigation.navigate("SignUp");
                }
              }}
            />
          </View>
          <BodyText bodyType="P2" addStyles={styles.secondaryText}>
            {Strings.Screens.SignIn.continueWithText}
          </BodyText>
          <View style={{ paddingVertical: (StyleConfig.height * 3) / 100 }}>
            <PrimaryButton
              title={Strings.Screens.SignIn.googleButtonTitle}
              addButtonStyles={{ backgroundColor: StyleConfig.colors.google }}
              icon={
                <Icon
                  name="md-logo-google"
                  type="ionicon"
                  size={24}
                  color={StyleConfig.colors.white}
                />
              }
            />
          </View>
          <BodyText bodyType="P2" addStyles={styles.mainText}>
            {Strings.Screens.SignIn.signUpCaption}{" "}
            <TouchableNativeFeedback
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Headings
                headingType="H3"
                addStyles={{ color: StyleConfig.colors.primary }}
              >
                {Strings.Screens.SignIn.signUp}
              </Headings>
            </TouchableNativeFeedback>
          </BodyText>
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

export default SignInScreen;
