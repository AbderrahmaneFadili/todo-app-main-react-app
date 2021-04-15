import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/actions/themeActions";
import { Container } from "../../../themes/GlobalStyle";
import {
  HeaderWrapper,
  HedaerContainer,
  HeaderTitle,
  ToggleContainer,
  ToggleIcon,
} from "./Header.styles";
const Header = () => {
  //get the theme from redux store using useSelector Hook
  const theme = useSelector(({ themeReducer }) => {
    return themeReducer.theme;
  });

  const dispatch = useDispatch();

  //handle toggle theme Light/Dark
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <HeaderWrapper>
      <Container>
        <HedaerContainer>
          <HeaderTitle>Todo</HeaderTitle>
          <ToggleContainer onClick={handleToggleTheme}>
            {theme === "light" ? (
              <ToggleIcon
                src={require("../../../images/icon-moon.svg").default}
              />
            ) : (
              <ToggleIcon
                src={require("../../../images/icon-sun.svg").default}
              />
            )}
          </ToggleContainer>
        </HedaerContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
