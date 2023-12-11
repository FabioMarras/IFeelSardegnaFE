import { ADD_MARE_AI_PREFERITI, REMOVE_MARE_DAI_PREFERITI } from "../actions";

const initialState = {
  preferiti: [],
};

const MariPrefer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MARE_AI_PREFERITI:
      const nuovoMare = action.payload;

      if (!state.preferiti.some((mare) => mare.id === nuovoMare.id)) {
        return { ...state, preferiti: [...state.preferiti, nuovoMare] };
      }

      return state;

    case REMOVE_MARE_DAI_PREFERITI:
      return {
        ...state,
        preferiti: Array.isArray(state.preferiti)
          ? state.preferiti.filter((mare) => mare.id !== action.payload.id)
          : [],
      };
    default:
      return state;
  }
};

export default MariPrefer;
