import { reMount } from "./utility.js";
export const domElements = {
    body: document.querySelector("body")as HTMLBodyElement,
    container: document.querySelector(".container")as HTMLDivElement,
    themeContainer: document.querySelector(".container__theme-btns-container")as HTMLDivElement,
    sunBtn: document.querySelector(".sun")as HTMLButtonElement,
    moonBtn: document.querySelector(".moon")as HTMLButtonElement,
    equationContainer: document.querySelector(".container__show-equation")as HTMLDivElement,
    resultContainer: document.querySelector(".container__show-result")as HTMLDivElement,
    btnsContainer: document.querySelector(".container__btns-container")as HTMLButtonElement,
    btn: document.querySelectorAll(".container__btns-container .btn")
};
export const initialState = {
    firstVal: "",
    secondVal: "",
    operation: "",
}
Object.freeze(initialState);
export let state = { ...initialState };
export const setState = (value:object) => {
    state = { ...state, ...value };
    console.log(state);
    reMount();
};