import "react-native-get-random-values"
import React, {useState} from "react"
import {StyleSheet, View, StatusBar, GestureResponderEvent} from "react-native"
import TodoList from "./src/components/TodoList"
import {Input, Button} from "react-native-elements"
import {TodosContext} from "./src/context/todoContext"
import {TodoDTO} from "./src/types/Todo.dto"

export default function App() {
	const [todos, setTodos] = useState<TodoDTO[]>([])
	const [text, setText] = useState("")

	const deleteTodo = (id: TodoDTO["id"]) => {
		setTodos(todos.filter((todo) => todo.getId() !== id))
	}

	const handleAddTodo = (e: GestureResponderEvent) => {
		const newTodo = new TodoDTO(text)
		setText("")
		setTodos([...todos, newTodo])
	}

	return (
		<TodosContext.Provider value={{todos, deleteTodo}}>
			<View style={styles.container}>
				<Input
					value={text}
					placeholder="Add Todo"
					onChangeText={(e) => setText(e)}
				/>
				<Button title="Add Todo" onPress={handleAddTodo} />
				<TodoList />
				<StatusBar barStyle="light-content" />
			</View>
		</TodosContext.Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
	},
})
