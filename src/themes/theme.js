import mobileLightBgImage from "../images/bg-mobile-light.jpg";
import mobileDarkBgImage from "../images/bg-mobile-dark.jpg";
import desktopLightBgImage from "../images/bg-desktop-light.jpg";
import desktopDarkBgImage from "../images/bg-desktop-dark.jpg";

//light theme
const lightTheme = {
  /* Colors */
  bgImageMobile: `url(${mobileLightBgImage})`,
  bgImageDesktop: `url(${desktopLightBgImage})`,
  background: "hsl(0, 0%, 98%)",
  elementsBackground: "#fff",
  inputTextColor: "hsl(235, 21%, 11%)",
  inputPlaceholderColor: "hsl(236, 9%, 61%)",
  todoTextColor: "hsl(235, 24%, 19%)",
  todoCompeletedColor: "hsl(233, 11%, 84%)",
  cardTextColor: "hsl(236, 9%, 61%)",
  activeCardTextColor: "hsl(220, 98%, 61%)",
  cardShadow: "hsl(236, 9%, 61%)",
  onHoverTextColor: "hsl(235, 21%, 11%)",
  titleColor: "#fff",
  /* Typography */
  fontSize: "18px",
  fontFamily: "'Josefin Sans', sans-serif;",
  checkBackgroundGradientFrom: "hsl(192, 100%, 67%)",
  checkBackgroundGradientTo: "hsl(280, 87%, 65%)",
};

//dark theme
const darkTheme = {
  /* Colors */
  bgImageMobile: `url(${mobileDarkBgImage})`,
  bgImageDesktop: `url(${desktopDarkBgImage})`,
  background: "hsl(235, 24%, 19%)",
  elementsBackground: "hsl(237, 14%, 26%)",
  inputTextColor: "hsl(0, 0%, 98%)",
  inputPlaceholderColor: "hsl(234, 11%, 52%)",
  todoTextColor: "hsl(0, 0%, 98%)",
  todoCompeletedColor: "hsl(234, 39%, 85%)",
  cardTextColor: "hsl(234, 11%, 52%)",
  activeCardTextColor: "hsl(220, 98%, 61%)",
  cardShadow: "hsl(237, 14%, 26%)",
  onHoverTextColor: "hsl(0, 0%, 98%)",
  titleColor: "#fff",
  /* Typography */
  fontSize: "18px",
  fontFamily: "'Josefin Sans', sans-serif;",
  checkBackgroundGradientFrom: "hsl(192, 100%, 67%)",
  checkBackgroundGradientTo: "hsl(280, 87%, 65%)",
};

export { darkTheme, lightTheme };
