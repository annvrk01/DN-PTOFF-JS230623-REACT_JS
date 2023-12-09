


// Khởi tạo data
const initialState = {
   name: "cart",
   carts: [],
  }

 export const cartReducer = (state = initialState, action) => {
    //console.log('cartReducer running...');
    switch(action.type) {
      case 'add cart':        
        console.log(', caught event add cart...');
        return {
          ...state,
          carts:  [...state.carts, action.payload]
        }

      case 'DELETE_TODO':
        console.log('DELETE_TODO')
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload.id)
        }

      case 'UPDATE_TODO':
        console.log('UPDATE_TODO')
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                name: action.payload.name,
                completed: action.payload.completed
              }
            } else {
              return todo
            }
        })
      }


     
      default:
        return state
    }
  }