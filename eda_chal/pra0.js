let a = document.getElementById("bx1");
let b = document.getElementById("bx2")
let c = document.getElementById("bx3");
let d = document.getElementById("btn1");
let e = document.getElementById("btn2");

bx2.style.display = 'none';
bx3.style.display = 'none';

val = 0;

function nextbox() {
    val++;
    if(val >= 3 ){
        val = 0;
    }
    if (val == 0) {
        bx1.style.display = 'block';
        bx2.style.display = 'none';
        bx3.style.display = 'none';
        console.log(val);
    }
    else if(val == 1){
        bx1.style.display = 'none';
        bx2.style.display = 'block';
        bx3.style.display = 'none';
        console.log(val);
    }
    else if(val == 2){
        bx1.style.display = 'none';
        bx2.style.display = 'none';
        bx3.style.display = 'block';
        console.log(val);
    }
    if(val > 2){
        val == 0;
    }
}

function prevbox(){
    
    if(val == 0){
        val==2;
        console.log(val);
    }
    val--;
    if(val == 0){
        bx1.style.display = 'block';
        bx2.style.display = 'none';
        bx3.style.display = 'none';
        console.log(val);
    }
    if(val == 1){
        bx1.style.display = 'none';
        bx2.style.display = 'block';
        bx3.style.display = 'none';
        console.log(val);
    }
    if(val == 2){
        bx1.style.display = 'none';
        bx2.style.display = 'none';
        bx3.style.display = 'block';
        console.log(val);
    }

}