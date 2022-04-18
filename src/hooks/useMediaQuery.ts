
import { useEffect, useState } from 'react';

export enum EMediaBreakpoints  {
  xsDown = '(max-width: 575px)',
  smUp = '(min-width: 576px)',
  mdUp = '(min-width: 768px)',
  lgUp = '(min-width: 992px)',
  xlUp = '(min-width: 1200px)'
}

export const useMediaQuery = (query: EMediaBreakpoints): boolean => {

  const getMatches = (query: string): boolean => window.matchMedia(query).matches


  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    handleChange()

    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}
