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

# Lesson 
In the following lesson you'll edit the HTML and CSS to change the look of the app.

## What is Ionic, and where does it fit?
Ionic is an HTML5 mobile app development framework targeted at building hybrid mobile apps. Hybrid apps are essentially small websites running in a browser shell in an app that have access to the native platform layer. Hybrid apps have many benefits over pure native apps, specifically in terms of platform support, speed of development, and access to 3rd party code.

## HTML
Ionic uses their own custom HTML tags such as `<ion-content>`, `<ion-list>`, and `<ion-item>`. Most of the tags are self explanatory when you look at content or list, for example.  

## CSS
Edit the custom.css inside the css/ directory and follow the instructions inside of each CSS selector. 

```CSS
.shouts .item {
	/* Remove the border */
}
```

Make it your own by choosing your own background colors, font colors, spacing, and borders. Remember that color scheme is important! Check out [Adobe Color](https://color.adobe.com/explore/newest/?time=all) to explore some nice color schemes.  

## Editing and saving in Ionic
When you save a file there's no need to refresh the page. The changes you make are updated in real time as soon as you save. 

## The menu 
The menu.html file inside of the templates/ directory is responsible for the sidemenu on the left. The first menu item, which is for logging in and out, has been included for you to see as an example. It is missing the icon. Visit the [ionicons website](http://ionicons.com/) and choose the icon that you think should be used for the log in and out menu item. You insert icons by using the `<i>` html tag with classes that reference a specific icon. 


`<i class="icon ion-document"></i>`


You need to include the icon class and then the class for the specific icon. Find the class of an icon by clicking on the icon on the website. 

For the second menu item, make the menu item itself "Shoutout" and choose a proper icon like in the last step. You can copy and paste the first menu item to make the rest. Remove the `ng-click="login()"` since that only applies to the login link. Create two more menu items called "Shouts" and "Profile." Choose proper icons for them as well. 

Save your work and view the menu. You should see an icon to the left of the text for each menu item. 

The menu should now look something like the image below.
<img src="http://cl.ly/image/0B1d3q2C0K1q" />

This is a good start but the icons and text are too small. How can you increase the size of the icons and menu items? With CSS! Let's go into the custom.css file in /css to make some edits. Find the `.icon` selector and set the font size to 25 pixels. Save the file to look at your changes. You can see that the icons are now bigger. Now let's do the same for the text. Find the `.menu .item` selector and set the font size to 20 pixels. You can see that the icons don't line up vertically centered with the text. Add an `item-icon-left` class to each `ion-item` element to make that happen. Now our menu is done!

## New Shout Out page and forms
Now we're going to style the page where you can add a shout out. The main element in this page is the form. Forms are a great way to collect data from users. In most cases users submit a form and the data is sent to a server for processing. 

When you post on Facebook you are submitting a form:
<img src="http://cl.ly/image/2M2p3D3j1I1V" />

In our case, the form creates a post on Facebook. 









