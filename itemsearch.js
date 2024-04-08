

var aa=document.createElement("a")
document.body.appendChild(aa)
aa.setAttribute("href","./Mainpage.html")
aa.setAttribute("id","anchor")

var hbutton=document.createElement("button")
aa.appendChild(hbutton)
hbutton.innerText="Main Page"      

var md = document.createElement("div");
document.body.appendChild(md);
md.setAttribute("id", "md1"); 

var heading=document.createElement("p")
md.appendChild(heading)
heading.setAttribute("id","heading1")
heading.innerText="Search Your Favourite Dish"

var div1 = document.createElement("div");
md.appendChild(div1);
div1.setAttribute("id", "d1");

var div12 = document.createElement("div");
div1.appendChild(div12);
div12.setAttribute("id", "d12");

var frm1 = document.createElement("form");
div12.appendChild(frm1);

var inp1 = document.createElement("input");
frm1.appendChild(inp1);
inp1.setAttribute("placeholder", "Enter Recipename");
inp1.setAttribute("type", "search");

var btn1 = document.createElement("button");
frm1.appendChild(btn1);
btn1.setAttribute("id", "btn1");
btn1.innerText = "search";

var temp = window.sessionStorage.getItem("food");
console.log("temp=",temp)

if(temp!="null"){
  // window.location.assign("./itemsearch.html")

obj2=JSON.parse(temp)

console.log("obj2=",obj2)

// console.log(typeof obj2.status)
if(obj2!=null && obj2!='null'){

  for (let i = 0; i < obj2.data.length; i++) {
    var div13 = document.createElement("div");
    div1.appendChild(div13);
    div13.setAttribute("id", "d13");

    var img1 = document.createElement("img");
    div13.appendChild(img1);
    img1.setAttribute("id", "img1");
    img1.setAttribute("src", obj2.data[i].thumb_big);

    var iname = document.createElement("h3");
    div13.appendChild(iname);
    iname.innerText = obj2.data[i].name;

    var infrm = document.createElement("form");
    div13.appendChild(infrm);

    var inbtn = document.createElement("button");
    infrm.appendChild(inbtn);
    inbtn.setAttribute("id","infobutton")
    inbtn.innerText = "MoreInfo";

    inbtn.addEventListener("click", (m) => {
      m.preventDefault();
      window.sessionStorage.setItem("recipe", JSON.stringify(obj2.data[i]));
      window.location.assign("./moreinfo.html");
    });
  }
}

}


// cards(temp)

frm1.addEventListener("submit", (ee) => {
  ee.preventDefault()
  
  var Recipename = document.getElementsByTagName("input")[0].value;

  if(Recipename==""){
    window.sessionStorage.setItem("food","null")
    window.location.assign("./itemsearch.html")
  }

  const url = `https://tasty-co.p.rapidapi.com/recipes/search?query=${Recipename}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "adc4b30f11mshef1d1dc644c99b6p12b942jsn2afe48774adf",
      "X-RapidAPI-Host": "tasty-co.p.rapidapi.com",
    }
  };
  
  fetch(url, options)
    .then((val) => {
      return val.json();
    })
    .then((obj) => {
      console.log("iam from obj", obj);
      window.sessionStorage.setItem("food",JSON.stringify(obj));
      window.location.assign('./itemsearch.html')
    });
});
