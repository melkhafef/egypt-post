displayMap=document.querySelector("#displayMap");
section=document.querySelector(".modal-body");
 servicesAu = document.querySelector("#servicesAu");
aboutAu = document.querySelector("#aboutAu");
contactAu = document.querySelector("#contactAu");
imagesAu = document.querySelector("#imagesAu");
// morasalatAu = document.querySelector("#morasalatAu");
// vedios = document.querySelector("#vedios");
images = document.querySelector("#images1");
contact = document.querySelector("#contact");
about = document.querySelector("#about");
services = document.querySelector("#services");
cards=document.querySelectorAll(".card");
displayMap.onclick=function(e) {
    latitude = 30.086540;
    longitude = 31.248510;
    let map = new google.maps.Map(section, {
        center: {
            lat: latitude,
            lng: longitude
        },
        zoom: 17
    })
    let marker = new google.maps.Marker({
        map: map,
        position: {
            lat: latitude,
            lng: longitude
        }
    })
}
setTimeout(function(){
    servicesAu.play();
},4500)
setTimeout(function(){
    window.scrollTo(0, 820);
    aboutAu.play();

},74000)
setTimeout(function(){
    window.scrollTo(0, 1400);
    contactAu.play();
},164500)
setTimeout(function(){
    window.scrollTo(0, 2100);
    imagesAu.play();
},221000)

services.onclick=function(){
window.scrollTo(0,0);
}
// vedios.onclick=function(){
// window.scrollTo(0,0);
// }
images.onclick = function () {
    window.scrollTo(0, 2100);
}
contact.onclick = function () {
    window.scrollTo(0, 1400);
}
about.onclick = function () {
    window.scrollTo(0,820);
}
