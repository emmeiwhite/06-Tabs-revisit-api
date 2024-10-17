const url = 'https://www.course-api.com/react-tabs-project'
import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

const App = () => {
  // UI is the reflection of state, so let's describe the state

  const [tabs, setTabs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = ''

  const [currentTab, setCurrentTab] = useState(0)

  function handleCurrentCompany(id) {
    console.log(id)
    // Let's find index of the item with this id and update the currentTab as per the index for the changes to reflect in the UI as state changes triggers a re-render

    const currentTabIndex = tabs.findIndex(tab => tab.id === id)
    console.log(currentTabIndex)
    setCurrentTab(currentTabIndex)
  }

  const fetchUsers = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Could not fetch data')
      }
      const data = await response.json()

      console.log(data)

      setLoading(false)
      setTabs(data)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <section className="jobs-center">
      <div className="btn-container">
        <Sidebar
          tabs={tabs}
          handleCurrentCompany={handleCurrentCompany}
        />
        <MainContent tab={tabs[currentTab]} />
      </div>
    </section>
  )
}
export default App
