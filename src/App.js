import { useState } from "react"
import "./App.css"
import Form from "./components/Form"
import Lists from "./components/Lists"

const ttlHrPerWeek = 168
function App() {
  const [tasks, setTasks] = useState([])
  const [idsToDelete, setIdsToDelete] = useState([])

  const totalHrs = tasks.reduce((acc, item) => acc + +item.hr, 0)
  const taskEntry = (taskObj) => {
    if (totalHrs + +taskObj.hr > ttlHrPerWeek) {
      return alert("Total task hours exceeds the hrs available in a week!")
    }
    setTasks([...tasks, taskObj])
  }
  const taskSwitcher = (_id, type) => {
    const switched = tasks.map((item) => {
      if (_id === item._id) {
        item.type = type
      }
      return item
    })
    setTasks(switched)
  }
  const handleDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const filtered = tasks.filter((item) => item._id !== _id)
      setTasks(filtered)
    }
  }
  const handleSelect = (e) => {
    const { checked, value } = e.target
    if (checked) {
      setIdsToDelete([...idsToDelete, value])
    } else {
      setIdsToDelete(idsToDelete.filter((item) => item !== value))
    }
  }
  const handleMultipleDelete = () => {
    if (window.confirm("Are you sure you want to delete the selected tasks?")) {
      const filtered = tasks.filter((item) => !idsToDelete.includes(item._id))
      setTasks(filtered)
      setIdsToDelete([])
    }
  }
  return (
    <div className="wrapper">
      <div className="container">
        {/* top title */}
        <div className="row">
          <div className="col text-center mt-5">
            <h1>Not To Do List</h1>
          </div>
        </div>

        <Form taskEntry={taskEntry} />

        <Lists
          tasks={tasks}
          taskSwitcher={taskSwitcher}
          handleDelete={handleDelete}
          handleCheck={handleSelect}
        />

        {/* Total hrs area */}
        <div className="row fw-bold">
          <div className="col">
            The total hours allocated is {totalHrs} hour(s)
          </div>
        </div>

        {idsToDelete.length > 0 && (
          <div className="py-4">
            <button className="btn btn-danger" onClick={handleMultipleDelete}>
              Delete Selected Tasks
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
