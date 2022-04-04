import { domElements, state, initialState, setState } from "./global.js";

const hasZeroLen = (value: string): boolean => value.length === 0;
const showContent = (content: string, container: HTMLDivElement) =>
  (container.innerText = content);
export const reMount = () => {
  const equation = hasZeroLen(state.operation)
    ? "0"
    : state.firstVal + state.operation;
  const res = hasZeroLen(state.operation) ? state.firstVal : state.secondVal;
  showContent(equation, domElements.equationContainer);
  showContent(res || "0", domElements.resultContainer);
};
const resetState = () => setState(initialState);
const resetFirstValue = () => setState({ firstVal: "" });
const resetSecondValue = () => setState({ secondVal: "" });
const deleteStepFirstValue = () =>
  setState({ firstVal: state.firstVal.slice(0, state.firstVal.length - 1) });

const deleteStepSecondValue = () =>
  setState({ secondVal: state.secondVal.slice(0, state.secondVal.length - 1) });

const toggleSignFirstValue = () =>
  setState({ firstVal: +state.firstVal * -1 + "" });

const toggleSignSecondValue = () =>
  setState({ secondVal: +state.secondVal * -1 + "" });

const hasDot = (value: string, numberPressed: string) =>
  numberPressed === "." && value.includes(".");

const isLengthLessThan13 = (value: string) => value.length < 13;

const utility = {
  hasZeroLen,
  showContent,
  resetState,
  resetFirstValue,
  resetSecondValue,
  hasDot,
  deleteStepFirstValue,
  deleteStepSecondValue,
  toggleSignFirstValue,
  toggleSignSecondValue,
  isLengthLessThan13,
};
export default utility;
