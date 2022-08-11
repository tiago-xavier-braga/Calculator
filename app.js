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
    let valuePrincipal = '';
    let valueSecondary = '';
    let signOperation = '';
    
    for(let j = 0; j < dataNumber.length -1; j++){
        
        if(dataNumber[j] != '+' && dataNumber[j] != '-' && dataNumber[j] != '*' && dataNumber[j] != '**' && dataNumber[j] != '/'){
            valuePrincipal += dataNumber[j];
        } else {
            j++;
            if(dataNumber[j] != '+' && dataNumber[j] != '-' && dataNumber[j] != '*' && dataNumber[j] != '**' && dataNumber[j] != '/'){
                valueSecondary += dataNumber[j];
            }
        }
    }
    console.log("valor principal: "+valuePrincipal)
    console.log('valor secundario: ' + valueSecondary)


}