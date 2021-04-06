/* eslint-disable */
import TaskManager from './taskManager';

describe('TaskManager', () => {
  describe('#constructor', () => {
    describe('when initializing a new TaskManager', () => {
      it('should create an empty tasks array', () => {
        const taskManager = new TaskManager(1);
        expect(taskManager.tasks).toEqual([]);
      });

      it('should set the currentId to the passed in number', () => {
        const taskManager = new TaskManager(1);
        expect(taskManager.currentId).toEqual(1);
      });
    });
  });

  describe('#addTask', () => {
    describe('passing new task data as parameters', () => {
      it('should add the task to the tasks array', () => {
        const taskManager = new TaskManager(10);

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'In Progress',
        };

        taskManager.addTask(
          task.name,
          task.description,
          task.assignedTo,
          task.dueDate,
          task.status
        );

        expect(taskManager.tasks[0]).toEqual(task);
      });

      it('should increment the currentId property', () => {
        const taskManager = new TaskManager(10);

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'In Progress',
        };

        taskManager.addTask(
          task.name,
          task.description,
          task.assignedTo,
          task.dueDate,
          task.status
        );

        expect(taskManager.currentId).toEqual(11);
      });
    });
  });

  describe('#deleteTask', () => {
    describe('when passed an existing taskId', () => {
      it('should remove the task from the tasks array', () => {
        const taskManager = new TaskManager();

        const taskToDelete = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'In Progress',
        };
        const taskToKeep = {
          id: taskManager.currentId + 1,
          name: 'feed puppy',
          description: 'feed the puppy a heathy meal',
          assignedTo: 'nick',
          dueDate: Date.now(),
          status: 'In Progress',
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

        expect(taskManager.tasks).not.toContain(taskToDelete);
      });
    });
  });

  describe('#getTaskById', () => {
    describe('when passed an existing taskId', () => {
      it('should return the task', () => {
        const taskManager = new TaskManager();

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'In Progress',
        };

        taskManager.addTask(
          task.name,
          task.description,
          task.assignedTo,
          task.dueDate,
          task.status
        );

        const result = taskManager.getTaskById(task.id);

        expect(result).toEqual(task);
      });
    });
  });

  describe('#save', () => {
    describe('when tasks exist in the task manager', () => {
      it('should store the tasks in local storage', () => {
        const taskManager = new TaskManager();

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'In Progress',
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
        const spy = jest.spyOn(window.localStorage.__proto__, 'setItem');
        taskManager.save();

        expect(spy).toHaveBeenCalled();

        expect(spy).toHaveBeenCalledWith('tasks', tasksJson);

        spy.mockRestore();
      });

      it('should store the currentId in local storage', () => {
        const taskManager = new TaskManager();

        taskManager.addTask('test', 'test', 'test', Date.now(), 'test');
        taskManager.addTask('test', 'test', 'test', Date.now(), 'test');

        // spy on the localStorage
        const spy = jest.spyOn(window.localStorage.__proto__, 'setItem');

        // call save
        taskManager.save();

        // create string of the currentId
        const currentId = String(taskManager.currentId);
        // check if localStorage was called last with the currentId key and the currentId

        expect(spy).toHaveBeenLastCalledWith('currentId', currentId);

        spy.mockRestore();
      });
    });
  });

  describe('#load', () => {
    describe('when tasks are saved in localStorage', () => {
      it('should set the tasks array to the saved tasks', () => {
        const taskManager = new TaskManager();
        const date = Date.now();

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: date,
          status: 'In Progress',
        };

        // create a tasks array
        const tasks = [task];

        // create JSON of the tasks array
        const tasksJson = JSON.stringify(tasks);

        // spy on localStorage.getItem() and return the tasksJson.
        const spy = jest
          .spyOn(window.localStorage.__proto__, 'getItem')
          .mockImplementation(() => tasksJson);

        // call load
        taskManager.load();
        // don't forget deep equal
        expect(taskManager.tasks).toEqual(tasks);

        spy.mockRestore();
      });
    });

    describe('when the currentId is saved in localStorage', () => {
      it('should set the currentId to the saved currentId', () => {
        const taskManager = new TaskManager();

        // spy on localStorage.getItem() and return a currentId as a string.
        const spy = jest
          .spyOn(window.localStorage.__proto__, 'getItem')
          .mockImplementation(() => '1');

        // call load
        taskManager.load();
        expect(taskManager.currentId).toEqual(1);

        spy.mockRestore();
      });
    });
  });
});
