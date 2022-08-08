import { useEffect, useState } from "react"

export const Message = () => {

  const [coords, setCoords] = useState({
      x: 0,
      y:0
  })

    const handleMouseMove = ({ x, y }: MouseEvent) => {
        setCoords({x, y})
    }

    useEffect(() => {
        
        window.addEventListener('mousemove', handleMouseMove);
      
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])
    

    return (
    
        <>
            <h4 className="mt-2">Usuario ya existe</h4>
            {JSON.stringify(coords)}
        </>

    )
}
