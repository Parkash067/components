/**
 * Created by Dev2 on 11/17/2015.
 */

function inspectorVisible(){
    document.getElementById('mydiv').style.visibility="visible";

}


function inspectorInvisible(){
    document.getElementById('mydiv').style.visibility="hidden";

}
$(function() {
    $( ".draggable" ).draggable();
});

var graph = new joint.dia.Graph;

var paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 600,
    height: 200,
    model: graph,
    gridSize: 1
});

var rect = new joint.shapes.basic.Rect({
    position: { x: 100, y: 30 },
    size: { width: 100, height: 30 },
    attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
});

var rect2 = rect.clone();
rect2.translate(300);

var link = new joint.dia.Link({
    source: { id: rect.id },
    target: { id: rect2.id }
});
function att(){
    var color=document.getElementById('color').value;

    var  _shape=document.getElementById('shapes').selectedIndex;
    _shape= document.getElementsByTagName("option")[_shape].value;


    var   trajectory=document.getElementById('trajectory').selectedIndex;
    trajectory=document.getElementsByClassName("traject")[trajectory].value;

    link.set('smooth',false);
    link.set(trajectory,true);

    console.log(trajectory);
    link.attr({
        '.connection': { stroke:color, 'stroke-width': 3, 'stroke-dasharray':_shape },
        '.marker-source': { stroke: '#3498DB' },
        '.marker-target': { stroke: '#3498DB' }
    });

}

window.onload=att();
graph.addCells([rect, rect2, link]);