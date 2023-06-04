import Header from "../../sections/Header/Header";

const Main = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <footer>
        Hello from footer
      </footer>
    </div>
  )
}

export default Main;