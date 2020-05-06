function openPage(pageName,element){
    var i,contents,tablinks;
    contents=document.getElementsByClassName("content");
    for(i=0;i<contents.length;i++){
        contents[i].style.display="none";
    }
    tablinks=document.getElementsByClassName("tablink");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].style.backgroundColor="black";
        tablinks[i].style.color="white";
        tablinks[i].style.borderStyle="solid";
        tablinks[i].style.borderColor="black";
        tablinks[i].style.outline="none";


    }
    document.getElementById(pageName).style.display="block";
    element.style.backgroundColor= "white";
    element.style.color="black";
    element.style.outline="none";
}