
import { useEffect, useState } from 'react'

const CountUp = ( { begin, end, duration } ) => {

  let startCount = begin

  const [countUp, setCountUp] = useState(begin)

  useEffect(() => {
    const countNo = setInterval(() => {
      startCount = countUp + 1
      if( startCount <= end) setCountUp( startCount )
    }, duration ) 

    return () => clearInterval(countNo)

  }, [countUp])

  return countUp
}

export default CountUp