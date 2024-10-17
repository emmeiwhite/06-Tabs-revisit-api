export default function MainContent({ tab }) {
  const { company, duties, title } = tab
  return (
    <div>
      <h1>{company}</h1>
      <p>{title}</p>
      {duties.map(duty => {
        return <div>{duty}</div>
      })}
    </div>
  )
}
