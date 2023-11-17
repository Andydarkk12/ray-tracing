
let width = 100;
let height = 100;
let aspect = width/height;
let gradient = ['#000000','#505050','#808080','#BABABA','#FFFFFF']

let arr = new Array(width)
for (let i = 0; i < width;i++){
    arr[i] = new Array (height)
}



console.log(arr);

    for(let i = 0; i<height;i++){
        for(let j=0;j<width;j++){
            
            div = document.createElement('div');
            arr[i][j] = div;

            div.style.width = '5px';
            div.style.height = '5px';
            div.style.background = 'white';
            //div.style.border = '1px solid black';
            //div.style.display = 'inline-block';
            div.style.position = 'absolute';
            div.style.left = 350+j*5+'px';
            div.style.top = i*5+'px';

            document.body.appendChild(div);

            
        }
    }
let t=0;

function circle(){
for(let i = 0; i<height;i++){
    for(let j=0;j<width;j++){


        let x = j/width*2-1;
        x = x*aspect;
        x = x + Math.cos(t*0.000001);
       

        let y = i/height*2-1;
        y = y + Math.sin(t*0.000001);

        let dist = Math.sqrt(x*x+y*y);
        let color = 1/dist;
        color = Math.round(color);
        if(color<0){color=0;}
        if(color>gradient.length-1){color = gradient.length-1;}
        

        // if(x*x+y*y<0.7){
        //     arr[i][j].style.background = gradient[color];
        // }
        // else{
        //     arr[i][j].style.background = 'white';
        // }
        t = t+1;
        arr[i][j].style.background = gradient[color];
        
        }
    }
}


//circle(arr);
let play = setInterval(circle, 1);