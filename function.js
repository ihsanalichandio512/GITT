// // show password code 
// function showPass(){
//     let pass = document.getElementById('pass');
//     let eye = document.getElementById('eye');

//     if(pass.type == 'password'){
//         pass.type = 'text'
//         eye.className = 'fa fa-eye-slash'
//     }else{
//         pass.type = 'password';
//         eye.className = 'fa fa-eye'
//     }
//     console.log(pass);
// }

// dark mode code
// function darkMode(){
//     let darkBtn = document.getElementById('dBtn');
//     let box = document.getElementById('box');
//     let head = document.getElementById('head');
//     let paragraph = document.getElementById('para')
//     let button = document.getElementById('btn');

//     if(darkBtn.innerText == 'Dark Mode'){
//         box.style.backgroundColor = 'black';
//         head.style.color = 'white';
//         paragraph.style.color = 'white'
//         button.style.backgroundColor = 'red'
//         button.style.color = 'white'
//         darkBtn.style.backgroundColor = 'cyan';
//         darkBtn.style.color = 'black'
//         darkBtn.innerText = 'Light Mode'
//     }else{
//         box.style.backgroundColor = 'cornflowerblue';
//         head.style.color = 'black';
//         paragraph.style.color = 'black'
//         button.style.backgroundColor = 'white'
//         button.style.color = 'red'
//         darkBtn.style.backgroundColor = 'black';
//         darkBtn.style.color = 'white'

//         darkBtn.innerText = 'Dark Mode'
//     }
// }

function darkMode(){
    let chg = document.getElementById('chg');
    let darkBtn = document.getElementById('dBtn');
    let box = document.getElementById('box');
    let heading = document.getElementById('head');
    let paragraph = document.getElementById('para');
    let button = document.getElementById('btn');

    if(darkBtn.innerText == 'Dark Mode'){
        document.body.style.backgroundColor = 'black'
        box.style.backgroundColor = 'red';
        box.style.borderRadius = '30px'
        heading.style.color = 'white';
        paragraph.style.color = 'white';
        button.style.backgroundColor = 'black';
        button.style.color = 'red'
        darkBtn.style.backgroundColor = 'red'
        darkBtn.innerText = 'Light Mode'
        chg.style.color = 'white'
    }else{
        document.body.style.backgroundColor = 'white'
        box.style.backgroundColor = 'cornflowerblue';
        box.style.borderRadius = '0px'
        heading.style.color = 'black';
        paragraph.style.color = 'black';
        button.style.backgroundColor = 'red';
        button.style.color = 'white'
        darkBtn.style.backgroundColor = 'black'
        darkBtn.innerText = 'Dark Mode'
        chg.style.color = 'black'

    }
    
}
