// handle responsive nav
let nav = () =>{
    var mn_btn = document.getElementById('menu');
    var logo = document.getElementById('lg');
    if(mn_btn.className === "res-nav" && logo.className === "logo"){
        mn_btn.className += " res";
        logo.className += " hide-lg";
        // console.log(mn_btn);
    }else{
        mn_btn.className = "res-nav";
        logo.className = "logo";
    }
}
