import { useState } from "react"
import { ArrayOrder } from "./ArrayOrder"



export const App = () => {

    
    const array = ['Daniel','Andrea','Juan', 'Pedro', 'Diego'  ]
    
    const [count, setcount] = useState(0)
    const [first, setfirst] = useState(['Daniel','Andrea','Juan', 'Pedro', 'Diego'  ])

    const setOrder = ( newOrder ) =>{


        console.log(count)
        
        setfirst( newOrder );
        setcount(c=> c+1);

        if(count===2){
            setcount(0);
        }

        
    }
    
  return (
    <>

        <ol>
            {first.map( element => (
                
                <li key={element}>{element}</li>
                                
            ))}

        </ol>

        <ArrayOrder 
        
            onNewOrder = {( value ) => setOrder( value )} 
            data = {first}
            orig = {array}
            id = {count}

        />


    </>
  )
}
