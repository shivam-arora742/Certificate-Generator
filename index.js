
//Regex Evaluation:
validate=()=>{
    //selector:
    let pname=document.getElementById("pname");
    
    //regex expression:() [] {} ^ $
    let regex=/^([a-zA-Z]{2,20})\s([a-zA-Z]{2,20})$/;

    if(regex.test(pname.value)){
        // alert("valid entry!!");
        let invalid=document.getElementById('invalid');
        invalid.style.visibility="hidden";
        pname.style.border="none";
        pname.style.borderBottom="8px solid black";
         
        //    name of download file
        let dwn=document.getElementById("download");
        dwn.download="Certificate";
    }

    else{
        let invalid=document.getElementById('invalid');
        invalid.style.visibility="visible";
        invalid.style.fontSize="20px";
        invalid.style.color="black";
        invalid.style.textDecoration="underline";
        pname.style.border="5px red solid";
        // if invalid entry:prevent download:
        let dwn=document.getElementById("download");
        dwn.removeAttribute("download");

    }
}

// menu functionality:
const hamburger=document.getElementById('hamburger');
const menuRec=document.getElementById('navRec');
const menuCom=document.getElementById('navCom');
const menuApp=document.getElementById('navApp');

// for recognition page
hamburger.addEventListener('click',()=>{
    menuRec.classList.toggle('menu');
});

// for completion page
hamburger.addEventListener('click',()=>{
    menuCom.classList.toggle('menu');
});

// for appreciation page
hamburger.addEventListener('click',()=>{
    menuApp.classList.toggle('menu');
});


