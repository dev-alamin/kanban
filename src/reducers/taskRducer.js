const taskReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_TASK': {
            return state.filter(task => task.id !== action.payload.id);
        }
        case 'MOVE_TASK': {
            return state.map(task => task.id === action.payload.id
                ? { ...task, status: action.payload.newStatus }
                : task
            );
        }
        default:
            return state;
    }
}

export default taskReducer;