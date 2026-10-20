import LogoMark from './LogoMark'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3.5 ${className}`}>
      <LogoMark className="h-10 w-auto" />
      <span className="flex flex-col leading-none">
        <span className="-mr-[0.3em] font-display text-xl font-normal uppercase tracking-[0.3em] md:text-2xl">
          Woning
        </span>
        <span
          aria-hidden="true"
          className="mt-1 flex justify-between font-display text-xs font-medium"
        >
          {'arquitetura'.split('').map((letra, i) => (
            <span key={i}>{letra}</span>
          ))}
        </span>
      </span>
    </span>
  )
}