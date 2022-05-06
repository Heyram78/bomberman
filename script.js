function addGrid(){
    const appElement = document.getElementById("app");
    for(let i=0;i<9;i++){
        const row = document.createElement("div"); 
       for(let j=0;j<9;j++){
           const col = document.createElement("div");
           col.style.display='inline-block';
           col.style.width='60px';
           col.style.height='60px';
           col.style.border='1px solid black';
           col.style.textAlign='center';
           col.style.verticalAlign='middle'
           row.appendChild(col);
       }
       appElement.appendChild(row);
    }
}
addGrid();

    










