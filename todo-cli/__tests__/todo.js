const todoList = require("../todo");

const { add, markAsComplete, all, dueToday, dueLater, overdue } = todoList();

describe("Todo test suite", () => {
  test("should add new todo", () => {
    expect(all.length).toBe(0);
    const date = new Date();
    const yd = new Date(date);
    const td = new Date(date);
    td.setDate(date.getDate() + 1);
    yd.setDate(date.getDate() - 1);
    add({
      title: "Todo test",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    add({
      title: "Todo test",
      completed: false,
      dueDate: yd.toLocaleDateString("en-CA"),
    });
    add({
      title: "Todo test",
      completed: false,
      dueDate: td.toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(3);
  });

  test("should mark a todo as complete", () => {
    
    expect(all[0].completed).toBe(false);

     markAsComplete(0);

   
    expect(all[0].completed).toBe(true);
  });

  test("should retrive a todo as duetoday", () => {
    expect(all.length).toBe(3);
    const k = dueToday();
    console.log(k);
    expect(k.length).toBe(1);
  });
  test("should retrive a todo as overdue", () => {
    let k = [];
    expect(k.length).toBe(0);
    k = overdue();
    expect(k.length).toBe(1);
  });
  test("should retrive a todo as laterdue", () => {
    let k = [];
    expect(k.length).toBe(0);
    k = dueLater();
    expect(k.length).toBe(1);
  });
});
