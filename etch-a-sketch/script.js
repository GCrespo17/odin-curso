const container=document.querySelector(".container");
const getDimensions=document.getElementById("getDimensions");
let dim=32;

function getRandomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
}


function emptyGrid(height, width){
    let dimensionHeight=height.toString()+"px";
    let dimensionWidth=width.toString()+"px";
    console.log(dimensionHeight);
    for(let i=0; i<640/height; i++){
        for(let j=0; j<640/width; j++){
            container.innerHTML="";
        }
    }
}

function createGrid(height, width){
    let dimensionHeight=height.toString()+"px";
    let dimensionWidth=width.toString()+"px";
    console.log(dimensionHeight);
    for(let i=0; i<640/height; i++){
        for(let j=0; j<640/width; j++){
            let div=document.createElement("div");
            div.style.backgroundColor="purple";
            div.style.color="purple";
            // div.style.border="1px solid black";
            div.style.height=dimensionHeight;
            div.style.width=dimensionWidth;
            div.style.padding="0px";
            div.style.flexGrow=1;
            container.appendChild(div);
            div.addEventListener("mouseover", ()=>{
                div.style.backgroundColor=getRandomColor();
            });
        }
    }
    
}

createGrid(dim, dim);

getDimensions.addEventListener("click", ()=>{
    const dimensions=prompt("Indicate the dimensions of the box");
    dim=Number(dimensions);
    emptyGrid(dim, dim);
    createGrid(Number(dimensions), Number(dimensions));
});
