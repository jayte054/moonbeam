import React, { createContext, useState, ReactNode } from "react";

interface UserContextType  {
    currentUser: string | null,
    setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>
}

export const UserContext = createContext<UserContextType>({
    currentUser : null,
    setCurrentUser : () => null
})

export const UserProvider = ({children}: any) => {
    const [currentUser, setCurrentUser] = useState<string | null>(null)
    const value = {currentUser, setCurrentUser}
    return <UserContext.Provider value ={value}>{children}</UserContext.Provider>
}

// import { createContext, useState, ReactNode } from 'react';

// interface UserContextType {
//   currentUser: string | null;
//   setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>;
// }

// export const UserContext = createContext<UserContextType>({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// interface UserProviderProps {
//   children: ReactNode;
// }

// export const UserProvider = ({ children }: UserProviderProps) => {
//   const [currentUser, setCurrentUser] = useState<string | null>(null);
//   const value = { currentUser, setCurrentUser };

//   return (
//     <UserContext.Provider value={value}>{children}</UserContext.Provider>
//   );
// };