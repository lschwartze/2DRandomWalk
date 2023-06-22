let w = document.getElementById('plotter');
let data = { //initial point at (0,0) with marker of size 10 that is blue
    x: [0],
    y: [0],
    type: 'line',
    mode: 'lines+markers',
    marker: {
        size: 10,
        color: ['rgb(255, 0, 0)'],
    },
};

//runs if start button is clicked
function startWalking(){
    //defines range of axis
    let layout = {
        xaxis: {range:[Math.min.apply(Math, data.x) - 2, Math.max.apply(Math, data.x) + 2]},
        yaxis: {range:[Math.min.apply(Math, data.y) - 2, Math.max.apply(Math, data.y) + 2]},
    };
    //plots using traces
    let datapoints = [data];
    Plotly.newPlot(w, datapoints, layout);

    //decide direction
    let rand = Math.random();
    if(rand <= 0.25){ //move right
        let new_point = {
            x: data.x[data.x.length-1] + 1,
            y: data.y[data.y.length-1]
        };
        data.x.push(new_point.x);
        data.y.push(new_point.y);
    }
    else if(rand > 0.25 && rand <= 0.5){ //move left
        let new_point = {
            x: data.x[data.x.length-1] - 1,
            y: data.y[data.y.length-1]
        };
        data.x.push(new_point.x);
        data.y.push(new_point.y);
    }
    else if(rand > 0.5 && rand <= 0.75){ //move up
        let new_point = {
            x: data.x[data.x.length-1],
            y: data.y[data.y.length-1] + 1
        };
        data.x.push(new_point.x);
        data.y.push(new_point.y);
    }
    else{
        let new_point = {
            x: data.x[data.x.length-1],
            y: data.y[data.y.length-1] - 1
        };
        data.x.push(new_point.x);
        data.y.push(new_point.y);
    }
    //walking point is colored red
    data.marker.color[data.marker.color.length-1] = 'rgb(65, 151, 232)';
    data.marker.color.push('rgb(255, 0, 0)')

    setTimeout(startWalking, 50);
}
