// handle responsive nav
let nav = () =>{
    var mn_btn = document.getElementById('menu');
    if(mn_btn.className === "res-nav"){
        mn_btn.className += " res";
        console.log(mn_btn);
    }else{
        mn_btn.className = "res-nav";
    }
}