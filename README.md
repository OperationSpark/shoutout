Shout Out - Design Elements
========

Shout Out is an app available on both iOS and Android created by Operation Spark to serve as an intro into native app development using the [Ionic Framework](http://ionicframework.com/). 

## User Experience
User Experience (UX) involves a person's behaviors, attitudes, and emotions about using a particular product, system or service. In regards to web products the user experience encompasses every interaction you have with a product. That includes not only while using the application itself but also the emails you receive, how easy the login flow may be, and how soon you get a response after submitting a support request.  

### User Stories
A user story is an explanation, in a few sentences, of what a user needs to do while using a product. User stories are common in agile software development and answer the question of who, what, and why in a simple way. 

Examples user stories: 
**Dropbox**

As a user, I can *easily* sync files across all of my devices.

**Facebook**

As a user, I can see *easily* what my friends and family are up to and share my own experiences. 


### User Interface
The user interface is the space where interaction between humans and machines occurs. Humans should be able to easily control machines and receive feedback on the best way to proceed. Microwaves are very straightforward in their approach. You have a keypad to set the time, presets for certain types of food, start and stop buttons, and a display that primarily shows you the time left when something is cooking but also shows the time of day when the microwave is not in use. 

![](http://blog.codinghorror.com/content/images/uploads/2007/10/6a0120a85dcdae970b0120a86dacdf970b-pi.jpg)
![](http://www.techhuman.com/wp-content/uploads/2012/12/Sony-HX-855-55-LED-TV-Remote.jpeg)

## Wireframing
Wireframes are like blueprints for websites. They show various screens that will eventually be developed into a useable application. Wireframes help show how an application will function and how to navigate through an application and don't typically make use of colors, graphics, or any styling. Wireframes can be made on a whiteboard, paper, or on the computer. 

![](http://www.flairbuilder.com/img/wireframe-samples/wireframe-example-large-1.png)


## Colors
Colors are important. Different colors evoke different emotions, provide varying amounts of contrast, and ultimately have an affect on *how users feel* while using a product. Read more about color theory [here](http://webdesign.tutsplus.com/articles/an-introduction-to-color-theory-for-web-designers--webdesign-1437). 

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ryb-colorwheel.svg/540px-Ryb-colorwheel.svg.png" width="300px" /><br>
<img src="http://www.color-hex.com/palettes/185.png" width="500px" />

## Logos
A logo is the graphical mark used to represent your brand. Logos are either purely graphical, using just a symbol, purely text-based, or both. 

<img src="http://img2.wikia.nocookie.net/__cb20130408234459/logopedia/images/c/ce/Disney.svg" width="300px" /><br>
<img src="http://img3.wikia.nocookie.net/__cb20110518181144/logopedia/images/7/7b/746px-Coca-Cola_logo_svg.png" width="300px" /><br>
<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/834px-Apple_logo_black.svg.png" width="200px" />

## Icons
Icons serve an important place in web design. They help users navigate without using text links and help enrich interfaces without taking up a lot of space. 

Take a look at these Facebook icons. Do you know what each of them means?
<img src="http://i.imgur.com/nLDgoY5.png" />

# Lesson 
In the following lesson you'll edit the HTML and CSS to change the look of the app.

## What is the Ionic Framework, and where does it fit?
Ionic is an HTML5 mobile app development framework targeted at building hybrid mobile apps. Hybrid apps are essentially small websites running in a browser shell in an app that have access to the native platform layer. Hybrid apps have many benefits over pure native apps, specifically in terms of platform support, speed of development, and access to 3rd party code. You can read more about Ionic on [their website here](http://ionicframework.com/). 

## First things first
1. Login to Cloud 9 at [https://c9.io](https://c9.io)
2. Click Create New Workspace > Clone From URL
3. Paste this URL where it says Source URL: https://github.com/OperationSpark/shoutout.git
4. Wait for your instance to finish loading and open it. It's called Shoutout.
5. Click on the terminal window at the bottom and type `npm install -g cordova ionic` which installs the Ionic Framework onto Cloud 9.
6. Once it's done we need to switch to a different Git branch by typing `git checkout Design`
7. And finally type `ionic serve $PORT` to load up the app. If it gives you two options like the image below just choose the first one by typing 1 and pressing enter.

<img src="http://i.imgur.com/YVsiZbi.png" />

Ok, so our app is loaded! You should be able to see the app by clicking on the link in the green box that pops up.

## HTML
Ionic uses their own custom HTML tags such as `<ion-content>`, `<ion-list>`, and `<ion-item>`. Most of the tags are self explanatory when you look at content or list, for example.  

## CSS
Edit the custom.css inside the css/ directory and follow the instructions inside of each CSS selector. 

```CSS
.shouts .item {
	/* Remove the border */
}
```

### Colors
First we need to choose a color scheme. Remember that color scheme is important! Visit [Adobe Color](https://color.adobe.com/explore/newest/?time=all) to explore some nice color schemes. Choose three for the app. 

You'll need a different color for each of these:
* The background of the app itself
* The header background
* The text across the app

If you want to go crazy you can also choose different colors for the icons and buttons. In order to find the hex value for each color on Adobe Color you can hover over a palette, click "Edit," and you can copy the HEX value which you'll find below each color. 

You'll find the CSS selectors for the main background, header background, and text at the top of the file. Save the file and check out your changes. You should see some new colors!

### Padding


## Editing and saving in Ionic
Save files in Cloud 9 by pressing ctrl + S on the keyboard. When you save a file there's no need to refresh the page. The changes you make are updated in real time as soon as you save. 

## The menu 
The menu.html file inside of the templates/ directory is responsible for the sidemenu on the left. The first menu item, which is for logging in and out, has been included for you to see as an example. It is missing the icon. Visit the [ionicons website](http://ionicons.com/) and choose the icon that you think should be used for the log in and out menu item. You insert icons by using the `<i>` html tag with classes that reference a specific icon. 


`<i class="icon ion-document"></i>`


You need to include the icon class and then the class for the specific icon. Find the class of an icon by clicking on the icon on the website. In this example you would copy ion-arrow-left-c so it would be `<i class="icon ion-arrow-left-c"></i>`

<img src="http://i.imgur.com/E43yakw.png" />

For the second menu item, make the menu item itself "Shoutout" and choose a proper icon like in the last step. You can copy and paste the first menu item to make the rest. Remove the `ng-click="login()"` since that only applies to the login link. Create two more menu items called "Shouts" and "Profile." Choose proper icons for them as well. 

Save your work and view the menu. You should see an icon to the left of the text for each menu item. It will look something like this:
<img src="http://i.imgur.com/OYsfYXs.png" />


This is a good start but the icons and text are too small. How can you increase the size of the icons and menu items? With CSS! Let's go into the custom.css file in /css to make some edits. Find the `.icon` selector and set the font size to 25 pixels. Save the file to look at your changes. You can see that the icons are now bigger. Now let's do the same for the text. Find the `.menu .item` selector and set the font size to 20 pixels. You can see that the icons don't line up vertically centered with the text. Add an `item-icon-left` class to each `ion-item` element to make that happen. Now our menu is done!

## New Shout Out page and forms
Now we're going to style the page where you can add a shout out. The main element in this page is the form. Forms are a great way to collect data from users. In most cases users submit a form and the data is sent to a server for processing. 

When you post on Facebook you are submitting a form:
<img src="http://i.imgur.com/04Snpkf.png" />

In our case, the form creates a post on Facebook. 

Forms will typically use the `<form>` tag along with `<label>` and `<input>` fields to create a form in HTML. In Ionic we use a div with class list like this `<div class="list">` 
instead of the form tag. Open the shoutout.html file in /templates. You'll see an empty `<div>` with the list class. We're going to put three form elements in here:

* A text field to hold the name of the person you're creating the shoutout for
* A text field to say where they work
* A file upload field to upload an image

The first two, both text fields, will be almost identical. Create opening and closing `<label>` tags. Give it two classes. One will be `item` and the other is `item-input`. These classes are adding some styling to the form fields. Inside of the `<label>' tags we'll need a form element. That element will be the `<input>` tag. Since these are text fields, give the input a type of text. Notice that the `<input>` tag doesn't have a closting tag, but the  In HTML you can put text inside of a textbox to prompt the user as to what they need to enter. Inside the input tag add some placeholder text. You can see how to use both the type and placeholder attributes [here](http://www.w3schools.com/tags/att_input_placeholder.asp). The text should be something like "Who helped you out?"

Do the exact same thing underneath, with label and input tags, and make the placeholder text something like "Where do they work?"

So you should have an input tag with a label tag wrapped around it and nd there should be two which are identical but have different placeholder text. 

Last but not least we need a file upload field to add a photo. 










