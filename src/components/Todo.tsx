import React, {FunctionComponent, useContext, useState} from "react"
import {MaterialIcons} from "@expo/vector-icons"
import {Text, View, StyleSheet} from "react-native"
import {TodoDTO} from "../types/Todo.dto"
import {TodosContext} from "../context/todoContext"

interface Props {
	todo: TodoDTO
}

const Todo: FunctionComponent<Props> = ({todo}) => {
	const [done, setDone] = useState(todo.ifCompleted())
	const {deleteTodo} = useContext(TodosContext)

	return (
		<View
			style={styles.container}
			onStartShouldSetResponder={() => true}
			onMoveShouldSetResponder={() => false}
			onResponderGrant={() => {
				if (!done) {
					todo.taskCompleted()
					setDone(true)
					return
				}
				todo.taskNotCompleted()
				setDone(false)
			}}>
			<Text style={done ? styles.completed : {}}>{todo.getTask()}</Text>
			<MaterialIcons
				onPress={() => deleteTodo(todo.getId())}
				name="delete"
				size={24}
				color="black"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#EEEEEE",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginHorizontal: "5%",
		marginTop: "5%",
		padding: "5%",
	},
	completed: {
		textDecorationLine: "line-through",
		fontStyle: "italic",
	},
})

export default Todo
