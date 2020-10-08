import {v4 as uuid} from "uuid"

export class TodoDTO {
	private done: boolean
	private id: string
	private task: string

	constructor(task: string) {
		this.done = false
		this.id = uuid()
		this.task = task
	}

	getId() {
		return this.id
	}

	ifCompleted() {
		return this.done
	}

	getTask() {
		return this.task
	}

	updateTask(task: string) {
		if (task.length > 0) {
			this.task = task
		}
		return this.id
	}

	taskCompleted() {
		this.done = true
		return this.id
	}

	taskNotCompleted() {
		this.done = false
		return this.id
	}
}
