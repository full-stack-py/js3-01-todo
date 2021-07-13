"use strict";

import { Form } from "./components/form/Form.js";
import { Todo } from "./components/todo/Todo.js";

const form = new Form("body");
const tasks = new Todo("body");

tasks.init();
form.init();

tasks.createCard("Kortele veikia", "#36f", "2021-05-10", true);
