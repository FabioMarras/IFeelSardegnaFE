export const SET_TOKEN = "SET_TOKEN";
export const LOGOUT = "LOGOUT";
export const ADD_CITA_AI_PREFERITI = "ADD_CITA_AI_PREFERITI";
export const REMOVE_CITTÀ_DAI_PREFERITI = "REMOVE_CITTÀ_DAI_PREFERITI";
export const ADD_MARE_AI_PREFERITI = "ADD_MARE_AI_PREFERITI";
export const REMOVE_MARE_AI_PREFERITI = "REMOVE_MARE_AI_PREFERITI";

export const setToken = (data) => ({ type: SET_TOKEN, payload: data });
export const addCittàAiPreferiti = (città) => ({
  type: ADD_CITA_AI_PREFERITI,
  payload: città,
});
export const removeCittàAiPreferiti = (città) => ({
  type: REMOVE_CITTÀ_DAI_PREFERITI,
  payload: città,
});
export const addMareAiPreferiti = (mare) => ({
  type: ADD_MARE_AI_PREFERITI,
  payload: mare,
});
export const removeMareAiPreferiti = (mare) => ({
  type: REMOVE_MARE_AI_PREFERITI,
  payload: mare,
});
export const logout = () => ({ type: LOGOUT });
