/* eslint-disable no-undef */

const todoList = () => {
  const all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const today = new Date();
  const todayDate = today.getDate();

  const overdue = () => {
    return all.filter(todo => {
      const todoDate = new Date(todo.dueDate).getDate();
      return todoDate === todayDate - 1;
    });
  };

  const dueToday = () => {
    const todayISO = today.toISOString().split("T")[0];
    return all.filter(todo => {
      const todoDate = new Date(todo.dueDate).toISOString().split("T")[0];
      return !todo.completed && todoDate <= todayISO;
    });
  };

  const dueLater = () => {
    return all.filter(todo => {
      const todoDate = new Date(todo.dueDate).getDate();
      return !todo.completed && todoDate > todayDate + 1;
    });
  };

  const toDisplayableList = (list) => {
    return list.map(todo => {
      const todoDate = new Date(todo.dueDate);
      const formattedDate = todoDate.toISOString().split("T")[0];

      if (todoDate.getDate() === todayDate) {
        return `[${todo.completed ? 'x' : ' '}] ${todo.title}`;
      } else {
        return `[${todo.completed ? 'x' : ' '}] ${todo.title} ${formattedDate}`;
      }
    }).join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

const todos = todoList();

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

const overdueItems = todos.overdue();
const formattedOverdueItems = todos.toDisplayableList(overdueItems);

const dueTodayItems = todos.dueToday();
const formattedDueTodayItems = todos.toDisplayableList(dueTodayItems);

const dueLaterItems = todos.dueLater();
const formattedDueLaterItems = todos.toDisplayableList(dueLaterItems);

console.log("My Todo-list\n");

console.log("Overdue");
console.log(formattedOverdueItems);
console.log("\nDue Today");
console.log(formattedDueTodayItems);
console.log("\nDue Later");
console.log(formattedDueLaterItems);
console.log("\n\n");
