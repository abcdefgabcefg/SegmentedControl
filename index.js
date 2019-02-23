const buttons = document.getElementsByTagName('button');
const options = document.getElementsByClassName('option');
let current = -1;

document.addEventListener('click', function(even){
    if(document.getElementById('select-box-wrapper').contains(even.target) 
    && !document.getElementById('select-box-options').contains(even.target)){
        document.getElementById('select-box-options').style.display = 'block';
    }
    else{
        document.getElementById('select-box-options').style.display = 'none';
    }
})

window.matchMedia('(max-width:600px)').addListener(function(query){
    if(query.matches){
        if(current !== -1){
            for(let option of options){
                option.classList.remove('active');
            }
            options[current].classList.add('active');
        }
    }
    else{
        if(current !== -1){
            for(let button of buttons){
                button.classList.remove('active');
            }
            buttons[current].classList.add('active');
        }
    }
})

function makeBtnSelection(index){
    for(let button of buttons){
        button.classList.remove('active');
    }
    buttons[index].classList.add('active');
    document.getElementById('select-box-text').innerHTML = buttons[index].innerHTML;
    current = index;
}

function makeOptSelection(index){
    for(let option of options){
        option.classList.remove('active');
    }
    options[index].classList.add('active');
    document.getElementById('select-box-text').innerHTML = options[index].innerHTML;
    document.getElementById('select-box-options').style.display = 'none';
    current = index;
}
