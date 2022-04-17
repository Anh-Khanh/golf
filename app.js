const line = document.querySelector(".line");
const li_header = document.querySelectorAll(".item_list");
const tabActive = document.querySelector(".item_list.active");
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";
li_header.forEach((item) => {
  item.onmouseover = function (e) {
    document.querySelector(".item_list.active").classList.remove("active");
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    this.classList.add("active");
  };
});
const arr = [
  {
    img: "https://media.ex-cdn.com/EXP/media.golfviet.vn/files/content/2020/11/04/quan-short-golf10-1102.jpg",
  },
  {
    img: "https://ss-images.saostar.vn/w800/pc/1647844344791/saostar-n0ytirzo0am5suv9.png",
  },
  {
    img: "https://ss-images.saostar.vn/pc/1648200326004/saostar-q2pc3v22apxhsypb.jpg",
  },
];

const heading = document.querySelector(".heading");
 let i = 0;
 var inter= setInterval(function () {
   if (i == 3) {
     i = 0;
   }
   heading.style.backgroundImage = `url(${arr[i].img})`;
   ++i;

 }, 5000);

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
var j=0;


function prevs(){
  (style = heading.currentStyle || window.getComputedStyle(heading, false)),
    (bi = style.backgroundImage.slice(4, -1).replace(/"/g, ""));
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].img == bi) {
      j = i;
      if (j == 2) {
        j = -1;
      }
      heading.style.backgroundImage = `url(${arr[j + 1].img})`;
      j++;
    }
  }  
}
var k=0;
function nexts() {
  (style = heading.currentStyle || window.getComputedStyle(heading, false)),
    (bi = style.backgroundImage.slice(4, -1).replace(/"/g, ""));
  for (var i = arr.length-1 ; i >=0; i--) {
    if (arr[i].img == bi) {
      k = i;
      if (k == 0) {
        k = arr.length;
      }
      heading.style.backgroundImage = `url(${arr[k-1].img})`;
      console.log(arr[i].img);
      k--;
    }
  }
}
next.onclick = function(){
  nexts();
}
prev.onclick = function(){
  prevs();
}


var btn_intro = document.querySelectorAll(".btn_gio");
var packages1 = document.querySelector(".packages1");
var academykey = document.querySelector(".academykey");
var educate_cont = document.querySelector(".educate_cont");
var pak = document.querySelector(".pak");
var educate = document.querySelector(".educate");
var menu = document.querySelector(".menu");
var div = document.createElement("div")
var mona = document.querySelector(".mona")
var nav_none = document.querySelector(".nav_none");
var nav = document.querySelector(".nav");
var develope = document.querySelector(".develope");
var courses = document.querySelector(".courses");
var heading_menu = document.querySelector(".heading_menu");
var header_content = document.querySelector(".header_content");



for(let j=0;j<btn_intro.length;j++){
  btn_intro[j].onclick = function () {
    packages1.style.display = "none";
    pak.style.display = "block";
    academykey.style.display = "block";
    educate_cont.style.display = "none";
    educate.style.backgroundImage = "url('')";
    heading.style.backgroundImage =
      "url('https://golfgroup.com.vn/wp-content/uploads/2021/06/gay-danh-golf-tieng-anh-1.jpg')";
    heading.style.height = "300px";
    clearInterval(inter);
    heading_menu.style.display = "block";
    header_content.style.display = "none";
    mona.style.display = "block";
    nav_none.style.display = "none";
    nav.style.backgroundColor = "#fff";
    courses.style.display = "none";
    develope.style.display = "block";
  };
}


var item_list = document.querySelectorAll(".itel");
for(let j=0;j<item_list.length;j++){
    item_list[j].onclick = function(){
      div.innerText = " / " + item_list[j].textContent;
      menu.appendChild(div);
    }
}
