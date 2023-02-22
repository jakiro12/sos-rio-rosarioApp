import React,{ useState,useContext } from "react"


const priceTicketContext=React.createContext()
const gomonStatusContext=React.createContext()
const trackerStatusContext=React.createContext()
const banquitoStatusContext=React.createContext()
const setDayForNextWeekend=React.createContext()

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
export function SelectDayOfToWeek(){
    return useContext(setDayForNextWeekend)
}
export function UserProvider({children}){
    const[ticketValue,setTicketValue]=useState(0)

    const[hourSelectInGomon,setHourSelectInGomon]=useState('')
    const[hourSelectInTracker,setHourSelectInTracker]=useState('')
    const[hourSelectInBanquitoToGo,setHourSelectInBanquitoToGo]=useState('')
    const[hourSelectInBanquitoToBack,setHourSelectInBanquitoToBack]=useState('')
    const[dateOfTheWeek,setDayOfTheWeek]=useState('')
        
   
    return(
      
            <priceTicketContext.Provider value={{ticketValue,setTicketValue}}>
                <gomonStatusContext.Provider value={{setHourSelectInGomon,hourSelectInGomon}}>
                    <trackerStatusContext.Provider value={{hourSelectInTracker,setHourSelectInTracker}}>
                        <banquitoStatusContext.Provider value={{hourSelectInBanquitoToGo,setHourSelectInBanquitoToGo,hourSelectInBanquitoToBack,setHourSelectInBanquitoToBack}}>
                            <setDayForNextWeekend.Provider value={{dateOfTheWeek,setDayOfTheWeek}}>
            {children}
                            </setDayForNextWeekend.Provider>
                        </banquitoStatusContext.Provider>
                     </trackerStatusContext.Provider>
                </gomonStatusContext.Provider>
            </priceTicketContext.Provider>
      
    )
}