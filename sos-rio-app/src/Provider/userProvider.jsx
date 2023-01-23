import React,{ useState,useContext } from "react"


const priceTicketContext=React.createContext()
const gomonStatusContext=React.createContext()

export function SelectPriceTicket(){
    return useContext(priceTicketContext)
}
export function SelectStatusGomon(){
    return useContext(gomonStatusContext)
}
export function UserProvider({children}){
    const[ticketValue,setTicketValue]=useState(0)
    const[daySelectInGomon,setDaySelectInGomon]=useState('')
    return(
      
            <priceTicketContext.Provider value={{ticketValue,setTicketValue}}>
                <gomonStatusContext.Provider value={{daySelectInGomon,setDaySelectInGomon}}>
            {children}
                </gomonStatusContext.Provider>
            </priceTicketContext.Provider>
      
    )
}