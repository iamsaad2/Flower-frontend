import {
  GET_FLOWERS,
  ADD_FLOWER,
  CLEAR_CURRENT,
  DELETE_FLOWER,
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

    default:
      return {
        state,
      };
  }
};
