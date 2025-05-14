import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGSVGElement> {
  fill?: string;
}

const CloseIcon = (props: IconProps) => {
  const { fill, ...rest } = props;

  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M42.9999 15.1864L41.0332 13.2198L28.1098 26.1431L15.1865 13.2198L13.2197 15.1864L26.1432 28.1098L13.2197 41.0332L15.1865 42.9998L28.1098 30.0765L41.0332 42.9998L42.9999 41.0332L30.0765 28.1098L42.9999 15.1864Z"
        fill={fill || "black"}
      />
    </svg>
  );
};

export default CloseIcon;
