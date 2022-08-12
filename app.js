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

function mathAccount(numberX, signal, numberY ){
    if (signal == '+'){ return parseInt(numberX) + parseInt(numberY) };
    if (signal == '-'){ return parseInt(numberX) - parseInt(numberY) };
    if (signal == '*'){ return parseInt(numberX) * parseInt(numberY) };
    if (signal == '/'){ return parseInt(numberX) * parseInt(numberY) };
    if (signal == '**'){ return parseInt(numberX) * parseInt(numberY) };
}

function result(){
    let valuePrincipal = '';
    let valueSecondary = '';
    let signalMath = '';
    
    for(let j = 0; j <= dataNumber.length - 1; j++){
        
        if(dataNumber[j] != '+' && dataNumber[j] != '-' && dataNumber[j] != '*' && dataNumber[j] != '**' && dataNumber[j] != '/'){
            valuePrincipal += dataNumber[j];
            console.log("valor principal: "+ valuePrincipal)
        } else {
            signalMath = dataNumber[j];
            for(let i = j; i < dataNumber.length - 1; i++){
                var z = j + 1;
                if(dataNumber[z] != '+' && dataNumber[z] != '-' && dataNumber[z] != '*' && dataNumber[z] != '**' && dataNumber[z] != '/'){
                    valueSecondary += dataNumber[z];
                    console.log('valor secundario: ' + valueSecondary)
                } else {
                    break;
                }
                j++;
            }
        }
    }
    if(valuePrincipal > 8 || valueSecondary > 8){
        document.getElementById('display').value = 'ERR';
    } else{
        document.getElementById('display').value = mathAccount(valuePrincipal, signalMath, valueSecondary);
    }
}