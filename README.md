
The purpose of this hands on is to get a first glance at ReactJS and its ecosystem.
Obviously this hands on is made for TDD practitioners :)

# Installation
Clone this repo and then launch "npm install"
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

The test will fail, you just need to modify Hello.tsx to make it pass

# Step 2
Now our component will accept params. These params are called props in React language.
So let's modify our test with this:

    const wrapper = shallow(<Hello dude="Bob"/>);

    expect(wrapper.text()).to.be.equal("Hello world Bob!");

Notice we get a compilation error. Actually this is a good thing, we benefits from TypeScript everywhere :)

So to repair everything you need to:
- write an interface "HelloProps"
- modify Hello component to use this interface as the type of its parameter

**Tips**  
You can use "{param_name}" syntax within your tsx template to use a param

# Step 3
We will now start to write more complex components, components 
that will help us display comments (such as comments on a blog, wiki, whatever...)

Open files comments.tsx and comments.spec.tsx in your ide.

Unskip test "should generate an header". It fails because of the following expectation:

    expect(wrapper.find(Header)).to.have.length(1);

Make it green!

**Note:**  
Notice in previous test the usage of Enzyme's shallow feature.  
When shallow rendering a "Comment" the embedded "Header" is not rendered.
Replace "shallow" by "mount", now the test cannot succeed since everything is rendered.

# Step 4
Unskip test "should generate a content".  

Tips: If you encounter a TypeScript compilation error 
"JSX expressions must have one parent element", 
wrap the result of your function with a div

# Step 5
Get back to test "should generate an header" and rename it to "should generate an header with the author and the date".
Change the test to assess the fact that the header as proper props, with the author and date coming from the Comment component.  

**Tips:** you can use Enzyme's *wrapper.find(SELECTOR).at(0).props()* returns the props of the first wrapper's 
child element found using SELECTOR. Also do not forget to use mocha's deep equal.

Make the test pass!

You can also improve test "should generate a content" the same way.









 
