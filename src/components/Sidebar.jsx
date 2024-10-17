export default function Sidebar({ tabs, handleCurrentCompany }) {
  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <Tab
            {...tab}
            key={tab.id}
            handleCurrentCompany={handleCurrentCompany}
          />
        ))}
      </ul>
    </div>
  )
}

function Tab({ company, id, handleCurrentCompany }) {
  return (
    <li
      className="job-btn"
      onClick={() => handleCurrentCompany(id)}
    >
      {company}
    </li>
  )
}
