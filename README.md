
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
