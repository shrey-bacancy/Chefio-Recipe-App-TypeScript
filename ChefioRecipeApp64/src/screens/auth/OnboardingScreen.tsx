import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import BodyText from "../../components/TextStyles/BodyText";
import Headings from "../../components/TextStyles/Headings";
import Strings from "../../constants/Strings";
import StyleConfig from "../../constants/StyleConfig";
import { StackNavProp } from "../../interfaces/NavigationInterface";

let maxWidth: number = StyleConfig.width;

const OnboardingScreen: FC<StackNavProp> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={StyleConfig.images.onboarding}
        style={styles.image}
        resizeMethod="resize"
      />
      <>
        <Headings headingType="H1" addStyles={styles.heading}>
          {Strings.Onboarding.heading}
        </Headings>
        <View style={styles.secondaryTextContainer}>
          <BodyText bodyType="P1" addStyles={styles.secondaryText}>
            {Strings.Onboarding.subHeading}
          </BodyText>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={Strings.Onboarding.buttonTitle}
            onPress={() => {
              props.navigation.navigate("SignIn");
            }}
          />
        </View>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.form,
  },
  image: {
    flex: 1,
    width: StyleConfig.width,
    resizeMode: maxWidth < 411 ? "stretch" : "contain",
  },
  heading: {
    color: StyleConfig.colors.mainText,
    textAlign: "center",
  },
  secondaryTextContainer: {
    paddingHorizontal: (StyleConfig.width * 20) / 100,
    paddingTop: (StyleConfig.height * 2) / 100,
  },
  secondaryText: {
    color: StyleConfig.colors.secondaryText,
    textAlign: "center",
  },
  buttonContainer: {
    paddingHorizontal: (StyleConfig.width * 6.1) / 100,
    paddingVertical: (StyleConfig.height * 8.1) / 100,
  },
});

export default OnboardingScreen;
