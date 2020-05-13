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
    let mobile=document.forms["myform"]["MobileNumber"].value;
    if(isNaN(mobile) || mobile.length!==10 ){
        alert("Not a Valid number");
        document.myform.MobileNumber.focus();
        return false;
    }
}