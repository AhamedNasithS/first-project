import React from 'react'
import Desktop from './desktop';
import Mobile from './mobile';

export default function Header() {
  const [position, setPosition] = React.useState(window.innerWidth <= 640);
    
    React.useEffect(() => {
        window.onresize = function () {
            setPosition(window.innerWidth <= 640);
        };
    }, []);
  return (
    position ? (<Mobile/>) : (<Desktop/>)
  )
}
