import React from 'react'
import classes from './TableComponent.module.css'

interface rowdata {
  ticketfrom: string
  ticketto: string
  createdon: string
  description: string
  priority: string
}

const TableComponent = (props: { data: Array<rowdata> }) => {
  return (
    <React.Fragment>
      <div className="bg-gray-100 p-4 rounded mt-3">
        <div className="flex justify-between items-center">
          <p className={`${classes.blue} m-0`}>Tickets</p>
          <button className={`py-1 px-2 text-white ${classes.orange} rounded`}>
            + Create New Ticket
          </button>
        </div>
      </div>

      <div
        className={`${classes.backgroundblue} flex text-white items-center p-4 overflow-auto`}
      >
        <input type="radio" name="type" value="New" className="mr-2" />
        <label className="m-0 mr-5 whitespace-nowrap">New</label>
        <input type="radio" name="type" value="In-progress" className="mr-2" />
        <label className="m-0 mr-5 whitespace-nowrap">In-progress</label>
        <input type="radio" name="type" value="On-Hold" className="mr-2" />
        <label className="m-0 mr-5 whitespace-nowrap">On-Hold</label>
        <input type="radio" name="type" value="Completed" className="mr-2" />
        <label className="m-0 mr-5 whitespace-nowrap">Completed</label>
        <input type="radio" name="type" value="View-All" className="mr-2" />
        <label className="m-0 mr-5 whitespace-nowrap">View-All</label>
      </div>

      <div className="flex flex-col overflow-auto p-3 bg-gray-100 rounded">
        <table className={classes.table}>
          <thead className={classes.thead}>
            <tr className="text-white">
              <th scope="col">Ticket From</th>
              <th scope="col">Ticket to</th>
              <th scope="col">Created On</th>
              <th scope="col">Description</th>
              <th scope="col">Priority</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((ele, index) => (
              <tr key={index} className="whitespace-nowrap">
                <td>{ele.ticketfrom}</td>
                <td>{ele.ticketto}</td>
                <td>{ele.createdon}</td>
                <td>{ele.description}</td>
                <td>{ele.priority}</td>
                <td>
                  <img src="assets/images/Group 18.svg" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className={`${classes.pagination} flex items-center justify-end mr-2 mt-2`}
        >
          <div className="flex">
            <p className="m-0 mx-2">Records Per Page</p>
            <select className="mr-4">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
          <i className="fas fa-angle-double-left text-muted"></i>
          <i className="fas fa-angle-left ml-3 text-muted"></i>
          <p className="m-0 mx-3">Page 1 of 1</p>
          <i className="fas fa-angle-right mr-3"></i>
          <i className="fas fa-angle-double-right"></i>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TableComponent
