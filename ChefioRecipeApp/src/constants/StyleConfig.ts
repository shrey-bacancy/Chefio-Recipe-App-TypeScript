import { Dimensions } from "react-native";

const window = Dimensions.get("window");

const { width, height } = Dimensions.get("screen");

export default {
  width,
  height,

  colors: {
    primary: "#1FCC79",
    secondary: "#FF6464",
    mainText: "#2E3E5C",
    secondaryText: "#9FA5C0",
    outline: "#D0DBEA",
    form: "#F4F5F7",
    white: "#FFFFFF",
    background: "#E5E5E5",
    google: "#FF5842",
  },

  fontInter: "Inter-VariableFont_slnt,wght",

  images: {
    onboarding: require("../../assets/images/Onboarding_Resize.png"),
  },
};
