import { createContext, useState, useEffect } from "react";
import { getUser } from "../services/firebase";

export const GlobalContext = createContext()

const GlobalProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser(handleUserChange)
  }, [])

  const handleUserChange = (user) => {
    setIsLoading(false);
    setCurrentUser(user);
  }

  if(isLoading) return null;

  return (
    <GlobalContext.Provider value={{ user: currentUser }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider