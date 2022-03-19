array_1 = ["pen","binoculars","pig","ribbon"];
var random_number = Math.floor((Math.random()*array_1.length) + 1); 
Element_of_array = array_1[random_number];
console.log(array_1[random_number]);
sketch = array_1[random_number];
document.getElementById("sketch").innerHTML = "Sketch To be drawn :"  + sketch;
var timer_counter = 0;
var timer_check = "";
var drawn_sketch = "";
var answer_holder = "";
var score = 0;

//118

function updateCanvas(){
    background("white");
    random_number = Math.floor((Math.random()*array_1.length) + 1);
    console.log(array_1[random_number]);
    document.getElementById("sketch").innerHTML = "Sketch To be drawn :"  + sketch;
}

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}


function draw(){
check_sketch();
if(drawn_sketch == sketch){
    document.getElementById(answer_holder).value = "set";
    document.getElementById("score").innerHTML = "Score :" + score;
 if(score == sketch){
    score = score + 1
 }
}
}

function check_sketch(){
    if(timer_counter == sketch){
        timer_counter = timer_counter + 1;
        document.getElementById("timer").innerHTML = "Timer :" + timer_counter;
        }
        console.log(timer_counter);
        timer_counter = 0;
        if(answer_holder == "set" || timer_counter == 400){
         timer_check = 0;
         answer_holder = "";
         updateCanvas();
        }
}

