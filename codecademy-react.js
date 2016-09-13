/*
React JS - notes from codecademy:
- If a JSX expression takes up more than one line, then you should wrap the multi-line JSX expression in parentheses.
- A JSX expression must have exactly one outermost element - the first opening tag and the final closing tag of a JSX expression must belong to the same JSX element.
*/

<
script src = "https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js" > < /script> <
script src = "/app.compiled.js" > < /script>

var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
ReactDOM.render( < h1 > Render me! < /h1>, document.getElementById('app'));

var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
    var myList = (
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
);

ReactDOM.render(
  myList,
  document.getElementById('app')
);
/*
One special thing about ReactDOM.render is that it only updates DOM elements that have changed. That means thaif you render the exact same thing twice in a row, the second render will do nothing:
*/
var hello = < h1 > Hello world < /h1>;
  // This will add "Hello world" to the screen:
ReactDOM.render(hello, document.getElementById('app'));
// This won't do anything at all:
ReactDOM.render(hello, document.getElementById('app'))
/*
The Virtual DOM

In React, for every DOM object, there is a corresponding "virtual DOM object." A virtual DOM object is a representation of a DOM object, like a lightweight copy.

A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power to directly change what's on the screen.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

In summary, here's what happens when you try to update the DOM in React:

The entire virtual DOM gets updated.
The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
The changed objects, and the changed objects only, get updated on the real DOM.
Changes on the real DOM cause the screen to change.

In JSX, you can't use the word class! You have to use className instead:
*/
  var example = ( < h1 className = "big" > Hey < /h1>);
/*
This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
*/
var myDiv = < div className = "big" > I AM A BIG DIV < /div>;
ReactDOM.render(myDiv, document.getElementById('app'));
/*
Self-closing tags need the slash <img />
Fine in JSX:

<br />

NOT FINE AT ALL in JSX:

<br>
*/
// More JSX:
ReactDOM.render( < h1 > 2 + 3 < /h1>, document.getElementById('app'));
// 2 + 3
// in JSX the above 2 + 3 stays like that because it's between the <h> tags. If you want JavaScript to make this read 5, then add curly braces. Curly braces is the way to use JavaScript inside JSX:
// Write code here:
ReactDOM.render( < h1 > {
2 + 3
} < /h1>, document.getElementById('app'));
// 5

/* When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside.*/
var theBestString = 'tralalalala i am da best';

ReactDOM.render( < h1 > {
  theBestString
} < /h1>, document.getElementById('app'));

//Object properties are also often used to set attributes:
var pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
};

var panda = (
  <img
    src={pics.panda}
    alt="Lazy Panda" />
);

var owl = (
  <img
    src={pics.owl}
    alt="Unimpressed Owl" />
);

var owlCat = (
  <img
    src={pics.owlCat}
    alt="Ghastly Abomination" />
);

var React = require('react');
var ReactDOM = require('react-dom');

var goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
var gooseImg = <img src={goose} />
  ReactDOM.render(gooseImg, document.getElementById('app'));
  /*JSX elements can have event listeners, just like HTML elements can. Programming in React means constantly working with event listeners. You create an event listener by giving a JSX element a special attribute. Here's an example: */

<img onClick={myFunc} />

/* An event listener attribute's name should be something like onClick or onMouseOver: the word on, plus the type of event that you're listening for. You can see a list of valid event names here https://www.codecademy.com/courses/react-101/lessons/react-jsx-advanced/exercises/jsx-event-listeners?action=resume . An event listener attribute's value should be a function. The above example would only work if myFunc were a valid function that had been defined elsewhere. Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.

Here's a rule that you need to know: you can not inject an if statement into a JSX expression.

This code will break: */

(
  <h1>
    { if (purchase.complete) 'Thank you for placing an order!' }
  </h1>
)

/*The reason why has to do with the way that JSX is compiled. You don't need to understand the mechanics of it for now, but if you're interested then you can learn more here. http://facebook.github.io/react/tips/if-else-in-JSX.html*/
/* How can you write a conditional, if you can't inject an if statement into JSX?
Well, one option is to write an if statement, and not inject it into JSX. */
var React = require('react');
var ReactDOM = require('react-dom');

if (user.age >= drinkingAge) {
  var message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  var message = (
    <h1>
      Hey, check out these earrings I got at Claire'/'/s!
    </h1>
  );
}


ReactDOM.render(
  message,
  document.getElementById('app')
);
/*The array method .map comes up often in React. It's good to get in the habit of using it alongside JSX.

If you want to create a list of JSX elements, then .map is often your best bet. It can look odd at first:*/
ar strings = ['Home', 'Shop', 'About Me'];

var listItems = strings.map(function(string) {
  return <li>{string}</li>;
});
<ul > {listItems}</ul>

// This is fine in JSX, not in an explicit array:

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!

var liArray = [
  <li>item 1</li>,
  <li>item 2<li>,
  <li>item 3</li>
];

<ul>{liArray}</ul>

// another map example:
  var React = require('react');
    var ReactDOM = require('react-dom');

    var people = ['Rowe', 'Prevost', 'Gare'];

    var peopleLIs = people.map(function(person){
      // return statement goes here:
    	return <li>{person}</li>;
    });

    // ReactDOM.render goes here:
    ReactDOM.render(<ul>{peopleLIs}</ul>, document.getElementById('app'));

/*When you make a list in JSX, sometimes your list will need to include something called keys:*/
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
/*A key is a JSX attribute. The attribute's name is key. The attribute's value should be something unique, similar to an id attribute.

keys don't do anything that you can see! React uses them internally to keep track of lists. If you don't use keys when you're supposed to, React might accidentally scramble your list-items into the wrong order.

Not all lists need to have keys. A list needs keys if either of the following are true:

The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
If neither of these conditions are true, then you don't have to worry about keys. If you aren't sure then it never hurts to use them!
...
On line 8, give your <li></li> a key attribute.

What should key's value be? In this case, the answer is surprisingly tricky.

.map is going to loop over your return statement on line 8, creating a new <li></li> with a new key attribute on each loop. You need every key to be unique! How can you get .map to produce a unique key, each time it loops?

First, add an i parameter so that you can access each element's unique index:*/
var React = require('react');
var ReactDOM = require('react-dom');

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person, i){
  // return statement goes here:
	return <li key={'person_' + i}>{person}</li>;
});

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLIs}</ul>, document.getElementById('app'));

/*You can write React code without using JSX at all!

The majority of React programmers do use JSX, and we will use it for the remainder of this tutorial, but you should understand that it is possible to write React code without it.*/

//The following JSX expression:

var h1 = <h1>Hello world</h1>;

//can be rewritten without JSX, like this:

var h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
/*When a JSX element is compiled, the compiler transforms the JSX element into the method that you see above: React.createElement(). Every JSX element is secretly a call to*/ React.createElement().
