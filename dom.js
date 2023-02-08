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

var headerTitle = document.getElementById("header-title");
var header = document.getElementById(main - header);
//header-title.style.fontweight = "bold";
var titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].style.fontweight = "bold";
titles[1].style.fontweight = "bold";
titles[0].style.color = "green";
//titles[2].style.fontweight = "bold";

var items = document.getElementsByClassName("list-group-item");
console.log(items);
items[0].style.fontweight = "bold";
items[1].style.fontweight = "bold";
items[2].style.fontweight = "bold";
items[3].style.fontweight = "bold";

var li = document.getElementsByClassName("li");
li[4] = textcontent = "Item 5";

var li = document.getElementsByTagName("li");
//li[4].textcontent = " Item 5";
li[4].style.backgroundColor = "transpernt";
li[4].style.border = "solid 2px ";
