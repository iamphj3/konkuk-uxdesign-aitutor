import { css } from "styled-components";

const colors = {
  green: "#72C367",
  main_green: "#42C87F",
  sub_green: "#68D49A",
  gra_green: "#3BB774",
  white_1: "#FFFFFF",
  white_2: "#F8F8F8",
  white_3: "#F2F2F2",
  light_grey: "#E0E0E0",
  grey_1: "#BDBDBD",
  grey_2: "#828282",
  grey_3: "#555555",
  dark_grey_1: "#4F4F4F",
  dark_grey_2: "#333333",
  bg_green: "#F0F2EF",
  light_green: "#DEE3DB",
  dark_green: "#888C86",
};

const fonts = {
  Display1: css`
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.4rem; /* 141.667% */
    letter-spacing: -0.02rem;
  `,

  Display2: css`
    font-family: Pretendard;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 146%; /* 4.088rem */
  `,

  Headline: css`
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  Subhead1: css`
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem; /* 150% */
    letter-spacing: -0.02rem;
  `,
  Subhead2: css`
    font-family: Pretendard;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,

  Body1: css`
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.2rem; /* 157.143% */
    letter-spacing: -0.01rem;
  `,

  Body2: css`
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.3rem; /* 153.333% */
    letter-spacing: -0.02rem;
  `,

  Body3: css`
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.3rem; /* 143.75% */
    letter-spacing: -0.02rem;
  `,

  Caption: css`
    font-family: Pretendard;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  SmallCaption: css`
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.02rem;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
