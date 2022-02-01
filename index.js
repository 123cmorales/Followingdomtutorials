//var titles = document.getElementsByClassName("title");

/* console.log(Array.isArray(titles)); */
/* console.log(Array.isArray(Array.from(titles))); */

//Array.from(titles).forEach(function(items){
//console.log(item):
//})

// start 4

//const wrap = document.querySelector("#wrapper");
//const wmf = document.querySelector("#book-list li:nth-child(2) .name");
//console.log(wmf);

//var books = documents.querySelector("#books-list li .name");
//console.log(books);

//var wrap = document.querySelector("wrapper");
//console.log(wrap);
//var wmf = document.querySelector("#book-list li:nth-child(2).name");
//console.log(wmf);

//var books = document.querySelector("#book-list li .name");

//var books = document.querySelectorAll("#book-list li .name");
//books.forEach(function (item) {
//  item.textContent += " (Book Title)";
//});
//var bookList = document.querySelector("#book-list");
//bookList.innerHTML = "<h2>Books and more books...</h2>";
//bookList.innerHTML += "<p>This is how you add HTML<p>";

//const banner = document.querySelector("#page-banner");

//console.log('#page-banner node type is:' banner.nodeType);
//console.log('#page-banner node name is:' banner.nodeName);
//console.log('#page-banner has child nodes:' banner.hasCildNodes();

//var clonedBanner = banner.cloneNodes(true);
//console.log(clonedBanner);
//const bookList = document.querySelectorAll("#book-list");
//console.log("the parent node is:".bookList.parentNode);
//console.log("the parent element is:".bookList.parentElement.parentElement);

//console.log(bookList.children);
//const bookList = document.querySelector("#book-list");

//console.log("#book-list next sibling:", bookList.nextSibling);
//console.log("#book-list next element sibling:", bookList.nextElementSibling);
//console.log("#book-list previous sibling:", bookList.previousSibling);
//console.log(
//  "#book-list previous element sibling:",
// bookList.previousElementSibling
//);

//bookList.previousElementSibling.querySelector("p").innerHTML +=
// "<br />Too cool for everyone else!";

// lessson 9
/*const listItems = document.querySelectorAll("#book-list ul li");

Array.from(listItems).forEach(function (item) {
  item.addEventListener("click", (e) => {
    const li = e.target.parentElement;
    console.log("child element to remove:", li);
    console.log("parent element to remove child from:", li.parentElement);
    li.parentNode.removeChild(li);
  });
});

// prevent default behaviour

const link = document.querySelector("#page-banner a");

link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Navigation to", e.target.textContent, "was prevented");
});*/
/*(var btns = document.querySelectorAll("#book-list .delete");

Array.from(btns).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const li = e.target.parentElement;
    li.partentNode.removeChild(li);
  });
});*/
const list = document.querySelector("#book-list ul");

// delete books
list.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// add book-list
const addForm = document.forms["add-book"];

addForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;
  //  console.log(value);
  //create elements
  var li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add content
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  //add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  // append to doc
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // clear text box
  addForm.querySelector('input[type="text"]').value = "Steve Harvey";
});
// hide books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function (e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//filter books
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach(function (book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
