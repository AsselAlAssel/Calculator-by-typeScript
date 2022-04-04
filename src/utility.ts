import { domElements, state, initialState, setState } from "./global.js";

export const hasZeroLen = (value: string): boolean => value.length === 0;
export const showContent = (content: string, container: HTMLDivElement) =>
  (container.innerText = content);
export const reMount = () => {
  const equation = hasZeroLen(state.operation)
    ? "0"
    : state.firstVal + state.operation;
  const res = hasZeroLen(state.operation) ? state.firstVal : state.secondVal;
  showContent(equation, domElements.equationContainer);
  showContent(res || "0", domElements.resultContainer);
};
export const resetState = () => setState(initialState);
export const resetFirstValue = () => setState({ firstVal: "" });
export const resetSecondValue = () => setState({ secondVal: "" });
export const deleteStepFirstValue = () =>
  setState({ firstVal: state.firstVal.slice(0, state.firstVal.length - 1) });

export const deleteStepSecondValue = () =>
  setState({ secondVal: state.secondVal.slice(0, state.secondVal.length - 1) });

export const toggleSignFirstValue = () =>
  setState({ firstVal: +state.firstVal * -1 + "" });

export const toggleSignSecondValue = () =>
  setState({ secondVal: +state.secondVal * -1 + "" });

export const hasDot = (value: string, numberPressed: string) =>
  numberPressed === "." && value.includes(".");

export const isLengthLessThan13 = (value: string) => value.length < 13;
