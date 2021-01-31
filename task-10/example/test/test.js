// equal must be deep strict equal when dealing with arrays
const chai = require("chai"),
  spies = require("chai-spies");

const jsdom = require("../node_modules/jsdom");
const { JSDOM } = jsdom;

chai.use(spies);

const expect = chai.expect;
const TaskManager = require("../js/taskManager");
const { beforeEach } = require("mocha");

describe("TaskManager", () => {
  describe("#constructor", () => {
    describe("when initializing a new TaskManager", () => {
      it("should create an empty tasks array", () => {
        const taskManager = new TaskManager(1);
        expect(taskManager.tasks).to.be.eql([]);
      });

      it("should set the currentId to the passed in number", () => {
        const taskManager = new TaskManager(1);
        expect(taskManager.currentId).to.be.eq(1);
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

        expect(taskManager.tasks[0]).to.be.eql(task);
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

        expect(taskManager.currentId).to.be.eql(11);
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

        expect(taskManager.tasks).to.not.contain(taskToDelete);
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

        expect(result).to.be.eql(task);
      });
    });
  });
  describe("#render", () => {
    describe("when tasks exist in the task manager", () => {
      it("should render the test in the innerHTML of the tasksList", () => {
        // Check out the documentation on github
        const dom = new JSDOM(
          `<html>
           <body>
           <p>Hello World</p>
           </body>
         </html>`,
          { url: "http://localhost" }
        );

        global.window = dom.window;
        global.document = dom.window.document;

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

        const tasksList = { innerHTML: "" };

        // spy on querySelector so we can check the taskList innerHTML later
        chai.spy.on(dom.window.document, "querySelector", () => tasksList);
        taskManager.render();

        // test taskList html has rendered correctly
        // Check for more html items
        expect(tasksList.innerHTML).to.contain(
          '<li class="card" data-task-id="0" style="min-width: 50vw">'
        );
        expect(tasksList.innerHTML).to.contain(
          '<h5 class="card-title">test</h5>'
        );
        expect(tasksList.innerHTML).to.contain(
          '<p class="card-text"><b>In Progress</b></p>'
        );
        expect(tasksList.innerHTML).to.contain('<p class="card-text">test</p>');
        expect(tasksList.innerHTML).to.contain(
          '<button class="btn btn-outline-danger delete-button">'
        );

        chai.spy.restore();
      });
    });
  });

  describe("#save", () => {
    describe("when tasks exist in the task manager", () => {
      beforeEach(() => {
        global.localStorage = {};
      });
      it("should store the tasks in local storage", () => {
        // Simulate the local storage

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

        // create JSON of the task in an array
        const tasksJson = JSON.stringify([task]);

        // spy on the localStorage
        chai.spy.on(localStorage, "setItem", () => {});

        // call save
        taskManager.save();
        // check if localStorage was called first with the tasks key and the json
        expect(localStorage.setItem).to.have.been.called.with(
          "tasks",
          tasksJson
        );
      });

      it("should store the currentId in local storage", () => {
        const taskManager = new TaskManager();

        taskManager.addTask("test", "test", "test", Date.now(), "test");
        taskManager.addTask("test", "test", "test", Date.now(), "test");

        // spy on the localStorage
        chai.spy.on(localStorage, "setItem", () => {});

        // call save
        taskManager.save();

        // create string of the currentId
        const currentId = String(taskManager.currentId);
        // check if localStorage was called last with the currentId key and the currentId
        expect(localStorage.setItem)
          .on.nth(taskManager.currentId)
          .to.have.been.called.with("currentId", currentId);

        chai.spy.restore();
      });
    });
  });

  describe("#load", () => {
    describe("when tasks are saved in localStorage", () => {
      it("should set the tasks array to the saved tasks", () => {
        const taskManager = new TaskManager();

        const task = {
          id: taskManager.currentId,
          name: "test",
          description: "test",
          assignedTo: "test",
          dueDate: Date.now(),
          status: "In Progress",
        };

        // create a tasks array
        const tasks = [task];

        // create JSON of the tasks array
        const tasksJson = JSON.stringify(tasks);

        // spy on localStorage.getItem() and return the tasksJson.
        chai.spy.on(localStorage, "getItem", () => tasksJson);

        // call load
        taskManager.load();

        // don't forget deep equal
        expect(taskManager.tasks).to.be.eql(tasks);
        chai.spy.restore();
      });
    });

    describe("when the currentId is saved in localStorage", () => {
      it("should set the currentId to the saved currentId", () => {
        const taskManager = new TaskManager();

        // spy on localStorage.getItem() and return a currentId as a string.
        chai.spy.on(localStorage, "getItem", () => "1");

        // call load
        taskManager.load();

        expect(taskManager.currentId).to.be.eq(1);
        
        chai.spy.restore() 
      });
    });
  });
});
