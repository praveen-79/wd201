/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  let i;
  const today = new Date();
  const todayDate = today.getDate();
  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    const over = [];
    for (i = 0; i < all.length; i++) {
      let date = new Date(all[i].dueDate);
      if (date.getDate() === todayDate - 1) {
        over.push(all[i]);
      }
    }
    return over;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    const due = [];
    for (i = 0; i < all.length; i++) {
      let date = new Date(all[i].dueDate);
      if (date.getDate() === todayDate) {
        due.push(all[i]);
      }
    }
    return due;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    const later = [];
    for (i = 0; i < all.length; i++) {
      let date = new Date(all[i].dueDate);
      if (date.getDate() === todayDate + 1) {
        later.push(all[i]);
      }
    }
    return later;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    const output = [];
    for (i = 0; i < list.length; i++) {
      let date = new Date(list[i].dueDate);
      const fd = date.toISOString().split("T")[0];
      if (date.getDate() === todayDate) {
        if (list[i].completed == false) {
          output.push(`[ ] ${list[i].title}`);
        } else {
          output.push(`[x] ${list[i].title}`);
        }
      } else {
        if (list[i].completed == false) {
          output.push(`[ ] ${list[i].title} ${fd}`);
        } else {
          output.push(`[x]  ${list[i].title} ${fd} `);
        }
      }
    }
    return output.join("\n");
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
const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

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

console.log("My Todo-list\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
