function getNumSqrs() {
var gridsize = prompt("Please enter number of squares per side");
  if (gridsize != null){
  console.log("grid size: " + gridsize);
  document.getElementById("clearGrid").style.display = "block";
  document.getElementById("createGrid").style.display = "none";
  drawGrid(gridsize);
  }
}


function drawGrid(gridsize) {
  boxwidth = ((960/gridsize)-2);
  boxheight = ((960/gridsize)-2);
  var styleSheet = document.createElement('style')
  styleSheet.innerHTML = "div.boundary {margin: 0px;border: 1px solid #ccc; \n" +
  "float: left;width: 960px; \n" +
  "height: 960px;} \n" +
  "div.grid {margin: 0px; \n" +
  "border: 1px solid #ccc; \n" +
  "float: left;width: " + boxwidth + "px;height: " + boxheight + "px;} \n" +
  "div.clear { margin: 0px;border: 1px solid #ccc; clear: left; width: 150px; height: 150;}";
  document.head.appendChild(styleSheet);

  var myDiv = document.createElement("div");
  myDiv.classList.add("boundary");
  var i;
    for (i=0; i < (gridsize*gridsize); i++) {
      var myAtt = document.createElement("div");
      myAtt.classList.add("grid");
      myDiv.appendChild(myAtt);
    }
    document.body.appendChild(myDiv);

    var allBoxesOnPage = document.querySelectorAll('.grid');

    var logBoxIndex = function(boxIndex) {
      var boxColor = document.getElementsByClassName('grid')[boxIndex].style.backgroundColor;
            if (boxColor == ''){
        document.getElementsByClassName('grid')[boxIndex].style.backgroundColor = randomColor();

      } else {
        document.getElementsByClassName('grid')[boxIndex].style.backgroundColor = LightenDarkenColor(-0.1, boxColor);
      }

    }

    allBoxesOnPage.forEach(function(box, index) {
      box.addEventListener('mouseover', function() {
        logBoxIndex(index);
      });
    });

 }
 function clearGrid() {
   var allBoxesOnPage = document.querySelectorAll('.grid');
     allBoxesOnPage.forEach(function(box, index) {
     document.getElementsByClassName('grid')[index].style.backgroundColor = '';
   });

 }

 function randomColor(){
   var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
   return randomColor;
 }

 function LightenDarkenColor(p,c) {
    var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:255*p,P=P?1+p:1-p;
    return"rgb"+(d?"a(":"(")+r(i(a[3]=="a"?a.slice(5):a.slice(4))*P+t)+","+r(i(b)*P+t)+","+r(i(c)*P+t)+(d?","+d:")");

  }
