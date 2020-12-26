import {menuButton,menuList, backdropContainer} from "./DOMelements.js";


menuButton.addEventListener("click", menuControl)

function menuControl(){
   menuList.classList.toggle("open")
   backdropContainer.classList.toggle("backdrop")
}




export default menuControl

