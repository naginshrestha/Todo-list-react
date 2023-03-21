import React from "react"

const TaskList = ({ entryList, taskSwitcher, handleDelete, check }) => {
  return (
    <div className="col-md">
      <h2 className="text-center">Entry List</h2>
      <hr />

      <table className="table table-striped table-hover">
        <tbody>
          {entryList.map((item) => (
            <tr key={item._id}>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={item._id}
                  onChange={check}
                />
              </td>
              <td className="text-center">{item.task}</td>
              <td className="text-end">{item.hr} hrs</td>
              <td className="d-flex gap-2 justify-content-end">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-danger"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => taskSwitcher(item._id, "bad")}
                >
                  <i className="fa-solid fa-right-long"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskList
