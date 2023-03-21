import React from "react"

const BadList = ({ badList, taskSwitcher, handleDelete, check }) => {
  const ttlBadHrs = badList.reduce((acc, item) => acc + +item.hr, 0)
  return (
    <div className="col-md">
      <h2 className="text-center">Bad List</h2>
      <hr />
      <table className="table table-striped table-hover">
        <tbody>
          {badList.map((item) => (
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
                  onClick={() => taskSwitcher(item._id, "entry")}
                  className="btn btn-warning"
                >
                  <i className="fa-solid fa-left-long"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-end fw-bold">
        You can save upto {ttlBadHrs} hr(s)
      </div>
    </div>
  )
}

export default BadList
