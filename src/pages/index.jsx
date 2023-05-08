import { useState } from 'react'
import '../App.css'
import { useSelector } from 'react-redux'

function Home() {
  const appState = useSelector((state) => state);

  return (
    <>
      <div>
       
      </div>
      <p className="read-the-docs">
        {JSON.stringify(appState,null,2)}
      </p>
    </>
  )
}

export default Home;