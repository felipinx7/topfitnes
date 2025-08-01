interface IconeFecharProps {
  className?: string;
}

export const IconeFechar = ({ className }: IconeFecharProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      stroke="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#4F4F4F] ${className || ""}`}
    >
      <mask
        id="mask0_188_2113"
        fontStyle="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_188_2113)">
        <path
          d="M12.8 38L10 35.2L21.2 24L10 12.8L12.8 10L24 21.2L35.2 10L38 12.8L26.8 24L38 35.2L35.2 38L24 26.8L12.8 38Z"
          fill="CurrentColor"
        />
      </g>
    </svg>
  );
};
