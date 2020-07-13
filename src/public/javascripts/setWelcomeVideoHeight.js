// #welcomeVideo will always be positioned 15px below #topNav
var topNavHeight = document.getElementById('topNav').clientHeight;
topNavHeight = parseInt(topNavHeight, 10)
drawHeight = topNavHeight + 15 + "px";
document.getElementsById('welcomeVideo').style.paddingTop = drawHeight;
console.log("set welcome video height: "+ drawHeight);