import { useEffect } from 'react'

const nomeSite = 'Woning Arquitetura'

export default function usePageTitle(descricao: string, titulo?: string) {
  useEffect(() => {
    document.title = titulo
      ? `${titulo} | ${nomeSite}`
      : `${nomeSite} | Escritório de arquitetura`

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', descricao)
  }, [descricao, titulo])
}