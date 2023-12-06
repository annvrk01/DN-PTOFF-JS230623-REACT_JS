import { ADD_TODO, STUDENT } from "./../../constants";


// Khởi tạo data
const initialState = {
  name: "toDo",
  todos: [  ],

  // Khởi tạo data students
  students: [  ]
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos:  [...state.todos, action.payload]
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
    // Start xử lý phần student
    case STUDENT.STUDENT_INIT:
      return {
        ...state,
        students: action.payload.studentList
      }
    case STUDENT.STUDENT_ADD:
      return {
        ...state,
        students: [...state.students, action.payload]
      }
    case STUDENT.STUDENT_DELETE:
      return {
        ...state,
        students: state.students.filter(todo => todo.id !== action.payload.id)
      }
    // end xử lý phần student  
    default:
      return state
  }
}