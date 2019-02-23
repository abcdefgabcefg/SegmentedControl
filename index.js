const buttons = document.getElementsByTagName('button');
const selectBox = document.getElementById('sel');

window.matchMedia('(max-width: 600px)').addListener(changedSelected);

for(let button of buttons){
    button.onclick = makeActive;
}

function makeActive(){
    for(let button of buttons){
        button.classList.remove('active');
    }
    this.classList.add('active');
}

function changedSelected(mq){
    if(mq.matches){
        for(let i = 0; i < buttons.length; i++){
            if(buttons[i].classList.contains('active')){
                selectBox.selectedIndex = i;
                break;
            }
        }
    }
    else{
        for(let button of buttons){
            button.classList.remove('active');
        }
        buttons[selectBox.selectedIndex].classList.add('active');         
    }
}