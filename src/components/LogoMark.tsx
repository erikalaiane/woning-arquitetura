export default function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 52"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M1 0V52" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 1.5L38 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path d="M34 5.6L39 6V43.5L34 42Z" fill="currentColor" />
      <path d="M8 52H18L39 44.3L34 42.3Z" className="fill-terracota" />
    </svg>
  )
}