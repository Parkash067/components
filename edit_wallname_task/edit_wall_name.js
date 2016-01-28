/**
 * Created by Dev2 on 11/20/2015.
 */
function wall_name_att(){
    var div=document.getElementById('mywall');
    div.setAttribute('ondblclick','edit_name()')
}
function edit_name(){

    var _text=document.getElementById('mywall').innerText;
    var div=document.getElementById('mywall');
    div.innerHTML="<input type='text' id='inVal' >";
    document.getElementById('inVal').setAttribute('value',_text);
    document.getElementById('inVal').setAttribute('class','wall_name');
    document.getElementById('inVal').addEventListener('change',function(event){
        document.getElementById('mywall').innerText=document.getElementById('inVal').value
    })
}
window.load=wall_name_att();