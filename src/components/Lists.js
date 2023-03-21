import React from "react"
import BadList from "./BadList"
import TaskList from "./TaskList"

const Lists = ({ tasks, taskSwitcher, handleDelete, handleCheck }) => {
  const entryList = tasks.filter((item) => item.type === "entry")
  const badList = tasks.filter((item) => item.type === "bad")
  return (
    <div className="row mt-5 g-2">
      <TaskList
        entryList={entryList}
        taskSwitcher={taskSwitcher}
        handleDelete={handleDelete}
        check={handleCheck}
      />
      <BadList
        badList={badList}
        taskSwitcher={taskSwitcher}
        handleDelete={handleDelete}
        check={handleCheck}
      />
    </div>
  )
}

export default Lists
