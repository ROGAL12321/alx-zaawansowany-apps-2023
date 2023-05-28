import WelcomeBox from "../../sections/WelcomeBox/WelcomeBox"
import WelcomeBoxWithChildren from '../../sections/WelcomeBoxWithChildren/WelcomeBoxWithChildren'

const Main = () => {
  return (
    <div>
      <h1>Hello from Main</h1>
      {/* Jesli chcemy uzyc komponentu wewnatrz innego komponentu, wywolowujemy go jako znacznik HTML */}

      <WelcomeBox name="Jungle" duration={5}/>
      <WelcomeBox name="My house" duration={10}/>
      <WelcomeBox />
      <hr/>

      <WelcomeBoxWithChildren>
        <p>Welcome to my world!</p>
      </WelcomeBoxWithChildren>

      <WelcomeBoxWithChildren>
        <h4>Welcome to my house!</h4>
      </WelcomeBoxWithChildren>
    </div>
  )
}

export default Main
