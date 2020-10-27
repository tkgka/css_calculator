function input_num(val){
    var input = document.getElementById('input_area').value;
    if(input == "0")
        document.getElementById('input_area').value = val;
    else if((input[input.length -1]=="0") && (isNaN(input[input.length -2]))){
        input = input.replace(input[input.length -2] + '0', input[input.length -2]);
        document.getElementById('input_area').value = input + val;
    }
    else
        document.getElementById('input_area').value = input + val;
}

function input_opr(val){
    var input = document.getElementById('input_area').value;
    var end = input.length-1;

    if(isNaN(input[end])){
        input = input.substr(0,end);
        document.getElementById('input_area').value = input + val;
    }
    else
        document.getElementById('input_area').value = input + val;
}

function dot(){
    var input = document.getElementById('input_area').value;
    var end = input.length-1;

    if(!isNaN(input[end]))
        document.getElementById('input_area').value = input + ".";
    else if(input[end] == "."){}
    else
        document.getElementById('input_area').value = input + "0.";
}

function backspace(){
    var input = document.getElementById('input_area').value;
    var end = input.length-1;

    if(input!="0"){
        var backspaced = input.substr(0,end);
        if(backspaced != "")
            document.getElementById('input_area').value = backspaced;
        else
            document.getElementById('input_area').value = "0";
    }
}

function c_key(){ 
    document.getElementById('input_area').value = "0";
    document.getElementById('output_area').value = "0";
}

function answer(){
    var input = document.getElementById('input_area').value;
    document.getElementById('output_area').value = eval(input);
}