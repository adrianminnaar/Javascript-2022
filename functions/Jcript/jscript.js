function send(){
    var input1 = document.getElementById('first_input').value,
    listNode = document.getElementById('myNewTaskList'),
    LiNode = document.createElement("Li"),
    txtNode = document.createTextNode(input1);


    LiNode.appendChild(txtNode);
    listNode.appendChild(LiNode);
    

}


