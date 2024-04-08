

var aa=document.createElement("a")
document.body.appendChild(aa)
aa.setAttribute("href","./index.html")
aa.setAttribute("id","anchor")

var hbutton=document.createElement("button")
aa.appendChild(hbutton)
hbutton.innerText="Main Page" 

var heading=document.createElement("p")
document.body.appendChild(heading)
heading.setAttribute("id","heading1")
heading.innerText="Taste Randomly"

var md = document.createElement("div");
document.body.appendChild(md);
md.setAttribute("id", "md1");      

var div2 = document.createElement("div");
md.appendChild(div2);
div2.setAttribute("id", "d2");

var frm2 = document.createElement("form");
div2.appendChild(frm2);

var btn2 = document.createElement("button");
frm2.appendChild(btn2);
btn2.innerText = "Try Random recipe";
btn2.setAttribute("id", "btn2");

var temp = window.sessionStorage.getItem("singleitem");

obj2 = JSON.parse(temp);

if (obj2 != null && obj2 != "null") {

  var div21 = document.createElement("div");
  div2.appendChild(div21);
  div21.setAttribute("id", "d21");

  var img2 = document.createElement("img");
  div21.appendChild(img2);
  img2.setAttribute("id", "img2");
  img2.setAttribute("src", obj2.thumb_big);

  var iname1 = document.createElement("h3");
  div21.appendChild(iname1);
  iname1.innerText = obj2.name;

  var inbtn1 = document.createElement("button");
  div21.appendChild(inbtn1);
  inbtn1.setAttribute("id","innerbutton")
  inbtn1.innerText = "MoreInfo";
  
  inbtn1.addEventListener("click", (n) => {
    
    window.sessionStorage.setItem("recipe", JSON.stringify(obj2));
    window.location.assign("./moreinfo.html");
  });
}

frm2.addEventListener("submit", (m) => {
  m.preventDefault();

  var items = ["icecream", "pasta", "Noodles", "Manchuria", "Biryani","Mango","Apple","Chicken","Mushroom","Bread","Sandwich","Berger","Pizza","Milk","Tea","Dosa"];
  favitem = items[Math.floor(Math.random() * items.length)];

  const url = `https://tasty-co.p.rapidapi.com/recipes/search?query=${favitem}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "adc4b30f11mshef1d1dc644c99b6p12b942jsn2afe48774adf",
      "X-RapidAPI-Host": "tasty-co.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((val) => {
      return val.json();
    })
    .then((ob) => {
      console.log(ob);

      // for(i=0;i<ob.data.length;i++){
      var n = ob.data.length;
      var c = Math.floor(Math.random() * n);
      console.log(c);
      console.log(ob.data[c]);

      window.sessionStorage.setItem("singleitem",JSON.stringify(ob.data[c]));
      window.location.assign("./Randomitem.html");

      
    });
});
