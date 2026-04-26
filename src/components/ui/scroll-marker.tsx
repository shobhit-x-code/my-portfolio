export function ScrollMarker() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 112 368"
      className="h-32 w-10 sm:h-40 sm:w-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="104" height="172" rx="52" stroke="#12F7D6" strokeWidth="8" />
      <rect x="48" y="36" width="16" height="44" rx="3" fill="#12F7D6" />
      <line x1="56" y1="196" x2="56" y2="306" stroke="#FFFFFF" strokeWidth="8" strokeDasharray="26 18" />
      <rect
        x="56"
        y="320"
        width="38"
        height="38"
        transform="rotate(45 56 320)"
        fill="#FFFFFF"
      />
    </svg>
  );
}
