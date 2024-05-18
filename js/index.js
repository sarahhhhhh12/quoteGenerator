var Quotes = [
    {
        quote: "  “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
        author: "― Bernard M. Baruch"

    },
    {

        quote: " “Live as if you were to die tomorrow. Learn as if you were to live forever.” ",
        author: " ― Mahatma Gandhi"

    },

    {
        quote: " “It is better to be hated for what you are than to be loved for what you are not.”   ",
        author: "― Andre Gide, Autumn Leaves"

    },

    {
        quote: " “Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”   ",
        author: "― Bill Keane"

    },

    {
        quote: "“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”  ",
        author: "― Dr. Seuss"

    },
    {
        quote: "  “It is never too late to be what you might have been.”   ",
        author: "― George Eliot"

    },

    {
        quote: " “That which does not kill us makes us stronger.”   ",
        author: "― Friedrich Nietzsche"

    },

    {
        quote: " “Everything you can imagine is real.”  ",
        author: "― Pablo Picasso"
    }

];



function randomQoutes() {

    var allQuotes = Quotes.concat(quoteContainer);


    var random = Math.floor(Math.random() * allQuotes.length);

    document.getElementById("quotes").innerHTML = ` ${allQuotes[random].quote}`
    document.getElementById("author").innerHTML = ` ${allQuotes[random].author}`

}



var quoteTitle = document.getElementById("quoteTitle");
var Author = document.getElementById("quoteAuthor");

quoteContainer = [];



if (localStorage.getItem("quoteGenerator") !== null) {


    quoteContainer = JSON.parse(localStorage.getItem("quoteGenerator"));

    display()

}


function addQuotes() {

    var quoteGenerator = {

        quote: quoteTitle.value,
        author: Author.value
    }

    quoteContainer.push(quoteGenerator)

    clear();

    display();


    localStorage.setItem("quoteGenerator", JSON.stringify(quoteContainer))
}



function display() {
    var quotes = "";

    for (var i = 0; i < quoteContainer.length; i++) {

        quotes += `

       
       <div class="col-md-3 col-sm-6 ">
       <div class =" d-flex justify-content-center align-items-center flex-column mb-3 ">
           <h3> <span class = "">Quote :   </span> ${quoteContainer[i].quote}  </h3>
           <h3>  <span class = "">Author : </span> ${quoteContainer[i].author}  </h3>
           <button onclick="deleteQuotes(${i});" class="rounded-2 border-0 btn-sm w-50 " ">Delete <i class= "fas fa-trash-alt my-2"></i></button>

       </div>
   </div>

        
        `

    }


    document.getElementById("crudQuotes").innerHTML = quotes;
}



function clear() {

    quoteTitle.value = null;
    Author.value = null;

}



function deleteQuotes(deletedIndex){

    quoteContainer.splice(deletedIndex , 1)
    display();
    localStorage.setItem("quoteGenerator", JSON.stringify(quoteContainer))

}