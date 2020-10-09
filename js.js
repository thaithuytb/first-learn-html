// this array will use to add ul in HTMl
var list = [
];

// after DOM loaded will use function
document.addEventListener('DOMContentLoaded', function(){
    
    // access text input html 
    var text = document.getElementById('take-text');
  
    text.onchange = function(e) {
        
        // check if value input change will use function onclick
        if (e.target.value != '') {
            var btn = document.getElementById('btn');
            btn.onclick = function() {

                // add value in input to list array
                list.push(e.target.value);

                // function render defined below
                render();

                // after add list-iteam, auto clear value of input
                e.target.value = '';
            }
        }
    }
}, false);

//display to browser (display all element of array list)
function render() {
    //creat newList array which have li tag to add in ul in html
    var newList = list.map(function(list){
        return '<li>'+ list +'</li>';
    })
    // remove ',' in array newList
    var newList =  newList.join('');

    // display text on browser
    var listIteam = document.getElementById('list-iteam');
    listIteam.innerHTML = newList;
}

