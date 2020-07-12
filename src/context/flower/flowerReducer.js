import {
  GET_FLOWERS,
  ADD_FLOWER,
  CLEAR_CURRENT,
  DELETE_FLOWER,
  UPDATE_FLOWER,
  SET_CURRENT,
  FLOWER_ERROR,
  HANDLE_CLOSE,
  HANDLE_SHOW,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_FLOWERS:
      return {
        ...state,
        flowers: action.payload,
      };

    case ADD_FLOWER:
      return {
        ...state,
        flowers: [action.payload, ...state.flowers],
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case DELETE_FLOWER:
      return {
        ...state,
        flowers: state.flowers.filter(
          (flower) => flower._id !== action.payload
        ),
      };

    case UPDATE_FLOWER:
      return {
        ...state,
        flowers: state.flowers.map((flower) =>
          flower._id === action.payload._id ? action.payload : flower
        ),
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case HANDLE_CLOSE:
      return {
        ...state,
        show: false,
      };

    case HANDLE_SHOW:
      return {
        ...state,
        show: true,
      };

    case FLOWER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return {
        state,
      };
  }
};
