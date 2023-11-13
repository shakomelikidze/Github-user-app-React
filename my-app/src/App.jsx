import { useState } from 'react'
import './App.css'

function App() {
  const [darkTheme, setDarkTheme] = useState();
  const darkToggle = () => {
    setDarkTheme(!darkTheme);
  }
  return (
    <>
      {/* <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aperiam dolor, laboriosam odit commodi obcaecati nulla doloremque maiores eligendi, iusto non dolorum nesciunt perferendis eius nisi neque exercitationem rerum fuga?</div> */}
      <button onClick={darkToggle}>Set dark</button>
    </>
  )
}

export default App;
