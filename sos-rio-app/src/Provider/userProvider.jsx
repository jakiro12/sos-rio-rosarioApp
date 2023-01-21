import React,{ useState,useContext } from "react"

const userContext=React.createContext()
const userToggle=React.createContext()
const priceTicketContext=React.createContext()

export function ChangeUserContext(){
    return useContext(userContext)
}

export function ChangeToggleContext(){
    return useContext(userToggle)
}
export function SelectPriceTicket(){
    return useContext(priceTicketContext)
}
export function UserProvider({children}){
    const[ticketValue,setTicketValue]=useState(0)
    const [user,setUser]=useState(null)
    const changeLog=()=>{
        if(user){
            setUser(null)
        }else{
            setUser({
                name:'lautaro'
            })
        }
    }
    return(
       <userContext.Provider value={user}>
        <userToggle.Provider value={changeLog}>
            <priceTicketContext.Provider value={{ticketValue,setTicketValue}}>
            {children}
            </priceTicketContext.Provider>
        </userToggle.Provider>
       </userContext.Provider>
    )
}