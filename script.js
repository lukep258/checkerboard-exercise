
// * `display = "flex"`
// * `flexWrap = "wrap"`
// * `width = "800px"`
// * `height = "800px"`


// * `width = "12.5%"`
// * `height = "12.5%"`


let body = document.getElementsByTagName("body")[0]

function makeSquare(container,color){
    const square = document.createElement('div')
    square.style.width = "12.5%"
    square.style.height = "12.5%"
    square.style.backgroundColor = color
    container.appendChild(square)
}

function makeContainer(){
    const container = document.createElement('div')
    container.style.display = "flex"
    container.style.flexWrap = "wrap"
    container.style.width = "800px"
    container.style.height = "800px"
    container.style.backgroundColor = "black"
    container.style.margin = "auto"
    body.appendChild(container)
    return(container);
}

const chessboard = makeContainer()
for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
        if(i%2===0&&j%2===0){
            makeSquare(chessboard,"red")
            //red
        }
        else if(i%2===1&&j%2===1){
            makeSquare(chessboard,"red")
            //red
        }
        else{
            makeSquare(chessboard,"black")
            //black
        }
    }
}