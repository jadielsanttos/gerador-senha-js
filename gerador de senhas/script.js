window.alert('Bem-vindo(a)!');
const pass = document.querySelector('#pass'); 
const newPass = document.querySelector('#newPass');

function generatePass() {
    if(pass.value < 6) {
        alert('A senha deve ter pelo menos 6 dígitos!');
        return;
    }if(pass.value > 12 ) {
        alert('A senha só pode ter no máximo 12 dígitos!');
        return;   
    }else {
        let charset = 'abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
        let password = '';
        for(var i = 0, n = charset.length; i < pass.value; ++i) {
            password += charset.charAt( Math.floor( Math.random() * n ));
        }

        document.getElementById('newPass').value = password;
    }
    
}

function copyPass() {
    let copyPass = document.getElementById('newPass');
    copyPass.select();
    document.execCommand('copy');
    document.querySelector('.msgAviso').style = 'display: block';
}

function clearPass() {
    document.getElementById('newPass').value = '';
    document.querySelector('.msgAviso').style = 'display: none';
}

