import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      console.log('Message mounted');
    
      return () => {
        console.log('Message unmounted');
      }
    }, [])
    

    return (
    
        <>
            <h4 className="mt-2">Usuario ya existe</h4>
        </>

    )
}
