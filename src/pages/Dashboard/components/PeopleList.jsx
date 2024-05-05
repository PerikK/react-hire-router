import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, editBtn } = props
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem editBtn={editBtn} key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
