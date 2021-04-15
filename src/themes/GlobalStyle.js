import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  /* Reset Style */
  *,
  *::before,
  *::after{
      box-sizing:border-box;
      padding:0;
      margin:0;
  }

  /* Global Variables */
  :root{
    /* Colors */
  --bg-image-mobile:  ${({ theme }) => theme.bgImageMobile}; 
  --bg-image-desktop:${({ theme }) => theme.bgImageDesktop};
  --background: ${({ theme }) => theme.background};
  --element-bg:${({ theme }) => theme.elementsBackground};
  --input-text-color:${({ theme }) => theme.inputTextColor};
  --input-placeholder:${({ theme }) => theme.inputPlaceholderColor}; 
  --todo-text-color:${({ theme }) => theme.todoTextColor} ;
  --todo-completed-color :${({ theme }) => theme.todoCompeletedColor};
  --card-text-color:${({ theme }) => theme.cardTextColor} ;
  --active-card-color:${({ theme }) => theme.activeCardTextColor} ;
  --card-shadow:${({ theme }) => theme.cardShadow} ;
  --on-hover-color: ${({ theme }) => theme.onHoverTextColor};
  --title-color:${({ theme }) => theme.titleColor};
 /* Typography */
 --main-font-size:${({ theme }) => theme.fontSize};
 --main-font-family:${({ theme }) => theme.fontFamily};
 --linear-gradient-form:${({ theme }) => theme.checkBackgroundGradientFrom}
 --linear-gradient-to:${({ theme }) => theme.checkBackgroundGradientTo}
  }


  html{
      font-size:var(--main-font-size);
      font-family:var(--main-font-family);
  }

  h1{
      color:var(--active-card-color);
  }

  
`;

export default GlobalStyle;
