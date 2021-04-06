//stract
var quote = [
    {
        word: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        word: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author: "― Marilyn Monroe"
    },
    {
        word: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein"
    },
    {
        word: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        word: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
    {
        word: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch"
    },
    {
        word: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
]
var btn = document.querySelector("#btn")
var quoteBody = document.querySelector('.quote');
var heder = document.querySelector("h1")
var body = document.querySelector("body")
var scH2 = document.querySelector(".scand-h2")

function show() {
    var randN = Math.floor(Math.random() * quote.length);

    function color() {

        var x = '';
        function leterDown(number) {


            x += quote[randN].word[number]
            quoteBody.innerHTML = `<h2>${x}</h2>`

            // decrease the number value
            const newNumber = number + 1;

            // base case
            if (quote[randN].word.length > number + 1) {
                setTimeout(function () { leterDown(newNumber); }, 50);

            } else {

                setTimeout(function () { quoteBody.innerHTML += `<hr style="">` }, 500); 
                setTimeout(function () { quoteBody.innerHTML += `<h2 ><span class="feeding" >${quote[randN].author}</span></h2>` }, 500); 

            }

        }

        leterDown(0)

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }



        

        btn.style.backgroundColor = `${getRandomColor()}`

        body.style.backgroundImage = `linear-gradient(45deg ,${getRandomColor()},${getRandomColor()})`

    }
    color()
}

btn.onclick = show;





var h =heder.innerHTML;
for (let i = 0; i < h.length; i++) {
    
    console.log(h[i]);
    
}


