document.getElementById("resultado").disabled = true;

function calcular(){
    let $temperatura = document.getElementById("temperatura").value;
    let $opcao1 = document.getElementById("select1").value;
    let $opcao2 = document.getElementById("select2").value;

    if($opcao1=='C' && $opcao2=='C'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = $temperatura;
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='C' && $opcao2=='F'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = ($temperatura * (9/5) + 32).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='C' && $opcao2=='K'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = (parseInt($temperatura) + 273.15).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='C' && $opcao2=='R'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = ($temperatura * (9/5) + 491.67).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }


    if($opcao1=='F' && $opcao2=='C'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = (($temperatura - 32) * (5/9)).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='F' && $opcao2=='F'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = $temperatura;
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='F' && $opcao2=='K'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = (($temperatura - 32) * (5/9) + 273.15).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='F' && $opcao2=='R'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = (parseInt($temperatura) + 459.67).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }


    if($opcao1=='K' && $opcao2=='C'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = ($temperatura - 273.15).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='K' && $opcao2=='F'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = (($temperatura - 273.15) * (9/5) + 32).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='K' && $opcao2=='K'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = $temperatura;
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='K' && $opcao2=='R'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = (($temperatura - 273.15) * 1.8000 + 491.67).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }


    if($opcao1=='R' && $opcao2=='C'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = (($temperatura - 491.67) * (5/9)).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='R' && $opcao2=='F'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = ($temperatura - 459.67).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='R' && $opcao2=='K'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = ($temperatura * (5/9)).toFixed(2);
        document.getElementById("resultado").disabled = true;
    }
    else if($opcao1=='R' && $opcao2=='R'){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = $temperatura;
        document.getElementById("resultado").disabled = true;
    }
}

function limpar(){
        document.getElementById("resultado").disabled = false;
        document.getElementById("resultado").value = '';
        document.getElementById("resultado").disabled = true;
        document.getElementById("temperatura").value = '';
}