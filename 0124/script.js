/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
let para = document.querySelector("p");
para.innerHTML = para.innerHTML
  .split(" ")
  .map((word) => {
    if (word.length > 8) {
      return '<span style="background-color: red">' + word + "</span>";
    } else if (word.length <= 8 && 5 < word.length) {
      return '<span style="background-color: green">' + word + "</span>";
    }
    return word;
  })
  .join(" ");
/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const a = document.createElement("a");
const linkText = document.createTextNode("Link Here");
a.appendChild(linkText);
a.title = "Link";
a.href = "http://officeipsum.com/";
document.body.appendChild(a);
/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

para.innerHTML = para.innerHTML.split(".").join(".<br/>");

// document.body.p.innerText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const h = document.createElement("h5");
h.innerHTML = para.innerHTML.split(/\s/).length + "words";
document.getElementById("h1").appendChild(h);
/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
// const icons = document.getElementsByClassName("?");
// const iconsArr = Array.from(icons);
// iconsArr.push("🤔");
para.innerHTML = para.innerHTML.replaceAll("?", "🤔").replaceAll("!", "😲");
