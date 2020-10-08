import React, {FunctionComponent, useContext} from "react"
import {ScrollView, StyleSheet} from "react-native"
import {TodosContext} from "../context/todoContext"
import Todo from "./Todo"

const TodoList: FunctionComponent = () => {
	const {todos} = useContext(TodosContext)

	return (
		<ScrollView
			contentContainerStyle={styles.container}
			style={styles.list}>
			{todos.map((todo) => (
				<Todo todo={todo} key={todo.getId()}></Todo>
			))}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	list: {
		width: "90%",
	},
})

export default TodoList
