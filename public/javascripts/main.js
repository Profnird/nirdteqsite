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
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/613b73c7d326717cb680cb66/1ff83ohrm';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
