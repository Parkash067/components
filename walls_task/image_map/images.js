/**
 * Created by pk on 11/9/2015.
 */
function image(){
    var img=["images/1.jpg","images/3.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];

   for(var i=0;i<img.length;i++) {
       var parent_node=document.getElementById('img-div');
       var image_node=document.createElement("img");
       image_node.setAttribute("src", img[i]);
       parent_node.appendChild(image_node);
   }

}