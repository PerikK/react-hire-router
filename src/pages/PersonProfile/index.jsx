import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile( {people, hiredPeople, setHiredPeople} ) {
  const [person, setPerson] = useState('')
  const id = useParams().id

  useEffect(() => {
    setPerson(people.find(p => p.email === id))
    console.log('in-use', person);
  }, [people, id])
  
  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
       {person.name.first} {person.name.last} 
      </h2>
      <img src={person.picture.medium} alt="" />
      <p>{person.email}</p>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
    </article>
  )
}

export default PersonProfile
 