/**
 * Created by pk on 11/15/2015.
 */
function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    ctx.canvas.addEventListener('mousemove', function(event){

        // var mouseX = event.clientX - ctx.canvas.offsetLeft;

        //set x_co-ordinate
        localStorage.setItem('x-cordinate',event.clientX - ctx.canvas.offsetLeft);
        var mouseX=localStorage.getItem('x-cordinate');
        console.log(mouseX);



        //var mouseY = event.clientY - ctx.canvas.offsetTop;

        //set y_co-ordinate
        localStorage.setItem('y-cordinate',event.clientY-ctx.canvas.offsetTop);
        var mouseY=localStorage.getItem('y-cordinate');



        var x_status=document.getElementById('x_status');
        x_status.value=mouseX;

        var y_status=document.getElementById('y_status');
        y_status.value=mouseY;




    });

}

function saved_values(){
    document.getElementById('x_status').value=localStorage.getItem('x-cordinate');
    document.getElementById('y_status').value=localStorage.getItem('y-cordinate');
}

window.addEventListener('load', function(event) {
    initCanvas();
    saved_values();
});
