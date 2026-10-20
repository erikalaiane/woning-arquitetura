import { useState } from 'react'
import LogoMark from './LogoMark'

type Props = {
  src: string
  alt: string
  className?: string
  prioridade?: boolean
}

// Mostra a foto se ela existir; senão, o símbolo do Woning.
export default function FotoOuLogo({
  src,
  alt,
  className = '',
  prioridade = false,
}: Props) {
  const [semFoto, setSemFoto] = useState(false)

  return (
    <div className={`overflow-hidden rounded-2xl bg-grafite/10 ${className}`}>
      {semFoto ? (
        <div aria-hidden="true" className="grid h-full w-full place-items-center">
          <LogoMark className="h-12 w-auto text-grafite/25" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={prioridade ? 'eager' : 'lazy'}
          onError={() => setSemFoto(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  )
}