const initialState = {
    todos: [],
  };
  
  const ADD_TODO = 'ADD_TODO';
  const REMOVE_TODO = 'REMOVE_TODO';
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {...state,
          todos: [...state.todos, action.payload],
        };
      case REMOVE_TODO:
        return {...state,
          todos: state.todos.filter((_, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  