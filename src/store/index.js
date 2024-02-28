import {createStore} from 'vuex'
import {v4 as uuidv4} from 'uuid'

export default createStore({
    state: {
        tasks: []
    },
    mutations: {
        changeTasksMutations (state,newTasks) {
            state.tasks = newTasks
        },
        addTaskMutations(state, inputValue) {
            state.tasks.push(
                {title: inputValue, id: uuidv4()}
            )
        },
        editTaskMutations(state, taskItem) {
            console.log(taskItem)
            state.tasks = state.tasks.map((task) => {
                if (task.id === taskItem.task.id) {
                    task.title = taskItem.value
                }
                return {...task}
            })
        },
        deleteTaskMutations(state, taskId) {
            console.log()
            state.tasks = state.tasks.filter((task) => task.id !== taskId)
        }
    }
})
