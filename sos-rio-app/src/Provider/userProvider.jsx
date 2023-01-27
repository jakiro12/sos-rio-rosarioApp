import React,{ useState,useContext } from "react"


const priceTicketContext=React.createContext()
const gomonStatusContext=React.createContext()
const trackerStatusContext=React.createContext()
const banquitoStatusContext=React.createContext()

export function SelectPriceTicket(){
    return useContext(priceTicketContext)
}
export function SelectStatusGomon(){
    return useContext(gomonStatusContext)
}
export function SelectStatusTracker(){
    return useContext(trackerStatusContext)
}
export function SelectStatusBanquito(){
    return useContext(banquitoStatusContext)
}
export function UserProvider({children}){
    const[ticketValue,setTicketValue]=useState(0)
    const[daySelectInGomon,setDaySelectInGomon]=useState('')
    const[hourSelectInGomon,setHourSelectInGomon]=useState('')
    const[daySelectInTracker,setDaySelectInTracker]=useState('')
    const[hourSelectInTracker,setHourSelectInTracker]=useState('')
    const[daySelectInBanquito,setDaySelectInBanquito]=useState('')
    const[hourSelectInBanquitoToGo,setHourSelectInBanquitoToGo]=useState('')
    const[hourSelectInBanquitoToBack,setHourSelectInBanquitoToBack]=useState('')

    
    return(
      
            <priceTicketContext.Provider value={{ticketValue,setTicketValue}}>
                <gomonStatusContext.Provider value={{daySelectInGomon,setDaySelectInGomon,setHourSelectInGomon,hourSelectInGomon}}>
                    <trackerStatusContext.Provider value={{daySelectInTracker,setDaySelectInTracker,hourSelectInTracker,setHourSelectInTracker}}>
                        <banquitoStatusContext.Provider value={{daySelectInBanquito,setDaySelectInBanquito,hourSelectInBanquitoToGo,setHourSelectInBanquitoToGo,hourSelectInBanquitoToBack,setHourSelectInBanquitoToBack}}>
            {children}
                        </banquitoStatusContext.Provider>
                     </trackerStatusContext.Provider>
                </gomonStatusContext.Provider>
            </priceTicketContext.Provider>
      
    )
}