var arrItems=[];
var i=-1;
$(document).ready(function () {
    document.getElementById("defaultOpen").click();
    $.getJSON("data-with-image.json", function (data) {

         // The array to store JSON items.
        $.each(data, function (index, value) {
            arrItems.push(value);       // Push values in the array.
        });
        console.log(arrItems);
        console.log(arrItems.length);
        for(var i=0;i<arrItems.length;i++){
            setImageGallery(arrItems[i]);
            setImage(arrItems[i]);
        }
    })
    
});
function openPage(pageName,elmnt){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
}
function setImageGallery(val){
    document.getElementById("gallerydata").innerHTML+=`
    <div class="imagebox" style="max-width: 416;">
    <img src="${val.Image}"><br>
    `
}
function setImage(val){
    i+=1;
    document.getElementById("data").innerHTML+=`
    <div id="${i}" class="imagebox" style="max-width: 416;">
    <img src="${val.Image}"><br><p id="PicInfo${i}">"${val.Information}"</p><br>
    <button class="edit" onclick="editImage(${i})">Edit</button> <button class="delete" style="align:end;" onclick="removeImage(${i})">Remove</button>
    `
}
function openForm(act){
    let elem=document.getElementById("data");
    elem.style.display='none';
    let formelem=document.getElementById("formdiv");
    
    formelem.style.display='block';
    if(act==="add"){
        document.getElementById("addedit").innerHTML="Add New Image Details";
        document.getElementById("reset").click();
    }
    else{
    document.getElementById("addedit").innerHTML="Edit Image Details";
    }
    formelem.addEventListener('submit',saveData);
}
function saveData(event){
    event.preventDefault();
    if(validate==false){
        return ;
    }
    let imageurl=document.getElementById("Image-URL").value;
    let name=document.getElementById("Name").value;
    let info=document.getElementById("Information").value;
    let dateObj=document.getElementById("Date").value;
    let id=document.getElementById("index").value;
    console.log(localStorage);
    let obj={
        "Image": imageurl,
        "Name":name,
        "Information":info,
        "UploadedDate":dateObj
    }
    console.log(id);
    if(id=="-1"){
    arrItems.push(obj);
    setImage(obj);
    }
    else{
        let idval="PicInfo"+id;
        arrItems[id]=obj;
        console.log(arrItems[id].Image);
        document.getElementById(id).children[0].src=arrItems[id].Image;
        document.getElementById(idval).innerHTML=arrItems[id].Information;
    }
    console.log(arrItems);
    let formelem=document.getElementById("formdiv");
    formelem.style.display='none';
    let elem=document.getElementById("data");
    elem.style.display="grid";
}
function removeImage(i){
    console.log(i);
    let photo=document.getElementById(i);
    photo.parentElement.removeChild(photo);

}
function editImage(i){
    document.getElementById("index").value=i;
    document.getElementById("Image-URL").value=arrItems[i].Image;
    document.getElementById("Name").value=arrItems[i].Name;
    document.getElementById("Information").value=arrItems[i].Information;
    document.getElementById("Date").value=arrItems[i].UploadedDate;
    
    openForm("edit");

}

function Validate() {
    var mail = document.forms["myform"]["email"].value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mail.match(mailformat)) {
        {
            alert("Please Enter a valid email address!");
            document.myform.email.focus();
            return false;
        }
    }
    let name = document.forms["myform"]["fname"].value;
    if (name == "") {
      alert("Name must be filled out");
      document.myform.fname.focus();
      return false;
    }
    
    if (!isNaN(name)) {
        alert("Enter a valid Name");
        document.myform.fname.focus();
        return false;
      }
    let mobile=document.forms["myform"]["MobileNumber"].value;
    if(isNaN(mobile) || mobile.length!==10 ){
        alert("Not a Valid number");
        document.myform.MobileNumber.focus();
        return false;
    }
}
var validate;
function validateImage(){
    currentDate=new Date(document.getElementById("Date").value);
    if(currentDate>(new Date).getTime())
    {
    alert("enter valid date");
    document.getElementById("Date").value="";
    validate=false;
    }
    else{
        validate=true;
    }
}