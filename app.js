

// Question 1. Show rating
// Given a rating, display a star(*) for each full rating and
// a full-stop(.) for each half rating
// Example -
// showRating(3) -> '***'
// showRating(4.5) -> '****'
// showRating(0.5) -> '.'

function showRating(rating) {
    let ratings = "";
    for ( let i = 0;i < Math.floor(rating); ++i) {
        ratings +="*"
        if ( i !== Math.floor(rating) -1 ) {
            ratings += " "
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += " ."
    }
    return ratings;
}

// Comments for code above

// initialise an empty string. line 12.

// loop through the the rounded down rating. line 13.

// add a star for every iteration. line 15.

// if its not the last iteration add a space. Line 16.

// if the number is not an integer. line 19

// return it. line 22


console.log(showRating(1));
console.log(showRating(4.5));
console.log(showRating(0.5));


// Question 2. Sort by lowest to highest price
// Given an array of numbers, return the price sorted by low to high
// Example -
// sortLowToHigh([20,40,10,30,50,10]) -> [10,10,20,30,40,50]
// sortLowToHigh([5,10,0,-5]) -> [-5,0,5,10]
// sortLowToHigh([3,2,1,0]) -> [0,1,2,3]

function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a-b);
}

console.log(sortLowToHigh([20,40,10,30,50,10]));


// Question 3. Sort by highest to lowest price
// Given an array of objects, return the prices sorted by high to low.


function sortHighToLow(numbers) {
  return numbers.sort((a, b) => b.price - a.price);
}


console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 0 },
    { id: 3, price: 500 },
  ])
);

// Question 4.
// Watch the videos on the slide.


// Question 5. Find all the posts by a single user
// Call this API "https://jsonplaceholder.typicode.com/posts"
// and return all the posts by any given user id.


async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    const result = await promise.json()

    const posts = result.filter(element => element.userId === userId)

    console.log(posts)
}

postsByUser(4);


// Question 6. First 6 Incomplete Todos
// Call this API "https://jsonplaceholder.typicode.com/todos" 
// and return the first 6 incomplete todo's from the result.

async function firstSixIncomplete(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json()

    const incompleteTasks = result.filter(element => !element.completed).slice(0,6);

    console.log(incompleteTasks)
}

firstSixIncomplete(6);