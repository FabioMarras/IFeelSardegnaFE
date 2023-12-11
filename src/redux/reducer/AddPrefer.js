import { ADD_CITA_AI_PREFERITI, REMOVE_CITTÀ_DAI_PREFERITI } from "../actions";

const initialState = {
  preferiti: [],
};

const CityPrefer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITA_AI_PREFERITI:
      const nuovaCittà = action.payload;

      if (!state.preferiti.some((città) => città.id === nuovaCittà.id)) {
        return { ...state, preferiti: [...state.preferiti, nuovaCittà] };
      }

      return state;

    case REMOVE_CITTÀ_DAI_PREFERITI:
      return {
        ...state,
        preferiti: Array.isArray(state.preferiti)
          ? state.preferiti.filter((città) => città.id !== action.payload.id)
          : [],
      };
    default:
      return state;
  }
};

export default CityPrefer;
