var board=document.createElement('container');
board.setAttribute('display','flex');
board.setAttribute('flexWrap','wrap');
board.setAttribute('width','800px');
board.setAttribute('height','800px');
var blacktile=document.createClass('black-tile');
var whitetile=document.createClass('white-tile');
blacktile.setAttribute('12.5%');
whitetile.setAttribute('12.5%');
for(var i=0;i<8;i++){
    var row = document.createElement('chessrow');
}