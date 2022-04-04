import utility from "./utility.js"
import { domElements,state,setState } from "./global.js";
const sum = (firstVal:number, secondVal:number) => firstVal + secondVal;
const minus = (firstVal:number, secondVal:number) => firstVal - secondVal;
const multiply = (firstVal:number, secondVal:number) => firstVal * secondVal;
const divide = (firstVal:number, secondVal:number) => secondVal !== 0 ? firstVal / secondVal : NaN;
const solveTheEquationByCallback = (callback:any) => {

    let resFromEquation = callback(+state.firstVal, +state.secondVal);
    if (isNaN(resFromEquation)) {
        utility.resetState();
        utility.showContent("cant divide by 0", domElements.resultContainer);
        return;
    }
    if ((resFromEquation + "").includes(".")) {
        resFromEquation = resFromEquation.toFixed(2);
    }
    setState({ firstVal: resFromEquation, secondVal: "", operation: "" });
}
const solveTheEquation = () => {
    switch (state.operation) {
        case "+":
            return solveTheEquationByCallback(sum);

        case "-":
            return solveTheEquationByCallback(minus);

        case "*":
            return solveTheEquationByCallback(multiply);

        case "/":
            return solveTheEquationByCallback(divide);
    }
}
const findOperationMathClicked = (operationTextValue:string) => {
    const pressOperationWithNoSecondValue = utility.hasZeroLen(state.secondVal) && operationTextValue !== "=";
    const pressEqualWithSecondValue = !utility.hasZeroLen(state.secondVal) && operationTextValue === "=";
    if (pressOperationWithNoSecondValue) {
        setState({ operation: operationTextValue });
        return;
    }
    if (pressEqualWithSecondValue) {
        solveTheEquation();
        return;
    }
    solveTheEquation();
    if (!utility.hasZeroLen(state.firstVal)) {
        console.log(4);
        setState({ operation: operationTextValue });
    }
}
export const findClickedOperation = (targeted:any) => {
    const operationTextValue = targeted.dataset.value;
// Ca
// عشان اذا طبع ايرور يقدر يكبس على الكبسه يفضي كلشي بالشاشه او بامكانه يكبس عرقم ههههههه 
    if (utility.hasZeroLen(state.firstVal) && operationTextValue !== "CA") {
        return;
    }
    const DoseOperationEmpty = utility.hasZeroLen(state.operation);
    switch (operationTextValue) {
        case "CA":
            return utility.resetState();
        case "C":
            return DoseOperationEmpty ? utility.resetFirstValue() : utility.resetSecondValue();
        case "delete-step":
            return DoseOperationEmpty ? utility.deleteStepFirstValue() : utility.deleteStepSecondValue();
        case "+/-":
            return DoseOperationEmpty ? utility.toggleSignFirstValue() : utility.toggleSignSecondValue();
        default:
            return findOperationMathClicked(operationTextValue);

    }
}