import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGSVGElement> {}

const ArrowIcon2 = (props: IconProps) => {
  const { stroke, strokeWidth, ...rest } = props;

  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M34.9982 43L20 28.0018L34.9982 13"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default ArrowIcon2;
