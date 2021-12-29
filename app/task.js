const TaskController = require('./controllers/task.controller')

class Tasks {
    constructor(title, description) {
        this.title = this.checkMyEmail(title)
        this.description = this.checkMyLastName(description)
    }

    addItem(){
        return TaskController.create(this.title, this.description)
    }
}

module.exports = Tasks;