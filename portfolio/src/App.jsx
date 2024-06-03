import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
    </div>
  )
}

export default App
