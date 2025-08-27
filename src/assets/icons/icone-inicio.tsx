interface IconInicioProps {
  className: string;
}

export const IconInicio = ({ className }: IconInicioProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={39}
      height={40}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`text-[#4F4F4F] ${className ? className : ""} `}
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
};
