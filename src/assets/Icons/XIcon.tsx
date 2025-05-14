import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGSVGElement> {}

const XIcon = (props: IconProps) => {
  const { ...rest } = props;

  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M46.23 45.4786L31.8093 24.9186L46.6093 8H43.3772L30.3691 22.869L21.6622 10.4579L19.939 8H8L9.72599 10.4579L23.7455 30.4414L8.38752 48H11.6169L25.1829 32.4938L34.2938 45.4786L36.0638 48H48L46.23 45.4786ZM37.2648 45.4786L26.8319 30.6069L25.3945 28.5572L12.697 10.4579H18.694L28.7228 24.7531L30.1602 26.8028L43.259 45.4786H37.2648Z"
        fill="white"
      />
    </svg>
  );
};

export default XIcon;
