import * as utility from "./utility.js";
import { state,setState } from "./global.js";

const addToFirstValue = (numberPressed:string) => {
    if (utility.hasDot(state.firstVal, numberPressed)) {
        return;
    }
    const newFirstValue = state.firstVal + numberPressed;
    if (utility.isLengthLessThan13(newFirstValue)) {
        setState({ firstVal: newFirstValue });
    }
}
const addToSecondValue = (numberPressed:string) => {
    if (utility.hasDot(state.secondVal, numberPressed)) {
        return;
    }
    const newSecondValue = state.secondVal + numberPressed;
    if (utility.isLengthLessThan13(newSecondValue)) {
        setState({ secondVal: newSecondValue });
    }
}
export const findClickedNumber = (targeted:any) => {
    const numberPressed = targeted.dataset.value;
    if (utility.hasZeroLen(state.operation)) {
        addToFirstValue(numberPressed);
        return;
    }
    addToSecondValue(numberPressed);
}