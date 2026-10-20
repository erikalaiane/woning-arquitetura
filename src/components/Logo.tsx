import LogoMark from './LogoMark'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-auto" />
      <span className="flex flex-col leading-none">
        <span className="mr-[-0.3em] font-display text-lg font-normal uppercase tracking-[0.3em] md:text-xl">
          Woning
        </span>
        <span
          aria-hidden="true"
          className="mt-1 flex justify-between font-display text-[0.65rem] font-medium"
        >
          {'arquitetura'.split('').map((letra, i) => (
            <span key={i}>{letra}</span>
          ))}
        </span>
      </span>
    </span>
  )
}