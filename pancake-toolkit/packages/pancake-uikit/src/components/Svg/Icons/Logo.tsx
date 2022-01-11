import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image width="160" height="56" href='/images/sofiane.png' />
    </Svg>
  );
};

export default Icon;
