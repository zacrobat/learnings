/*
React JS - notes from codecademy:
- If a JSX expression takes up more than one line, then you should wrap the multi-line JSX expression in parentheses.
- A JSX expression must have exactly one outermost element - the first opening tag and the final closing tag of a JSX expression must belong to the same JSX element.
*/

<script src = "https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js" > < /script> <
script src = "/app.compiled.js" > < /script>

var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
ReactDOM.render( <h1> Render me! </h1>, document.getElementById('app'));

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
One special thing about ReactDOM.render is that it only updates DOM elements that have changed. That means that if you render the exact same thing twice in a row, the second render will do nothing:
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
ReactDOM.render( < h1 > { 2 + 3 } < /h1>, document.getElementById('app'));
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

//REACT COMPONEENTS:
/*React applications are made out of components.
A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.
The terms "component," "React component," and "component instance" all refer to the same thing. This code will create and render a new React component:
*/
var React = require('react');
var ReactDOM = require('react-dom');

var MyComponentClass = React.createClass({
  render: function () {
    return <h1>Hello world</h1>;
  }
});

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
/* require('react') returns a JavaScript object. This object contains methods that you need in order to use React.

This returned object is called the React library.

You've already seen one of the methods in the React library: React.createElement. Recall that when a JSX element is compiled, it transforms into a React.createElement() call.

For this reason, you have to require the React library and save it in a variable named React, before you can use any JSX at all. React.createElement must be available in order for JSX to work.

...require('react-dom') is very similar to require('react'). It also returns a JavaScript object, which contains React-related methods.

However, there is a difference!

The methods returned by require('react-dom') are for interacting with the DOM. You'are already familiar with one of them: ReactDOM.render.

The methods returned by require('react') don't deal with the DOM at all. They don't engage directly with anything that isn't part of React. They are for pure React purposes, such as creating components or writing JSX elements.

...Here's another fact about components: every component must come from a component class.

A component class is like a factory that creates components. If you have a component class, then you can use that class to produce as many components as you want.

To make a component class, you use one of the methods in the React library: React.createClass.

React.createClass's job is to create a component class, which is like a factory for building React components. You also know that React.createClass is one of the methods on the object returned by require('react'),

Calling React.createClass is the way to make a new component class.

When you make a new component class, you should store it in a variable so that you can use it later. On line 4, notice that our component class is stored in a variable named MyComponentClass.

********** Component class variable names must begin with CAPITAL LETTERS!

This adheres to the naming convention in which class names are written in UpperCamelCase. There are technical reasons for it as well. We'll get to those soon.

Let's review what you've learned so far! Find each of these points in app.js:

On line 1, var React = require('react') saves a JavaScript object into your file. This object contains methods that are needed to make React work, such as React.createElement and React.createClass.
On line 2, var ReactDOM = require('react-dom') saves another JavaScript object into your file. This object contains methods that are concerned with DOM interaction, such as ReactDOM.render.
On line 4, React.createClass returns a new component class. A component class is not a component - it's more like a factory that produces components. Every component must come from a component class.
When you call React.createClass, you should save the returned component class in a variable. That variable's name should be written in UpperCamelCase.
Something that we haven't talked about yet is the argument that gets passed to React.createClass.

React.createClass takes one argument. That argument must be a JavaScript object. This object will act as a set of instructions, explaining to your component class how to build a React component.

Here's what your "instructions object" would look like on its own. Find it in app.js: */

{
  render: function () {
    return <h1>Hello world</h1>;
  }
}

/*That doesn't look like a set of instructions explaining how to build a React component! Yet that's exactly what it is.

Let's talk about the instructions that you pass to React.createClass!

For starters, these instructions should be stored in an object:

var instructions = {};
There is only one property that you have to include in this object: a render function.

A render function is a property whose name is render, and whose value is a function. The term "render function" can refer to the entire property, or to just the function part.*/

var instructions = {
  render: function () {}
};
//A render function must have a return statement. Usually, this return statement returns a JSX expression:

var instructions = {
  render: function () {
    return <h1>Hello world</h1>;
  }
};
// Example:
var React = require('react');
var ReactDOM = require('react-dom');

var componentBlueprint = {
  render: function () {
  	return <h1>Hello world</h1>
  }
};

var MyComponentClass = React.createClass(componentBlueprint);


// The above (storing the instructions in a variable) is less common than this more direct method:

var MyComponentClass = React.createClass({
  render: function () {
    return <h1>Hello world</h1>;
  }
});

// this is how you then make a React component:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);
/*
To make a React component, you write a JSX element. Instead of naming your JSX element something like h1 or div like you've done before, give it the same name as a component class. Voilà, there's your component instance

JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two! That is why component class names must begin with capital letters. In a JSX element, that capitalized first letter says, "I will be a component instance and not an HTML tag."

Of course, none of this explains the point of a render function. All you know so far is that its name is render, it needs a return statement for some reason, and you have to include it in the object that you pass to React.createClass. We'll get to the 'why' of it soon...
*/

// You have learned that React.createClass must be passed an "instructions object," like this one:

{
  render: function () {
    return <h1>Hello world</h1>;
  }
}
/* You haven't learned why that object is a set of instructions! It doesn't look like instructions. How does it work?

Whenever you make a React component instance, that component inherits all of the properties on its class's instructions object.

Your instructions object has one property: a function named render. Therefore, <MyComponentClass /> has a function named render. You could make a million different <MyComponentClass /> instances, and each one would inherit this same exact render function.

This lesson's final exercise is to render your component.

Fortunately, your component already has a render function! It inherited it from MyComponentClass. Now you just have to call that render function.

To call a component's render function, pass that component to ReactDOM.render: */

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

/* ReactDOM.render will tell <MyComponentClass /> to call its render function.

<MyComponentClass /> will call its render function, returning <h1>Hello world</h1>. ReactDOM.render will take that <h1>Hello world</h1> and add it to the virtual DOM, eventually making it visible on the screen.
*/
var React = require('react');
var ReactDOM = require('react-dom');

var redPanda = {
  src: 'http://bit.ly/1U92LL3',
  alt: 'Red Panda',
  width:  '200px'
};

var RedPanda = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
    );
  }
});

ReactDOM.render(
  <RedPanda />,
  document.getElementById('app')
);

var React = require('react');
var ReactDOM = require('react-dom');


var owl = {
  title: "Excellent Owl",
  src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg"
};

// Component class starts here:
var Owl = React.createClass({
  render: function () {
    return (
    	<div>
        <h1>{owl.title}</h1>
        <br />
        <img src={owl.src}
          	 alt={owl.title} />
      </div>
    )
  }
})

ReactDOM.render(<Owl />, document.getElementById('app'));
/*A render function must have a return statement. However, that isn't all that it can have.

A render function can also be a fine place to put simple calculations that need to happen right before a component renders. Here's an example of some calculations inside of a render function:

*/
// This works:
var Random = React.createClass({
  render: function () {

    // First, some logic that must happen
    // before rendering:
    var n = Math.floor(Math.random()*10+1);

    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
});
// This DOES NOT WORK:
var Random = React.createClass({

  // This should be in the render function:
  var n = Math.floor(Math.random()*10+1);

  render: function () {
    return <h1>The number is {n}!</h1>;
  }
});
// Another example:
var React = require('react');
var ReactDOM = require('react-dom');


var friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
var Friend = React.createClass({
  render: function () {
    var friend = friends[2];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
      </div>
    );
  }
})

ReactDOM.render(
	<Friend />,
  document.getElementById('app')
);

// another example - conditional.
var React = require('react');
var ReactDOM = require('react-dom');

var fiftyFifty = Math.random() < 0.5;

// React.createClass call begins here:
var TonightsPlan = React.createClass({
  render: function (){
  if (fiftyFifty = false)
  	return <h1>Tonight I'm going out WOOO</h1>
  else
    return <h1>Tonight I'm going to bed WOOO</h1>
  }
});

ReactDOM.render(<TonightsPlan />, document.getElementById('app')
);

// working with -this-...
var MyName = React.createClass({
	// name property goes here:
	name: 'Zac',

  render: function () {
    return <h1>My name is {this.name}.</h1>;
  }
});

ReactDOM.render(<MyName />, document.getElementById('app'));

/*
Render functions often contain event listeners. Here's an example of an event listener in a render function: */

render: function () {
  return (
    <div onHover={myFunc}>
    </div>
  );
}
/*Recall that an event handler is a function that gets called in response to an event. In the above example, the event handler is myFunc.

In React, you define event handlers as property values on the instructions object. Like this:*/

React.createClass({
  myFunc: function () {
    alert('Stop it.  Stop hovering.');
  },

  render: function () {
    return (
      <div onHover={this.myFunc}>
      </div>;
    );
  }
});
/*Notice that the object being passed to React.createClass has two properties: myFunc and render. myFunc is being used as an event handler. myFunc will be called any time that a user hovers over the rendered <div></div>.
*/
//example:
var Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function () {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
});
ReactDOM.render(<Button />, document.getElementById('app'));
// Components Render Other Components, how components interract...

//Here is a render function that returns an HTML-like JSX element:

var Example = React.createClass({
  render: function () {
    return <h1>Hello world</h1>;
  }
});
// You've seen render functions return <div></div>s, <p></p>s, and <h1></h1>s, just like in the above example.*/

// Render functions can also return another kind of JSX: component instances.

var OMG = React.createClass({
  render: function () {
    return <h1>Whooaa!</h1>;
  }
});

var Crazy = React.createClass({
  render: function () {
    return <OMG />;
  }
});
//In the above example, Crazy's render function returns an instance of the OMG component class. You could say that Crazy renders an <OMG />.
/*
When you use React.js, every JavaScript file in your application is invisible to every other JavaScript file by default. ProfilePage.js and NavBar.js can't see each other.

This is a problem!

On line 9, you just added an instance of the NavBar component class. But since you're in ProfilePage.js, JavaScript has no idea what NavBar means.

If you want to use a variable that's declared in a different file, such as NavBar, then you have to import the file that you want. To import a file, you can use require and pass in a filepath:*/

var NavBar = require('./NavBar.js');
/* We've used require before, but not like this.

If you pass require a string that begins with either a dot or a slash, then require will treat that string as a filepath. require will follow that filepath, and import the file that it finds.

If your filepath doesn't have a file extension, then ".js" is assumed. So the above example could be shortened:*/

var NavBar = require('./NavBar');
/*One final, important note:
None of this behavior is specific to React! Module systems of independent, importable files are a very popular way to organize code. React's specific module system comes from Node.js. More on all of that later.
http://eloquentjavascript.net/10_modules.html
http://fredkschott.com/post/2014/06/require-and-the-module-system/
*/
/*
You've learned how to use require to import a file into a different file.

But you don't want to import a whole file! NavBar.js isn't really what you're looking for. You just want to the NavBar component class, so that you can render a <NavBar /> instance.

What you need is a way to import only a specific part of a file into another file.

The answer is something called module.exports. module.exports comes from Node.js's module system, just like require does. module.exports and require are meant to be used together, and you basically never see one without the other.

Here's how you use module.exports:

In one file, declare module.exports to be equal to an expression. It could be any expression you want:*/

// Manifestos.js:

var faveManifestos = {
  futurist: 'http://bit.ly/1lKuB2I',
  SCUM:     'http://bit.ly/1xWjvYc',
  cyborg:   'http://bit.ly/16sbeoI'
};

module.exports = faveManifestos;
//In a different file, use require to import the first file. require won't return the entire first file; it will return the first file's module.exports value!

// App.js:

// Link to the Futurist Manifesto:

console.log(require('./Manifestos').futurist);
// module.exports means, "If you require the file that I am in, then here's what you're going to get!"

// navbar example:
var React = require('react');

var NavBar = React.createClass({
  render: function () {
    var pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    var navLinks = pages.map(function(page){
      return (
        <a href={'/' + page}>
          {page}
        </a>
      );
    });

    return <nav>{navLinks}</nav>;
  }
});
module.exports = NavBar;

// profile page example:
var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar')

var ProfilePage = React.createClass({
  render: function () {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
});
ReactDOM.render(<ProfilePage />, document.getElementById('app'));
/*It may not seem like a big deal yet, but you've just discovered the key to React's power.

By nesting components inside of other components, you can build infinitely complex architectures, even if each component is relatively simple. The relationship that you just built is the fundamental relationship behind React.js.*/

// props ...Information that gets passed from one component to another is known as "props."

/* Every component has something called props.

A component's props is an object. It holds information about that component.

To see a component's props object, you use the expression this.props. Here's an example of this.props being used inside of a render function: */
render: function () {

  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}
// Most of the information in this.props is pretty useless! But some of it is extremely important.

// You can pass information to a React component.

// How? By giving that component an attribute:

<MyComponent foo="bar" />
//Let's say that you want to pass a component the message, "This is some top secret info.". Here's how you could do it:

<Example message="This is some top secret info." />
// As you can see, to pass information to a component, you need a name for the information that you want to pass.

// In the above example, we used the name message. You can use any name you want.

// If you want to pass information that isn't a string, then wrap that information in curly braces. Here's how you would pass an array:

<Greeting myInfo={["top", "secret", "lol"]} />
// In this next example, we pass several pieces of information to <Greeting />.

The values that aren't strings are wrapped in curly braces:

<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />

ReactDOM.render(<PropsDisplayer myProp="Hello" />, document.getElementById('app'));
// myProp="Hello" above is how you pass information to a component's props object.

// You will often want a component to display the information that you pass.

// Here's how to make a component display passed-in information:
// 1 - Find the component class that is going to receive that information.
// 2 - Include this.props.name-of-information in that component class's render function's return statement.
//example:
var React = require('react');
var ReactDOM = require('react-dom');

var Greeting = React.createClass({
  render: function () {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
});

ReactDOM.render(
  <Greeting firstName='Grover' />,
  document.getElementById('app')
);
// 'app': Hi there, Grover!

// The most common use of props is to pass information to a component, from a different component.

//A curmudgeonly clarification about grammar: You may have noticed some loose usage of the words prop and props. Unfortunately this is pretty inevitable. props is the name of the object that stores passed-in information. this.props refers to that storage object. At the same time, each piece of passed-in information is also called a prop. props could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information. :(

// To pass a prop to a <Greeting /> component instance, from an <App /> component instance: If <App /> is going to pass a prop to <Greeting />, then it follows that <App /> is going to render <Greeting />:
// Greeting.js:

var React = require('react');

var Greeting = React.createClass({
  render: function () {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
});

// OR:

var Greeting = React.createClass({
  render: function () {
  	if (this.props.signedIn == false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
});

module.exports = Greeting;

// App.js:

var React = require('react');
var ReactDOM = require('react-dom');
var Greeting = require('./Greeting')

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Sally" />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// Receive an event handler as a prop:
// Button.js:
var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.talk}> // attach talk to the <button></button> as an event handler
        Click me!
      </button>
    );
  }
});

module.exports = Button;

// Talker.js:
var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

var Talker = React.createClass({
  talk: function () {
    for (var speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },

  render: function () {
    return <Button talk={this.talk} />;
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

/*
Let's talk about naming things.

When you pass an event handler as a prop, as you just did, there are two names that you have to choose.

Both naming choices occur in the parent component class - that is, in the component class that defines the event handler and passes it.

The first name that you have to choose is the name of the event handler itself.

Look at Talker.js, lines 6 through 11. This is our event handler. We chose to name it talk.

The second name that you have to choose is the name of the prop that you will use to pass the event handler. This is the same thing as your attribute name.

For our prop name, we also chose talk, as shown on line 14:*/

return <Button talk={this.talk} />;

/*These two names can be whatever you want. However, there is a naming convention that they often follow. You don't have to follow this convention but you should understand it when you see it.

Here's how the naming convention works: first, think about what type of event you are listening for. In our example, the event type was "click."

If you are listening for a "click" event, then you name your event handler handleClick. If you are listening for a "keyPress" event, then you name your event handler handleKeyPress:*/

React.createClass({
  handleHover: function () {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
});

/*Your prop name should be the word on, plus your event type. If you are listening for a "click" event, then you name your prop onClick. If you are listening for a "keyPress" event, then you name your prop onKeyPress:*/

React.createClass({
  handleHover: function () {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  },

  render: function () {
    return <Child onHover={this.handleHover} />;
  }
});

// Button.js:
var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
});

module.exports = Button;

// Talker.js:

var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

var Talker = React.createClass({
  handleClick: function () {
    for (var speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },

  render: function () {
    return <Button onClick={this.handleClick} />;
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

One major source of confusion is that the name onClick has special meaning, but only when it's used on HTML-like elements.

Look at Button.js. When you give a <button></button> an attribute named onClick, then the name onClick has special meaning. As you've learned, this special onClick attribute creates an event listener, listening for clicks on the <button></button>:

// Button.js

// The attribute name onClick
// creates an event listner:
<button onClick={this.props.onClick}>
  Click me!
</button>
Now look at Talker.js. Here, when you give <Button /> an attribute named onClick, then the name onClick doesn't do anything special. The name onClick does not create an event listener when used on <Button /> - it's just an arbitrary attribute name:

// Talker.js

// The attribute name onClick
// is just a normal attribute name:
<Button onClick={this.handleClick} />
The reason for this is that in <Button /> is not an HTML-like JSX element; it's a component instance.

Names like onClick only create event listeners if they're used on HTML-like JSX elements. Otherwise, they're just ordinary prop names.



Every component's props object has a property named children.

this.props.children will return everything in between a component's opening and closing JSX tags.

So far, all of the components that you've seen have been self-closing tags, such as <MyComponentClass />. They don't have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.

Look at BigButton.js (below). In Example 1, <BigButton>'/'s this.props.children would equal the text, "I am a child of BigButton."

In Example 2, <BigButton>'/'s this.props.children would equal a <LilButton /> component.

In Example 3, <BigButton>'/'s this.props.children would equal undefined.

If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.

var React = require('react');
var LilButton = require('./LilButton');

var BigButton = React.createClass({
  render: function () {
    console.log(this.props.children);
    return <button>Yo I am big</button>;
  }
});

// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>

// Example 2
<BigButton>
  <LilButton />
</BigButton>

// Example 3
<BigButton />

  Take a look at the Button component class.

  Notice that on line 8, Button expects to receive a prop named text. The received text will be displayed in a <button></button> element.

  What if nobody passes any text to Button?

  If nobody passes any text to Button, then Button's display will be blank. It would be better if Button could display a default message instead.

  You can make this happen by writing a function named getDefaultProps:

  var Example = React.createClass({

    getDefaultProps: function () {},

    render: function () {
      return <h1>{this.props.text}</h1>;
    }
  });
  The getDefaultProps function should return an object:

  var Example = React.createClass({

    getDefaultProps: function () {
      // Return an object:
      return {};
    },

    render: function () {
      return <h1>{this.props.text}</h1>;
    }
  });
  Inside of this returned object, write properties for any default props that you'd like to set:

  var Example = React.createClass({
    getDefaultProps: function () {
      return { text: 'yo' };
    },

    render: function () {
      return <h1>{this.props.text}</h1>;
    }
  });
  If an <Example /> doesn't get passed any text, then it will display "yo."

  If an <Example /> does get passed some text, then it will display that passed-in text.

props is quite possibly the longest and most difficult lesson in all of our React courses. Congratulations on getting this far!

  Here are some of the skills that you have learned:

  Passing a prop by giving an attribute to a component instance
  Accessing a passed-in prop via this.props.prop-name
  Displaying a prop
  Using a prop to make decisions about what to display
  Defining an event handler in a component class
  Passing an event handler as a prop
  Receiving a prop event handler and attaching it to an event listener
  Naming event handlers and event handler attributes according to convention
  this.props.children
  getDefaultProps

New Chapter, State:

Dynamic information is information that can change.

React components will often need dynamic information in order to render. For example, a component displaying a game's score will need to check the score before it can display it.

There are two ways for a component to get dynamic information: props and state. Besides props and state, everything in a component should always stay exactly the same.

You just spent a long lesson learning about props. Now it's time to learn about state. props and state are all that you need to set up an ecosystem of interacting React components.

A React component can access dynamic information in two ways: props and state.

Unlike props, a component's state is not passed in from the outside. A component decides its own state.

To make a component have state, write a getInitialState function:

var Example = React.createClass({
  getInitialState: function () {
    return { mood: 'decent' };
  },

  render: function () {
    return <div></div>;
  }
});

<Example /> // has a state of mood: 'decent'
getInitialState should return an object, like in the example above.

Look at the bottom of the above code. <Example /> has a state of { mood: 'decent' }.

//Example:
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function () {
  	return { title: 'Best App' };
	},

  render: function () {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app')); // Best App

A component can do more than just read its own state. A component can also change its own state.

A component changes its state by calling the function this.setState.

this.setState takes two arguments: an object that will update the component's state, and a callback. You basically never need the callback.

In the code editor, take a look at Example.js. Notice that <Example /> has a state of:

{
  mood:   'great',
  hungry: false
}
Now, let's say that <Example /> were to call:

this.setState({ hungry: true });
After that call, here is what <Example />'s state would be:

{
  mood:   'great',
  hungry: true
}
The mood part of the state remains unaffected!

this.setState takes an object, and merges that object with the component's current state. If there are properties in the current state that aren't part of that object, then those properties remain how they were.

The most common way to call this.setState is to call a custom function that wraps a this.setState call. makeSomeFog is an example:

var Example = React.createClass({
  getInitialState: function () {
    return { weather: 'sunny' };
  },

  makeSomeFog: function () {
    this.setState({
      weather: 'foggy'
    });
  }
});
Let's walk through how a function wrapping this.setState might work in practice. In the code editor, read Mood.js all the way through:

var React = require('react');
var ReactDOM = require('react-dom');

var Mood = React.createClass({
  getInitialState: function () {
    return {
      mood: 'good'
    };
  },

  toggleMood: function () {
    var newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  },

  render: function () {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
});

ReactDOM.render(<Mood />, document.getElementById('app'));

Here is how a <Mood />'/'s state would be set:

A user triggers an event (in this case a click event, triggered by clicking on a <button></button>).
The event from Step 1 is being listened for (in this case by the onClick attribute on line 20).
When this listened-for event occurs, it calls an event handler function (in this case this.toggleMood, called on line 20 and defined on lines 11-14).
Inside of the body of the event handler, this.setState is called (in this case on line 13).
The component's state is changed!
Look at the statement on line 12. What does that do?

Line 12 sets a variable named newMood equal to the opposite of this.state.mood. If this.state.mood is "good", then newMood will be "bad," and vice versa.

A <Mood /> instance would display "I'm feeling good!" along with a button. Clicking on the button would change the display to "I'm feeling bad!" Clicking again would change back to "I'm feeling good!," etc. Try to follow the step-by-step walkthrough in Mood.js and see how all of this works.

One final note: you can't call this.setState from inside of the render function! We'll explain why in the next exercise.

// Another example:
var React = require('react');
var ReactDOM = require('react-dom');

var green = '#39D1B4';
var yellow = '#FFD712';

var Toggle = React.createClass({
  getInitialState: function () {
    return { color: green };
  },

  changeColor: function () {
    var newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  },


  render: function () {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
        	Change color
        </button>
      </div>
    );
  }
});

ReactDOM.render(<Toggle />, document.getElementById('app'));

There's something odd about all of this.

Look again at Toggle.js.

When a user clicks on the <button></button>, the changeColor function is called. Take a look at changeColor.

changeColor calls this.setState, which updates this.state.color. However, even if this.state.color changes from green to yellow, that alone doesn't make the screen's color change!

The screen's color doesn't change until Toggle renders.

Inside of the render function, it's this line:

<div style={{background:this.state.color}}>
that changes a virtual DOM object's color to the new this.state.color, eventually causing a change in the screen.

If you call changeColor, shouldn't you then also have to call render again? changeColor only makes it so that, the next time that you render, the color will be different. Why can you see the new background right away, if you haven't re-rendered the component?

Here's why: Any time that you call this.setState, this.setState AUTOMATICALLY calls render as soon as the state has changed.

Think of this.setState as actually being two things: this.setState, immediately followed by render.

That is why you can't call this.setState from inside of the render function! this.setState automatically calls render. If render calls this.setState, you will create an infinite loop.


REACT.JS PART II - codecademy:
Welcome to Introduction to React.js: Part II!

During this course, you will learn more React.js fundamentals. You will also learn some popular strategies for combining these fundamentals. We call these strategies programming patterns.

If learning fundamental skills is like viewing a React app through a microscope, then learning programming patterns is like removing the microscope and viewing an app with the naked eye. In the next course, we'll step back even further and view a React app from a distance, to see how it all fits together.

At the end of this course, you will install and configure React.js on your local computer.

Let's learn our first programming pattern!

In this lesson, we'll take a look at a simple version of a programming pattern. The following lessons will expand upon that lesson, and by the end, we'll have a programming pattern in its full complexity.

Our programming pattern uses two React components: a stateful component, and a stateless component. "Stateful" describes any component that has a getInitialState function; "stateless" describes any component that does not.

In our pattern, a stateful component passes its state down to a stateless component.
