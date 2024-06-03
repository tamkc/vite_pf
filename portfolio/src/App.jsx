import { useState } from 'react'
import Sidenav from './components/Sidenav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Sidenav />
    </div>
  )
}

export default App
