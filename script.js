const body=document.body;

body.addEventListener('click',ChangeBackgroundColor)


function ChangeBackgroundColor(){
    const changedColor=getBackgroundColor();
    body.style.backgroundColor=changedColor;
}

function getBackgroundColor(){
    let letters="0123456789abcdef";
    let color="#"
    for (let i=0; i<6;i++)
{
    color +=letters[Math.floor(Math.random()*16)]
}
return color;

}