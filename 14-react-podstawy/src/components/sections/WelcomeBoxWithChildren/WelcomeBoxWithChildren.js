const WelcomeBoxWithChildren = (props) => {
  // Jesli przekazujemy tresc pomiedzy otwarciem i zamknieciem znacznika komponentu, to mamy do niej dostep za pomoca props.children

  // Specjalny znacznik, tzw. React Fragment, ktory powoduje ze mozemy zaladowac jakas tresc bez znaczniks
  return (
    <>
      {props.children}
    </>
  )
}

export default WelcomeBoxWithChildren