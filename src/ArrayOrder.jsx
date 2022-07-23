import { useState } from "react"

export const ArrayOrder = ({onNewOrder,data,orig,id}) => {


    // console.log(data)
    // console.log(onNewOrder)
    // console.log(orig)

    let orderZA = [...data].sort();
    let orderAZ = [...orderZA].reverse();

    

    const onOrder = ()=>{

        console.log(id)

        if(id === 0){
            
            onNewOrder(orderAZ);

        }else if (id === 1){

            onNewOrder(orderZA);

        }else{

            onNewOrder(orig)

        }

    }
  return (


    <>
        <button onClick={onOrder}> Ordenar </button>

    </>

  )
}
