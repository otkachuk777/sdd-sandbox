// In-memory todo list. Intentionally tiny: the SDD workflow adds features to it.
export function createTodoList() {
  const items = [];
  let nextId = 1;
  return {
    add(title) {
      if (typeof title !== "string" || title.trim() === "") {
        throw new Error("title is required");
      }
      const item = { id: nextId++, title: title.trim(), done: false };
      items.push(item);
      return item;
    },
    complete(id) {
      const item = items.find((i) => i.id === id);
      if (!item) throw new Error(`todo ${id} not found`);
      item.done = true;
      return item;
    },
    list() {
      return items.map((i) => ({ ...i }));
    },
  };
}
