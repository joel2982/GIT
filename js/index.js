var content = document.querySelector('.name');

var name = 'Joel John';
var i=1;
var idx=1;


function setval(value){
    content.textContent = value;
}

function getstring(value,idx){
    return value.substring(0,idx);
}


setInterval( function () {
    var substring = getstring(name,i);
    setval(substring);
    
    if (i === name.length ){
        idx =-1;
    }
    
    if(i === 0){
        idx=1;
    }

    i=i+idx;

},150);
