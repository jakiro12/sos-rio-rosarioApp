import React,{ useState,useContext } from "react"


const priceTicketContext=React.createContext()
const gomonStatusContext=React.createContext()
const trackerStatusContext=React.createContext()

export function SelectPriceTicket(){
    return useContext(priceTicketContext)
}
export function SelectStatusGomon(){
    return useContext(gomonStatusContext)
}
export function SelectStatusTracker(){
    return useContext(trackerStatusContext)
}
export function UserProvider({children}){
    const[ticketValue,setTicketValue]=useState(0)
    const[daySelectInGomon,setDaySelectInGomon]=useState('')
    const[hourSelectInGomon,setHourSelectInGomon]=useState('')
    const[daySelectInTracker,setDaySelectInTracker]=useState('')
    const[hourSelectInTracker,setHourSelectInTracker]=useState('')
    
    return(
      
            <priceTicketContext.Provider value={{ticketValue,setTicketValue}}>
                <gomonStatusContext.Provider value={{daySelectInGomon,setDaySelectInGomon,setHourSelectInGomon,hourSelectInGomon}}>
                    <trackerStatusContext.Provider value={{daySelectInTracker,setDaySelectInTracker,hourSelectInTracker,setHourSelectInTracker}}>
            {children}
                     </trackerStatusContext.Provider>
                </gomonStatusContext.Provider>
            </priceTicketContext.Provider>
      
    )
}