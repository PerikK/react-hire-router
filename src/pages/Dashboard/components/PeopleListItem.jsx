import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person, editBtn } = props


  return (
    <li>
      <h3>
        <Link to={`/${person.email}`}>{person.name.first} {person.name.last}:</Link> 
      {person.wage ? ` -Offered wage:  £ ${person.wage}` :` -Offered wage: £ 0`}
      </h3> 
      {person.wage && editBtn && <p>Wage: £{person.wage}</p>}
      {editBtn && <Link to={`/${person.email}`}></Link>}
    </li>
  )
}

export default PeopleListItem