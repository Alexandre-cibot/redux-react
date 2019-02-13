import { ADD_TODO } from '../actionTypes';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, content } = action.payload;
      return [
        ...state,
        {
          id,
          title: content,
          isDone: false
        }
      ]
    default:
      return state
  }
};

export default todosReducer;

