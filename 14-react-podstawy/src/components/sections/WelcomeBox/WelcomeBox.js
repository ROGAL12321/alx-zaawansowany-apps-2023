import { useState, useEffect } from "react"
// Props jest to pojemnik (obiekt), ktory trzyma wszystkie dane, ktore do niego przychodza z komponentu nadrzednego

const WelcomeBox = (props) => {
  const [hidden, setIsHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(true);
    }, props.duration * 1000)
  }, [])

  if(!props.name) return null

  if(hidden) return null

  return (
    <h1>Welcome to {props.name}</h1>
  )
}

export default WelcomeBox