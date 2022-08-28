let pw = document.getElementById("pwfield");
let checkBox = document.getElementById("hidepw");

let checkBoxState = () => {
    if(checkBox.checked) {
        pw.type = 'password';
    }
    else if(!checkBox.checked) {
        pw.type = 'text';
    }
}