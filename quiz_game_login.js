username1=localStorage.getItem("name1");
username2=localStorage.getItem("name2");

userscore1=0;
userscore2=0;

document.getElementById("userlabel1").innerHTML=username1+": ";
document.getElementById("userlabel2").innerHTML=username2+": ";

document.getElementById("userscore1").innerHTML=userscore1;
document.getElementById("userscore2").innerHTML=userscore2;