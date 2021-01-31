const assert = require("assert");
const TaskManager = require("../js/taskManager");

describe("TaskManager", () => {
  describe("#constructor", () => {
    describe("when initializing a new TaskManager", () => {
      it("should create an empty tasks array", () => {
        const taskManager = new TaskManager(1);

        assert.deepStrictEqual(taskManager.tasks, []);
      });

      it("should set the currentId to the passed in number", () => {
        const taskManager = new TaskManager(1);

        assert.deepStrictEqual(taskManager.currentId, 1);
      });
    });
  });

  describe("#addTask", () => {
    describe("passing new task data as parameters", () => {
      it("should add the task to the tasks array", () => {
        const taskManager = new TaskManager(10);

        const task = {
          id: taskManager.currentId,
          name: "test",
          description: "test",
          assignedTo: "test",
          dueDate: Date.now(),
          status: "In Progress",
        };

        taskManager.addTask(
          task.name,
          task.description,
          task.assignedTo,
          task.dueDate,
          task.status
        );

        assert.deepStrictEqual(taskManager.tasks[0], task);
      });

      it("should increment the currentId property", () => {
        const taskManager = new TaskManager(10);

        const task = {
          id: taskManager.currentId,
          name: "test",
          description: "test",
          assignedTo: "test",
          dueDate: Date.now(),
          status: "In Progress",
        };

        taskManager.addTask(
          task.name,
          task.description,
          task.assignedTo,
          task.dueDate,
          task.status
        );

        assert.deepStrictEqual(taskManager.currentId, 11);
      });
    });
  });

  describe("#deleteTask", () => {
    describe("when passed an existing taskId", () => {
      it("should remove the task from the tasks array", () => {
        const taskManager = new TaskManager();

        const taskToDelete = {
          id: taskManager.currentId,
          name: "test",
          description: "test",
          assignedTo: "test",
          dueDate: Date.now(),
          status: "In Progress",
        };
        const taskToKeep = {
          id: taskManager.currentId + 1,
          name: "feed puppy",
          description: "feed the puppy a heathy meal",
          assignedTo: "nick",
          dueDate: Date.now(),
          status: "In Progress",
        };

        taskManager.addTask(
          taskToDelete.name,
          taskToDelete.description,
          taskToDelete.assignedTom,
          taskToDelete.dueDate,
          taskToDelete.status
        );
        taskManager.addTask(
          taskToKeep.name,
          taskToKeep.description,
          taskToKeep.assignedTo,
          taskToKeep.dueDate,
          taskToKeep.status
        );

        taskManager.deleteTask(taskToDelete.id);

        assert.deepStrictEqual(taskManager.tasks, [taskToKeep]);
      });
    });
  });

  describe("#getTaskById", () => {
    describe("when passed an existing taskId", () => {
      it("should return the task", () => {
        const taskManager = new TaskManager();

        const task = {
          id: taskManager.currentId,
          name: "test",
          description: "test",
          assignedTo: "test",
          dueDate: Date.now(),
          status: "In Progress",
        };

        taskManager.addTask(
          task.name,
          task.description,
          task.assignedTo,
          task.dueDate,
          task.status
        );

        const result = taskManager.getTaskById(task.id);

        assert.deepStrictEqual(result, task);
      });
    });
  });
});