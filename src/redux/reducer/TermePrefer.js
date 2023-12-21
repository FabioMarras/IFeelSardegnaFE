import { ADD_TERME_AI_PREFERITI, REMOVE_TERME_DAI_PREFERITI } from "../actions";

const initialState = {
  preferiti: [],
};

const TermePrefer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TERME_AI_PREFERITI:
      const nuovaTerma = action.payload;

      if (!state.preferiti.some((terma) => terma.id === nuovaTerma.id)) {
        return { ...state, preferiti: [...state.preferiti, nuovaTerma] };
      }

      return state;

    case REMOVE_TERME_DAI_PREFERITI:
      return {
        ...state,
        preferiti: Array.isArray(state.preferiti)
          ? state.preferiti.filter((terma) => terma.id !== action.payload.id)
          : [],
      };
    default:
      return state;
  }
};

export default TermePrefer;
