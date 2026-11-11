import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {id: "abc", task:"demo-task", isDone: false}
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo); //direct mutation of the array is allowed in redux-toolkit because it uses immer library under the hood
        },
        deleteTodo: (state,action) => {
            //action.payload
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markAsDone: (state,action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload) {
                    todo.isDone = true;
                }
                return todo;
            });
        },
    },
});


export const {addTodo,deleteTodo,markAsDone} = todoSlice.actions;
export default todoSlice.reducer;
