import React from "react"
import {TodoDTO} from "../types/Todo.dto"

export const TodosContext = React.createContext<{
	todos: TodoDTO[]
	deleteTodo: (id: TodoDTO["id"]) => void
}>({
	todos: [],
	deleteTodo(id) {
		this.todos = this.todos.filter((todo) => id !== todo.getId())
	},
})
