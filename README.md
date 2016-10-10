
The purpose of this hands on is to get a first glance at ReactJS and its ecosystem.
Obviously this hands on is made for TDD practitioners :)

# Installation
Clone this repo and then launch "npm install"
webpack-dev-server can also be useful (even if not mandatory). To install it simply type npm i -g webpack-dev-server
That's all folks!

To check that everything works properly you can:
 - launch "npm test". You should see a green message saying that one test is successful
 - launch "webpack-dev-server" and open in your browser URL http://localhost:8080

It is highly recommended that you keep either a console with "npm test" running or you use VSCode task runner (convenient on a laptop screen) 

# Step 1
Change expectations in file Hello.spec.tsx.
We expect the component "Hello" to generate a div containing the text "Hello world!".  
With enzyme and mocha you just need to write:

    expect(wrapper.text()).to.be.equal("Hello world!");

The test will fail, you just need to modify Hello.tsx to make it pass!

**Note**  
Most React components are stateless components, simple functions that live in JSX/TSX files, defines as follow:

    const MyComponent = (myProps: PROPS_TYPE) => (
        <div>
           ...content...
        </div>
    )

# Step 2
Now our component will accept params. These params are called props in React language.
So let's modify our test with this:

    const wrapper = shallow(<Hello dude="Bob"/>);

    expect(wrapper.text()).to.be.equal("Hello world Bob!");

Notice we get a compilation error. Actually this is a good thing, we benefits from TypeScript everywhere :)

So to repair everything you need to:
- write an interface "HelloProps"
- modify Hello component to use this interface as the type of its parameter
- fix compilation error in index.tsx

**Tips**  
You can use "{param_name}" syntax within your tsx template to use a param

# Step 3
We will now start to write more complex components, components 
that will help us display comments (such as comments on a blog, wiki, whatever...)  
*Starting from now this is strongly inspired by official Facebook React tutorial*  
Open files comments.tsx and comments.spec.tsx in your ide.

Unskip test "should generate an header". It fails because of the following expectation:

    expect(wrapper.find(Header)).to.have.length(1);

Make it green!

**Note:**  
Notice in previous test the usage of Enzyme's shallow feature.  
When shallow rendering a "Comment" the embedded "Header" is not rendered.
Replace "shallow" by "mount", now the test cannot succeed since everything is rendered.

# Step 4
Unskip test "should generate content" and make it pass  

**Tips**  
React inject in "props" a special property "children" 

**Tips**  
If you encounter a TypeScript compilation error 
"JSX expressions must have one parent element", 
wrap the result of your function with a div

# Step 5
Get back to test "should generate an header" and rename it to "should generate an header with the author and the date".
Change the test to assess the fact that the header has proper props, with the author and date coming from the Comment component.  

**Tips:** you can use Enzyme's *wrapper.find(SELECTOR).at(0).props()* returns the props of the first wrapper's 
child element found using SELECTOR. Also do not forget to use mocha's deep equal.

Make the test pass!

# Step 6
We will now build a CommentList component 
that will display a list of comments.
The CommentList component will generate a container div element and will leverage on the existing Comment component.
Feel free to write a CommentListProps interface and of course you can do TDD :)  
By the way below some comments data you can use for testing purposes:

    const data = [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    ]; 

**Tips** 
Take care of warning messages printed by React, they are important!

# Step 7
We will now add a markdown feature to our Comment component!
The Remarkable lib is already set up.
To convert a markdown string into an HTML chunk you need to 
write something that looks like this:

    const md = new Remarkable();
    md.render(markdownString);

Try to replace *{children}* by *{md.render(children.toString())}*...  
To solve this issue checkout this page:
https://facebook.github.io/react/tips/dangerously-set-inner-html.html 

# Step 8 - TBD
Until now all the React components we have written were simple lambda functions.
This kind of components are called stateless components.  
React components can also be stateful. Stateful components have an internal state and 
can have methods called during the component lifecycle.  
In a real life application most components can be stateless (especially using redux), so you already enough about React to get you started :)  
If you want to learn more about React, you can jump directly to the middle of [Facebook tutorial](https://facebook.github.io/react/docs/tutorial.html#hook-up-the-data-model) . You just need to translate the code into TypeScript :)
