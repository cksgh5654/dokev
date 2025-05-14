import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGSVGElement> {}

const ArrowIcon = (props: IconProps) => {
  const { stroke, strokeWidth, ...rest } = props;

  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      style={{ transformOrigin: "center" }}
    >
      <path
        d="M50 18L33.3883 36.3271C28.9498 41.2243 27.0501 41.2243 22.6116 36.3271L6 18"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
