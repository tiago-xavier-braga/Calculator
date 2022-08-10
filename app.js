var dataNumber = [];

function renderDisplay(){
    document.getElementById('display').value = "";
    for(let i = 0; i < dataNumber.length; i++){
        document.getElementById('display').value += dataNumber[i];
    }
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

function result(){
    let value = '';
    let signOperation = '';
    for(var j = 0; j < dataNumber.length - 1; j++){
        if(typeof(dataNumber[j]) == 'number'){
            value += dataNumber[j];
        } else{
            signOperation += dataNumber[j];
            break;
        }
    }
    console.log(signOperation)
    console.log(value)
}