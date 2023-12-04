const todoList = () => {
    all = [];
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter(todo => !todo.completed && todo.dueDate < today);
    };
  
    const dueToday = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter(todo => !todo.completed && todo.dueDate === today);
    };
  
    const dueLater = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter(todo => !todo.completed && todo.dueDate > today);
    };
  
    const toDisplayableList = (list) => {
      if (list.length === 0) {
        return "No items";
      }
  
      let displayableList = "";
      list.forEach((todo, index) => {
        const status = todo.completed ? "Completed" : "Pending";
        const dueDate = isDueToday(todo.dueDate) ? "" : ` (Due: ${formattedDate(todo.dueDate)})`;
        displayableList += `${index + 1}. ${todo.title}${dueDate}, Status: ${status}\n`;
      });
  
      return displayableList.trim();
    };
  
    const formattedDate = (date) => {
      return new Date(date).toISOString().split("T")[0];
    };
  
    const isDueToday = (date) => {
      return formattedDate(date) === formattedDate(new Date());
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
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false });
  todos.add({ title: 'Pay rent', dueDate: today, completed: true });
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false });
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false });
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false });
  
  // No console.log statements in the code
  // The calling code should handle printing to the screen
  
  const overdueItems = todos.overdue();
  const formattedOverdueItems = todos.toDisplayableList(overdueItems);
  
  const dueTodayItems = todos.dueToday();
  const formattedDueTodayItems = todos.toDisplayableList(dueTodayItems);
  
  const dueLaterItems = todos.dueLater();
  const formattedDueLaterItems = todos.toDisplayableList(dueLaterItems);
  
  // Examples of how you can print the results
  console.log("My Todo-list\n");
  console.log("Overdue");
  console.log(formattedOverdueItems);
  console.log("\nDue Today");
  console.log(formattedDueTodayItems);
  console.log("\nDue Later");
  console.log(formattedDueLaterItems);
  console.log("\n\n");
  