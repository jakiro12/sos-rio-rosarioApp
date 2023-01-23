import React,{ useState,useContext } from "react"


const priceTicketContext=React.createContext()

export function SelectPriceTicket(){
    return useContext(priceTicketContext)
}
export function UserProvider({children}){
    const[ticketValue,setTicketValue]=useState(0)
    
    return(
      
            <priceTicketContext.Provider value={{ticketValue,setTicketValue}}>
            {children}
            </priceTicketContext.Provider>
      
    )
}