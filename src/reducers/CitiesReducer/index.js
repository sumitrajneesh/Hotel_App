import * as Keys from './keys';
const init = {
  loading: false,
  cities: [],
  error: false,
  completed: false,
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case Keys.CITIES:
      return {
        ...state,
        loading: true,
        error: false,
        cities: [],
        completed: false,
      };

    case Keys.CITIES_OK:
      return {
        ...state,
        loading: false,
        error: false,
        cities: action.payload,
        completed: true,
      };
    case Keys.CITIES_FAIL:
      return {
        ...state,
        loading: false,
        cities: [],
        error: true,
        completed: true,
      };

    default:
      return state;
  }
};

export default reducer;
