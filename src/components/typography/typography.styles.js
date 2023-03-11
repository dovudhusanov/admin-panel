import styled,{css} from "styled-components";
import {colors} from "../config/theme";

const size = {
    h1: css`
    font-size: 36px;
    line-height: 54px;
    letter-spacing: 0.5px;
    font-weight: 700;
  `,
    h2: css` 
    font-size: 32px;
    line-height: 38.4px;
    letter-spacing: 0.5px;
    font-weight: 700;
  `,
    h3: css`
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0.5px;
    font-weight: 700;
  `,
    h4: css`
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.5px;
    font-weight: 700;
  `,
    h5: css`
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.5px;
    font-weight: 700;
  `,
    h6: css`
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.5px;
    font-weight: 700;
  `,
    h4_medium:css`
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.5px;
    font-weight: 500;
  `,
    typography: css`
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 0.5px;
    font-style: normal;
    font-weight: 500;
  `,
    body_text: css`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    font-weight: 700;
  `,
    body_text_medium:css`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    font-weight: 500;
  `,
    menu: css`
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.5px;
    font-weight: 700;
  `,
    menu_medium:css`
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.5px;
    font-weight: 500;
  `,
    menu_regular:css`
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.5px;
    font-weight: 400;
  `,
    footer_text: css`
    font-size: 12px;
    line-height: 16.8px;
    letter-spacing: 0.5px;
    font-weight: 500;
  `,
    seoText: css`
    font-size: 12px;
    line-height: 15.6px;
    letter-spacing: 0.5px;
    font-weight: 400;
  `,
};

export const TextTypography = styled.p`
  color: ${(props) => colors[props?.color]};
  ${(props) => size[props?.size]};
`;
