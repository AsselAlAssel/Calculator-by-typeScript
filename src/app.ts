import { domElements } from "./global.js";
import {findClickedOperation} from "./operationsTrack.js"
import { findClickedNumber } from "./numberTrack.js";


const toggleTheme = () => domElements.body.classList.toggle("dark-them");
domElements.sunBtn.addEventListener("click", () => toggleTheme());
domElements.moonBtn.addEventListener("click", () => toggleTheme());

const whatBtnClicked = (targeted:any) => {
    let type = targeted.dataset.type;
    switch (type) {
        case "operation":
            return findClickedOperation(targeted);
        case "number":
            return findClickedNumber(targeted);
    }
}
const btnClicked = (targeted:any) => targeted.tagName === "BUTTON" ? whatBtnClicked(targeted) : null;
domElements.btnsContainer.addEventListener("click", (event) => btnClicked(event.target));
