import  React , { createContext , useState, useEffect } from "react";
 
export const UserContext = createContext();

export function UserContextProvider(props){

    const [modalState,SetModalState] = useState({
        signUpModal: true,
        signInModal: false
    })
    const toggleModals = modal => {
        if(modal === "signIn"){
            SetModalState({
                signUpModal: false,
                signInModal:true
            })
        
        }
        if(modal === "signUp"){
            SetModalState({
                signUpModal: true,
                signInModal:false
            })
        
        }
        if(modal === "close"){
            SetModalState({
                signUpModal: false,
                signInModal:false
            })
        
        }
        if(modal === "open"){
            SetModalState({
                signUpModal: true,
                signInModal:true
            })
        
        }
    }

    return (
        <UserContext.Provider value={{modalState,toggleModals}}>
            {props.children}
        </UserContext.Provider>
    )
}