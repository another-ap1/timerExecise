/*function countdown(num){ //SET OF CODE THAT PRODUCED WHAT I WANTED BUT DIDNT HAVE THE 1000MS INTERVAL
    if(num < 0){
        console.log("NUMBER MUST BE GREATER THAN 0");
    }
    else if (num > 0){ //loops number given printing each number until 0 is reached
        for (let i = num; i > 0; --i){
            console.log(i);
        }

        console.log("DONE");
    }  
}*/
///////////////////////////////COUNTDOWN///////////////////////////////////////////////////////////////////
/*MY ATTEMPT
function subtractNum(num){
    if(num > 0){
        console.log(num);
    }
    else if (num === 0){
        console.log("DONE");
    }
}

function countdown(num){
    if(num < 0){
        console.log("NUMBER MUST BE GREATER THAN 0");
    }
    else{
        for (i = num; i >= 0; --i){
                setInterval(subtractNum(i), 1000);
        }
    }
}*/

function countDown(time){
    let timer = setInterval(function(){
        time--;
        if(time<=0){
            clearInterval(timer);
            console.log("DONE!");
        }
        else {
            console.log(time);
        }
    },1000)
}

////////////////////////////RANDOM NUMBER GENERATOR///////////////////////////////////////////////////////
//MY ATTEMPT DOESNT WAIT 1 SECOND IN BETWEEN EVERY RANDOM NUMBER
/*function createRandom(num){

    if (num < .75){
        num = Math.random().toFixed(2);
        return num;
    }
}

function randomGame(){
    
    let num = Math.random().toFixed(2);
    let counter = 1;

    while (num < 0.75){
        //console.log(num);
        //setInterval(createRandom(num), 1000);
        counter += 1;
        num = Math.random().toFixed(2);
    }
    console.log(counter);

}*/

function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
        num = Math.random();
        times++;
        if(num > .75) {
            clearInterval(timer);
            console.log("It took " + times + " try/tries.");
        }
    },1000)
}