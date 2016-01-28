/**
 * Created by Dev2 on 11/9/2015.
 */
/*
function remove_wall(id)
{
document.getElementById(id).parentNode.remove();
}
*/

$(function(){
    var wall_data=
        [{"id":1,"name":"wall-1","title":"Demo-wall-1","url":"https://www.blankcanvas.io/walls/564090c7e9338c98bc00000b.json1","image":"images/image1.jpg"},
            {"id":2,"name":"wall-2","title":"Demo-wall-2","url":"https://www.blankcanvas.io/walls/564090c7e9338c98bc00000b.json2","image":"images/image2.jpg"},
            {"id":3,"name":"wall-3","title":"Demo-wall-3","url":"https://www.blankcanvas.io/walls/564090c7e9338c98bc00000b.json3","image":"images/image3.jpg"},
            {"id":4,"name":"wall-4","title":"Demo-wall-4","url":"https://www.blankcanvas.io/walls/564090c7e9338c98bc00000b.json4","image":"images/image4.jpg"},
        ];

    var container=document.getElementById('container');
    // console.log(container);

    var row=document.createElement('div');
    row.setAttribute('class','row sortable ');
    row.setAttribute('id','new_row');
    container.appendChild(row);
    for(var i=0;i<wall_data.length;i++) {


        var wall = document.createElement('div');
        wall.setAttribute('class', 'col-md-4 draggable wall ');
        wall.setAttribute('id', wall_data[i].id);
        // wall.setAttribute('onmouseover','del(id)');

        var wall_remove = document.createElement('span');
        wall_remove.setAttribute('class', 'glyphicon glyphicon-remove');
        wall_remove.setAttribute('aria-hidden', 'true');
        wall_remove.setAttribute('id', 'span-remove');
        wall_remove.setAttribute('onclick', 'parentNode.remove()');
        wall.appendChild(wall_remove);

        var caption = document.createElement('div');
        caption.setAttribute('class', 'caption');

        var title = document.createElement('div');
        title.setAttribute('class', 'title');
        title.setAttribute('id', wall_data[i].title);

        var a_title = document.createElement('a');
        a_title.setAttribute('href', wall_data[i].url);

        var img = document.createElement('img');
        img.setAttribute('src', wall_data[i].image);
        a_title.appendChild(img);

        title.appendChild(a_title);
        caption.appendChild(title);
        wall.appendChild(caption);
        row.appendChild(wall);
        document.getElementById(wall_data[i].id).innerHTML += wall_data[i].name;
        document.getElementById(wall_data[i].title).innerHTML += wall_data[i].title;
    }

    $(".draggable").resizable();
    $(".sortable").sortable();
    $(".sortable").disableSelection();



});

