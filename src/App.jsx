import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => setPeople(data.results))
},[])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to='/'>Dashboard</Link>Dashboard</li>
          </ul>
        </nav>
      </header>

      <Routes>
         <Route path='/' element={<Dashboard hiredPeople={hiredPeople} people={people} />}/>
      </Routes>

    </>
  )
}
