import { ModelActionTypes } from "./model.types";

export const setCurrentModel = model => ({
    type: ModelActionTypes.SET_CURRENT_MODEL,
    payload: model
});

export const setCurrentWheel = model => ({
    type: ModelActionTypes.SET_CURRENT_WHEEL,
    payload: model
});

export const setCurrentPriColor = model => ({
    type: ModelActionTypes.SET_CURRENT_PRICOLOR,
    payload: model
});

export const setCurrentSecColor = model => ({
    type: ModelActionTypes.SET_CURRENT_SECCOLOR,
    payload: model
});

export const setCurrentWinColor = model => ({
    type: ModelActionTypes.SET_CURRENT_WINCOLOR,
    payload: model
});

export const setCurrentTireColor = model => ({
    type: ModelActionTypes.SET_CURRENT_TIRECOLOR,
    payload: model
});

export const setCurrentRimColor = model => ({
    type: ModelActionTypes.SET_CURRENT_RIMCOLOR,
    payload: model
});