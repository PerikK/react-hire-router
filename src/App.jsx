import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile"
import "./App.css";

export default function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([]);
  

  // useEffect(() => {
  //   const getPeople = async () => {
  //     const data = await fetch ('https://randomuser.me/api/?results=50')
  //     const json = await data.json()
  //     setPeople(json.results)
  //   }
  //  getPeople()
  // }, [])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => {
        setPeople(data.results)
      })
  },[])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
          <li><Link to="/dashboard">
              Dashboard
            </Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/dashboard" element={<Dashboard people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
        <Route path="/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}/>
      </Routes>
    </>
  );
}