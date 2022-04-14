const quotes = [
    {   quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
        author: "Steve Jobs"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    }
]

const quote = document.querySelector("#quotes span:nth-child(1)");
const author = document.querySelector("#quotes span:nth-child(2)");

function random (items){
    const random = items[Math.floor(Math.random()*items.length)];
    const randomQuote = random.quote;
    const randomAuthor = random.author;
    author.innerHTML = randomAuthor;
    quote.innerHTML = randomQuote;
}

random(quotes);