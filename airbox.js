function get_para_1(){
    var inputs= [];
    for (var i= 1; i<=6 ; i++){
        inputs.push(document.getElementById("text_para_1").value);
        inputs.push(document.getElementById("text_para_2").value);
        inputs.push(document.getElementById("text_para_3").value);
        inputs.push(document.getElementById("text_para_4").value);
        inputs.push(document.getElementById("text_para_5").value);
        inputs.push(document.getElementById("text_para_6").value);
    }
    document.getElementById("show_paragraph1").innerHTML = inputs.join(". ");
}
function get_para_2(){
    var inputs= [];
    for (var i = 1; i<=6; i++) {
        inputs.push(document.getElementById("text_para_7").value);
        inputs.push(document.getElementById("text_para_8").value); 
        inputs.push(document.getElementById("text_para_9").value);  
        inputs.push(document.getElementById("text_para_10").value); 
        inputs.push(document.getElementById("text_para_11").value);
        inputs.push(document.getElementById("text_para_12").value);  
    }
    document.getElementById("show_paragraph2").innerHTML = inputs.join(". ");
}
