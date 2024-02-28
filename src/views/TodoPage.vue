<template>

    <div>
        <h1>Список задач</h1>
        <div class="head">
            <div>
                <form class="task-form">
                    <input type="text" id="task-name" name="taskName" required v-model="inputValue"
                           placeholder="Введите задачу">
                    <button type="submit" @click.prevent="AddTask">Добавить задачу</button>
                </form>
            </div>
            <div>
                <button class="back-button">
                    <router-link :to="{name:'home'}">Главная станица</router-link>
                </button>
            </div>
        </div>

        <!-- Список задач -->
        <div class="task-item" v-for="(task, index) in taskList" :key="index">
            <div>
                <span>{{ task.title }}</span>
                <div class="edit-task-item" v-if="task.id === listItemId">
                    <input type="text" placeholder="Введите текст" v-model="editInputValue">
                    <button @click="EditTask(task)">Сохранить</button>
                </div>

            </div>

            <div class="task-actions">
                <button class="edit-btn" @click="OpenEditTask(task)">Редактировать</button>
                <button class="delete-btn" @click="DeleteTask(task)">Удалить</button>
            </div>
        </div>
    </div>

</template>

<script>
    import {ref, computed} from 'vue'
    import {useStore} from 'vuex'

    export default {
        name: "TodoPage",
        setup() {
            const store = useStore()
            const taskList = computed(() => store.state.tasks)
            const inputValue = ref('')
            const editInputValue = ref('');
            const listItemId = ref(null)
            const taskEditValue = ref('')
            if (localStorage.tasks !== undefined) {
                store.commit("changeTasksMutations", JSON.parse(localStorage.tasks))
            }
            const AddTask = () => {
                store.commit("addTaskMutations", inputValue.value)
                ChangeLocalStore()
            }
            const OpenEditTask = (task) => {
                listItemId.value = task.id
                ChangeLocalStore()
            }
            const EditTask = (task) => {
                store.commit('editTaskMutations', {task, value: editInputValue.value})
                listItemId.value = null
                ChangeLocalStore()
            }
            const DeleteTask = (task) => {
                store.commit('deleteTaskMutations', task.id)
                ChangeLocalStore()
            }
            const ChangeLocalStore = () => {
                localStorage.tasks = JSON.stringify(taskList.value)
            }
            return {
                store,
                taskList,
                inputValue,
                editInputValue,
                listItemId,
                taskEditValue,
                AddTask,
                OpenEditTask,
                EditTask,
                DeleteTask,
            }
        }
    }
</script>

<style scoped>
    .head {
        display: flex;
    }

    .task-form {
        margin-bottom: 15px;
    }

    .back-button {
        margin-left: 30px;
    }

    .task-item {
        width: 50%;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .edit-task-item {
        display: flex;
    }

    .task-actions {
        display: flex;
        gap: 10px;
    }
</style>
