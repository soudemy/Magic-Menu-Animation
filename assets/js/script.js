var buttons = document.querySelectorAll('.menu_item');
var activeButton = document.querySelector('.menu_item.active');

buttons.forEach(item => {
    var text = item.querySelector('.menu_text');
    setLineWidth(text, item);

    item.addEventListener('click', function(){
        if (this.classList.contains('active')) return;
        this.classList.add('active');
        if (activeButton){
            activeButton.classList.remove('active');
            activeButton.querySelector('.menu_text').classList.remove('active');
        }
        handleTransition(this ,text);
        activeButton = this;
    })
})





function handleTransition(item ,text){
    item.addEventListener('transitionend', (e) => {
        if(e.propertyName != 'flex-grow' || !item.classList.contains('active'))
        return;
        text.classList.add('active');
    })
}

function  setLineWidth(text, item) {
    var lineWidth = text.offsetWidth + 'px';
    item.style.setProperty('--lineWidth',lineWidth);
}

