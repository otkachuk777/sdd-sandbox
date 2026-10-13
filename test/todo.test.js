import { test } from "node:test";
import assert from "node:assert/strict";
import { createTodoList } from "../src/todo.js";

test("add trims title and assigns incrementing ids", () => {
  const list = createTodoList();
  assert.deepEqual(list.add("  buy milk "), { id: 1, title: "buy milk", done: false });
  assert.equal(list.add("walk dog").id, 2);
});

test("add rejects empty title", () => {
  assert.throws(() => createTodoList().add("   "), /title is required/);
});

test("complete marks item done and unknown id throws", () => {
  const list = createTodoList();
  const { id } = list.add("task");
  assert.equal(list.complete(id).done, true);
  assert.throws(() => list.complete(99), /not found/);
});

test("list returns copies", () => {
  const list = createTodoList();
  list.add("task");
  list.list()[0].done = true;
  assert.equal(list.list()[0].done, false);
});
