class GradientCircle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.t = 0;
        this.div_array = GradientCircle.create_div_array(this.width, this.height);
    }

    static init_matrix(height,width)
    {
        let arr = new Array(width);
        for (let i = 0; i < width; i++){
            arr[i] = new Array (height);
        }
        return arr;
    }

    static create_div_array(height, width)
    {
        let arr = GradientCircle.init_matrix(height, width);
        for(let i = 0; i<height; i++){
            for(let j=0; j<width; j++){
                let div = document.createElement('div');
                div.style.width = '5px';
                div.style.height = '5px';
                div.style.background = 'white';
                div.style.position = 'absolute';
                div.style.left = 350+j*5+'px';
                div.style.top = i*5+'px';
                arr[i][j] = div;
                document.body.appendChild(div);
            }
        }
        return arr;
    }

    static calc_distance(x1,y1,x2,y2)
    {
        return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2))
    }

    static calc_point_position(t, center_x, center_y, radius)
    {
        let x = Math.cos(t*0.01)*radius+center_x;
        let y = Math.sin(t*0.01)*radius+center_y;
        return [x,y];
    }

    static calc_color(distance, gradient, circle_radius=20)
    {
        let temp = 1/distance*circle_radius;
        let color_index = Math.round(temp);
        if(color_index<0) {color_index=0;}
        if(color_index>gradient.length-1){color_index = gradient.length-1;}
        return gradient[color_index] 

    }

    draw_gradient(x, y) 
    {
        const gradient = ['#000000','#505050','#808080','#BABABA','#FFFFFF']
        for(let i = 0; i<this.height; i++){
            for(let j=0; j<this.width; j++){
                let color = GradientCircle.calc_color(GradientCircle.calc_distance(x,y, i, j), gradient)
                this.div_array[i][j].style.background = color;
            }
        }
    }

    next_frame()
    {
        let min_from_h_w = Math.min.apply(Math, [this.height, this.width]);
        const [x,y] = GradientCircle.calc_point_position(this.t, this.width/2, this.height/2, min_from_h_w/2);
        this.draw_gradient(x,y);
        this.t = this.t+1;


        
    }
}

function main()
{
    let width = 100;
    let height = 100;
    const gradient_circle = new GradientCircle(height,width);
    function wrapper()
    {
        gradient_circle.next_frame();
    }
    
    let play = setInterval(wrapper, 1);
}

main();
