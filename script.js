class ToDo {
    constructor() {
        this.tasks = []
        this.render()
    }

    addTask(text) {
        this.tasks.push(new Task(text))
        this.render()
    }

    render() {
        document.body.innerHTML = ''

        this.makeList()

        const ul = document.createElement('div')

        this.tasks.forEach((task, taskIndex) => {
            const li = document.createElement('div')
            const button = document.createElement('button')
            li.innerText = task.text
            button.innerText = 'Delete task'

            li.addEventListener('click', (e) => this.taskClickHandler(task))
            button.addEventListener('click', (e) => this.taskDeleteClickHandler(e, taskIndex))

            li.appendChild(button)
            ul.appendChild(li)
        })

        document.body.appendChild(ul)

    }

    taskDeleteClickHandler(e, taskIndex) {
        e.stopPropagation()
        this.tasks = this.tasks.slice(0, taskIndex).concat(this.tasks.slice(taskIndex + 1))
        this.render()
    }

    makeList() {
        const inputAddTask = document.createElement('input')
        const buttonAddTask = document.createElement('button')
        buttonAddTask.innerText = 'Add task'

        buttonAddTask.addEventListener(
            'click',
            () => this.addTask(inputAddTask.value)
        )

        document.body.appendChild(inputAddTask)
        document.body.appendChild(buttonAddTask)
    }
}

class Task {
    constructor(text) {
        this.text = text
    }
}