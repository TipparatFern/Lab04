/*create function and class*/
function onClick(event){
    const row1 =  document.querySelector('.row1'); 
    const row1change = document.querySelector('.row1change');
    const row2 = document.querySelector('.row2');
    const row2change = document.querySelector('.row2change');

    isVisible = !isVisible
    if(isVisible){
        /*add class hidden to non-display row1 and row2*/
        /*remove class hidden to display row1change and row2change instead*/
        row1.classList.add('hidden');
        row1change.classList.remove('hidden');
        row2.classList.add('hidden');
        row2change.classList.remove('hidden');
    }
        else{ 
            row1.classList.remove('hidden');
            row1change.classList.add('hidden');
            row2.classList.remove('hidden');
            row2change.classList.add('hidden');
        }
}


let isVisible = false;
/*create element*/
const onClick1 = document.querySelector('.row1');
onClick1.addEventListener('click', onClick);
const onClick1new = document.querySelector('.row1change');
onClick1new.addEventListener('click', onClick);
const onClick2 = document.querySelector('.row2');
onClick2.addEventListener('click', onClick);
const onClick2new = document.querySelector('.row2change');
onClick2new.addEventListener('click', onClick);