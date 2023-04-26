function Alternar(Seccion){ 
    if (Seccion.style.display=="none"){
        Seccion.style.display=""
    }
    else{
        Seccion.style.display="none"
    } 
}


function validateEmail(){
    // recoge el valor de entrada
    var emailField = document.getElementById('email');
    // Definir las expresiones regulares a utilizar 
    var validEmail =  /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;// expresiones regulares 
    // Using test we can check if the text match the pattern
    if( validEmail.test(emailField.value) ){
        alert('Email validado, es correcto');
        return true;
    }else{
        alert('Email es invalido, no es correcto');
        return false;
    }
}