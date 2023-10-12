
// * `display = "flex"`
// * `flexWrap = "wrap"`
// * `width = "800px"`
// * `height = "800px"`


// * `width = "12.5%"`
// * `height = "12.5%"`
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
function makeSquare(container,color){
    const square = document.createElement('div')
    square.style.width = "12.5%"
    square.style.height = "12.5%"
    square.style.backgroundColor = color
    container.appendChild(square)
}
function randomcolor(){
    return Math.floor(Math.random()*16777215).toString(16)
}
function colorGradient(initialcolor,finalcolor,index){
    for(let i=0;i<3;i++){
        if(initialcolor[i]){
            initialcolor[i]*=1-(index/64)
        }
        if(finalcolor[i]){
            finalcolor[i]*=index/64
        }
        initialcolor[i]+=finalcolor[i]
    }
    let currentcolor = `rgb(${initialcolor[0]},${initialcolor[1]},${initialcolor[2]})`
    return currentcolor
}
function changeColor(){
    var squares = flashingboard.getElementsByTagName('div')
    for(let i=0;i<64;i++)
    {
        squares[i].style.backgroundColor = "#"+randomcolor()
    }
}




//tests
//checkerboard
let body = document.getElementsByTagName("body")[0]
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

//random color board
const colorboard = makeContainer() 
for(let i=0;i<64;i++){
    makeSquare(colorboard,"#"+randomcolor())
}

//gradient color board
const gradientboard = makeContainer() 
for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
        if(i%2===0&&j%2===0){
            let k = (i*8)+j
            let gradientColor = colorGradient([255,255,0],[255,0,0],k)
            makeSquare(gradientboard,gradientColor)
            //red
        }
        else if(i%2===1&&j%2===1){
            let k = (i*8)+j
            let gradientColor = colorGradient([255,255,0],[255,0,0],k)
            makeSquare(gradientboard,gradientColor)
            //red
        }
        else{
            let k = (i*8)+j
            let gradientColor = colorGradient([0,255,0],[0,0,255],k)
            makeSquare(gradientboard,gradientColor)
            //black
        }
    }
}

//flashing color board
const flashingboard = makeContainer()

let audiofile = document.createElement('audio')
audiofile.setAttribute('id','audio')
audiofile.setAttribute('src','C:\Users\yeons\Downloads\bell-ringing-05.wav')

for(let i=0;i<64;i++){
    makeSquare(flashingboard,"#",randomcolor)
}
window.setInterval(changeColor,100)
window.setInterval(audiofile.play,100)