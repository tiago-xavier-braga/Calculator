var dataNumber = [];

function renderDisplay(){
    document.getElementById('display').value = "";
    for(let i = 0; i < dataNumber.length; i++){
        document.getElementById('display').value += dataNumber[i];
    }
    console.log(dataNumber)
}

function getNumber(number){
    dataNumber.push(number);
    renderDisplay();

    return dataNumber;
}

function getOperation(sign){
    dataNumber.push(sign);
    renderDisplay();

    return dataNumber;
}

function deleteNumber(deleteCharacter){
    document.getElementById('display').value = 0;

    if(deleteCharacter == "C"){
        dataNumber.pop();
        renderDisplay();
    }
    else{
        dataNumber = [];
        renderDisplay();
    }

}