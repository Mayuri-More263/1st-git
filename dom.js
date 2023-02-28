// //console.dir(document);
// // examine the document objects //
// console.log(document.domaim);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
//console.log(document.images);

//get element by id
//console.log(document.getElementById("header-title"));
//var headerTitle = document.getElementById("header-title");
//var header = document.getElementById(main - header);
//console.log(headerTitle);
//headerTitle.textContent = "Hello";
//headerTitle.innerText = "Goodbye";
//header.style.borderBottom = "solod 3px #000";

//get element by class name
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
//items[1].style.fontweight = "bold";
//var header =  document.getElementsById('Add Items');
//console.log();
//header.style.fontweight = "bold";

//GET ELEMNT BY TAGNAMEXCconsole.log(li[1]);

//QUERY SELECTOR  select 1st by default
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var title = document.getElementById("title");
// console.log("title");
// Title.style.fontWeight = "bold";

//QUERY SELECTORALL
//var titles = document.getElementsByClassName(".title");
//console.log(titles);
//titles[0].textContent = "Hello";
//titles[0].style.fontweight = "bold";
//title[0].style.color = "green";

// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById(main - header);
// //header-title.style.fontweight = "bold";
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].style.fontweight = "bold";
// titles[1].style.fontweight = "bold";
// titles[0].style.color = "green";
// //titles[2].style.fontweight = "bold";

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[0].style.fontweight = "bold";
// items[1].style.fontweight = "bold";
// items[2].style.fontweight = "bold";
// items[3].style.fontweight = "bold";

// var li = document.getElementsByClassName("li");
// li[4] = textcontent = "Item 5";

// var li = document.getElementsByTagName("li");
// //li[4].textcontent = " Item 5";
// li[4].style.backgroundColor = "transpernt";
// li[4].style.border = "solid 2px ";

// var li = document.querySelectorAll("li");
// li[1].style.backgroundColor = "green";
// li[2].style.textcontent = "invisible";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
// }

//TRAVERSING THE DOM //
var itemlist = document.querySelector("#items");
// parentNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentNode.parentNode.parentNode);

// //PARENTELEMENT
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentElement.parentElement.parentElement);

// //CHILDNODES we getting node list basically an array its  giving different node list
// // text node represented line break
// console.log(itemlist.childNodes);
// console.log(itemlist.children); //only shows children elements
// console.log(itemlist.children[1]); // to acess specific child
// itemlist.children[1].style.backgroundColor = "pink";

// // //FIRSTCHILD
// console.log(itemlist.firstChild);
// // //FIRSTELEMENTCHILD
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = "HELLO";

//LASTCHILD//
// console.log(itemlist.lastChild);
// //LASTELEMENTCHILD
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = "HELLO";

//NEXTSIBLING//
// console.log(itemlist.nextSibling);
// //nextelementsibling
// console.log(itemlist.nextElementSibling);

//previousesibling
// console.log(itemlist.previousSibling);
// //PREVIOUDEELEMENTSIBLING
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = "green";

//* CREATEELEMENT //
// create a div
var newDiv = document.createElement("div");
//add class
newDiv.className = "hello";
// add id
newDiv.id = "hello 1";
//add attr
newDiv.setAttribute("titel", "hello Div");
// create text node
var newDivText = document.createTextNode("HELLO WORLD");
//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector("header.container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1);
