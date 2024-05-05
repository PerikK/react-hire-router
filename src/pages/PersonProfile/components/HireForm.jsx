import { useState } from "react"
import { useNavigate } from "react-router-dom"

function HireForm(props) {
	const { person, hiredPeople, setHiredPeople } = props
	const [wage, setWage] = useState(0)
	const navigate = useNavigate()



	function handleSubmit(event) {
    event.preventDefault()
    
    const formattedWage = Number(wage).toLocaleString();

		if (wage > 0) {
			person.wage = formattedWage
		}

		if (!hiredPeople.map((p) => p.id).includes(person.id)) {
			setHiredPeople((prevHiredPeople) => [...prevHiredPeople, person])
		}

		navigate("/dashboard")
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='wage'>Wage Offer</label>
			<input
				type='text'
				id='wage'
				name='wage'
				onChange={(e) => setWage(e.target.value)}
				value={wage}
			/>
			<button type='submit'>
				{hiredPeople.includes(person) ? "Edit" : "Hire"}
			</button>
		</form>
	)
}

export default HireForm
