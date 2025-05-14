import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGSVGElement> {
  color?: string;
}

const PlayButtonIcon = (props: IconProps) => {
  const { color, ...rest } = props;

  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="white"
      />
      <path
        d="M42.2078 26.6677L20.173 13.9485C19.1462 13.3552 17.8672 14.0977 17.8672 15.2808V40.7228C17.8672 41.9059 19.1498 42.6448 20.173 42.0551L42.2078 29.3359C43.2345 28.7425 43.2345 27.2646 42.2078 26.6712V26.6677Z"
        fill={color || "#FF3467"}
      />
    </svg>
  );
};

export default PlayButtonIcon;
