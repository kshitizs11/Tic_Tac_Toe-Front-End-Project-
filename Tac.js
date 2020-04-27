//REstart game button
var restart=document.querySelector("#b");
//grbs all the squares
var squares=document.querySelectorAll('td');

//clear all the squares
function clearboard(){
  for(var i=0;i<squares.length;i++){
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearboard);
//chek the square mark
function changeMarker(){
  if(this.textContent===''){
    this.textContent='X';
  }else if(this.textContent==='X'){
    this.textContent='O';
  }else{
    this.textContent='';
  }
}
//for loop to add event listner to all the squares

for(var i=0;i<squares.length;i++){
  squares[i].addEventListener('click',changeMarker)
}
