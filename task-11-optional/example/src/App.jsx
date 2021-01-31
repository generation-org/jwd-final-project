/* eslint-disable */

import { React, useState, useEffect } from 'react';
import TaskManager from './taskManager';

const taskManager = new TaskManager(0);

export default function App() {
  const [validateName, setValidateName] = useState('');
  const [validateDescription, setvalidateDescription] = useState('');
  const [validateAssignedTo, setvalidateAssignedTo] = useState('');
  const [validateDueDate, setvalidateDueDate] = useState('');
  const [validateStatus, setvalidateStatus] = useState('In Progress');
  const [nameStatus, setNameStatus] = useState(true);
  const [descriptionStatus, setdescriptionStatus] = useState(true);
  const [assignedToStatus, setassignedToStatus] = useState(true);
  const [dueDateStatus, setdueDateStatus] = useState(true);
  const [tasks, setTasks] = useState(taskManager.tasks);
  // grab the local storage
  taskManager.load();

  useEffect(() => {
    setTasks(taskManager.tasks);
  }, []);

  // this is used after a submission
  const clearFormFields = () => {
    setNameStatus(true);
    setdescriptionStatus(true);
    setassignedToStatus(true);
    setdueDateStatus(true);
    setValidateName('');
    setvalidateDescription('');
    setvalidateAssignedTo('');
    setvalidateDueDate('');
    setvalidateStatus('In Progress');
  };

  // add a task if the submitted inputs are valid
  const handleSubmit = (event) => {
    event.preventDefault();
    // I use this to check if one fails
    let validationFail = 0;

    // validate all our inputs
    if (validateName.length > 2) {
      setNameStatus(true);
    } else {
      setNameStatus(false);
      validationFail++;
    }

    if (validateDescription.length > 2) {
      setdescriptionStatus(true);
    } else {
      setdescriptionStatus(false);
      validationFail++;
    }

    if (validateAssignedTo.length > 2) {
      setassignedToStatus(true);
    } else {
      setassignedToStatus(false);
      validationFail++;
    }

    if (validateDueDate.length > 2) {
      setdueDateStatus(true);
    } else {
      setdueDateStatus(false);
      validationFail++;
    }

    // If a validation fails, return nothing and the user must submit again
    if (validationFail > 0) {
      validationFail = 0;
    } else {
      // Push the valid input into our tasks array
      taskManager.addTask(
        validateName,
        validateDescription,
        validateAssignedTo,
        validateDueDate,
        validateStatus
      );
      // clear our forms, save to the local storage and then update our DOM
      clearFormFields();
      taskManager.save();
      setTasks(taskManager.tasks);
    }
  };

  return (
    <div className="app">
      <div className="d-flex justify-content-center my-5">
        <div>
          <div className="row">
            <h1>Task App</h1>
          </div>
          <div className="row mb-5">
            <form id="new-task-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="new-task-name">Name</label>
                <input
                  value={validateName}
                  type="text"
                  className={
                    nameStatus ? 'form-control' : 'form-control is-invalid'
                  }
                  id="new-task-name"
                  onChange={(element) => setValidateName(element.target.value)}
                />

                <div className="valid-feedback">Looks good!</div>

                <div className="invalid-feedback">
                  Please provide a valid name.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="new-task-description">Description</label>
                <input
                  value={validateDescription}
                  type="text"
                  className={
                    descriptionStatus
                      ? 'form-control'
                      : 'form-control is-invalid'
                  }
                  id="new-task-description"
                  onChange={(element) =>
                    setvalidateDescription(element.target.value)
                  }
                />
                <div className="invalid-feedback">
                  <div className="valid-feedback">Looks good!</div>
                  Please provide a valid description
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="new-task-assigned-to">Assigned To</label>
                  <input
                    value={validateAssignedTo}
                    type="text"
                    className={
                      assignedToStatus
                        ? 'form-control'
                        : 'form-control is-invalid'
                    }
                    id="new-task-assigned-to"
                    onChange={(element) =>
                      setvalidateAssignedTo(element.target.value)
                    }
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                </div>
                <div className="form-group col">
                  <label htmlFor="new-task-due-date">Due Date</label>
                  <input
                    value={validateDueDate}
                    type="date"
                    className={
                      dueDateStatus ? 'form-control' : 'form-control is-invalid'
                    }
                    id="new-task-due-date"
                    onChange={(element) =>
                      setvalidateDueDate(element.target.value)
                    }
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <select
                    value={validateStatus}
                    onChange={(element) =>
                      setvalidateStatus(element.target.value)
                    }
                    className="form-control"
                    id="new-task-status"
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>

                <div className="form-group col">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="new-task-submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="task-list-container">
        <h3 className="text-center">Tasks:</h3>
        <div className="d-flex justify-content-center">
          <ul className="list-group" id="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="card" data-task-id={task.id}>
                <div className="card-body">
                  <h5 className="card-title">{task.name}</h5>
                  <p className="card-text">{task.description}</p>
                  <p className="card-text">{task.assignedTo}</p>
                  <p className="card-text">{task.dueDate}</p>
                  <div className="card-footer row">
                    <div className="col-6">
                      <p className="card-text">
                        <b>{task.status}</b>
                      </p>
                    </div>
                    <div className="col-3">
                      <button
                        type="button"
                        className="btn btn-outline-success done-button"
                        onClick={() => {
                          const updatingTask = taskManager.getTaskById(task.id);
                          updatingTask.status = 'Done';
                          setTasks(taskManager.tasks);
                          taskManager.save();
                        }}
                      >
                        Done
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        type="button"
                        className="btn btn-outline-danger delete-button"
                        onClick={() => {
                          taskManager.deleteTask(task.id);
                          setTasks(taskManager.tasks);
                          taskManager.save();
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
