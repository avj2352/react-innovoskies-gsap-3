# Creative React Powered Innovoskies application

# Objective

- Creative
- Wordpress Backend
- Blogs
- Works
- Products
- Free Templates

# SVG Animations

- For `img src, object, embedded, background url & iframe` you can only designate animation if inside the SVG.
- But with _`inline SVG`_ you can readily play with the animation


# Reference Websites, Tutorials and Links

- [Webiste by Sarah Drasner](https://sarahdrasnerdesign.com/#about)
- [SVG Animation Course](https://www.lynda.com/Web-Development-tutorials/Paths-groups/604272/621322-4.html?srchtrk=index%3a5%0alinktypeid%3a2%0aq%3agsap%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2)
- [Linea Icons Library](http://linea.io/)

# Libraries

```js
{
  "name": "react-innovoskies-gsap",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "node-sass-chokidar": "0.0.3",
    "react": "^16.1.1",
    "react-bootstrap": "^0.31.5",
    "react-dom": "^16.1.1",
    "gsap": "^1.20.3"
  },
  "devDependencies": {
    "css-loader": "^0.28.7",
    "react-scripts": "1.0.17",
    "npm-run-all": "^4.1.1"
  },
  "scripts": {
    "build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

# About SVG's

|ViewBox|ViewPort|
|:------|-------:|
|ViewBox is the SVG container ie., within the confines of `<svg></svg>` tags | ViewPort is the medium, the container which you define in your HTML declaration|
|You have to set the ViewBox|You dont have to setup the ViewPort|


# SVG Path Data

|Path Letter | Path Meaning | Remarks|
|:-----------|:------------:|-------:|
|M,m|moveTo|start of the path or start of a new path
|L,l|lineTo|Capital `L` - absolute, Lowecase `l` - relative|
|H,h|horizontal line drawn from current position||
|V,v|Vertical line drawn from current position||
|Ending Path|||
|Z,z|joins the end of the path|end of the path|

# SVG Curve commands

|Curve Letter | Curve Meaning | Remarks|
|:------------|:-------------:|-------:|
|C,c|cubic-bezier||
|S,s|reflecting cubic-bezier||
|Q,q|quadratic bezier, where both sides share the same control point||
|T,t|command control point that's been reflected||
|A,a|elliptical arc||


# SVG Optimization Methods

- SVGOMG - Jake Arhicbald
- Peter Collingridge's SVG Editor
- SVGO / SVGO-GUI

# Advanced CSS and SASS

## Reference Links

- [Advanced CSS Course Github link](https://github.com/jonasschmedtmann/advanced-css-course)
- [Jona's Resource Page](http://codingheroes.io/resources/)
- [Clippy](bennettfeely.com/clippy/)

# BEM Model (Block__Element--Modifier) Approach:

The BEM Model helps in maintaining low-specificity.

- `Block` - Standalone component that is meaningful on its own
- `Element` - part of a block that has no standalone meaning
- `Modifier` - a different version of the block or an element

```css
.block {

}
.block__element {

}
.block__element--modifier {

}
```

# The 7-1 SASS/LESS Preprocessor Pattern

The `7 folders/partials` for good SASS Architecture are as follows

- base/
- components/
- layout/
- pages/
- themes/
- abstracts/
- vendors/

and one `main.scss` to import all the partials

```scss
@import base/base;
@import components/components;
@import layout/layout;
@import pages/pages;
@import themes/themes;
@import abstracts/abstracts;
@import vendors/vendors;
```

# Mixins, Extends and Functions

## Mixins

---

- `Mixins`: Reusable code

```scss

//Defining a mixin
@mixin clearfix {
    &::after {
        content: "";
        clear:both;
        display:table;
    }
}

@include clearfix;  //Using the mixin

```

## Functions

---

- `Functions`: Funtions unlike mixins can only be used for mathematical return values.

```scss

//Defining a function
@function divide ($a,$b) {
    @return $a / $b ;
}

divide (60,2) * 1px; // The best practice in SASS/CSS is to multiple your values with 1px/em/rem;
```

## Extend

---

- `Extend`: An `extend` does the opposite of a mixin. It copies the selector into the extend defintion. (Mixin copies the css properties into the selector)

```scss
//Defining a mixin
%clearfix {
    &::after {
        content: "";
        clear:both;
        display:table;
    }
}

.btn {
    &:link {
        @extend %clearfix;  //Using the mixin
    }
}

```

# Background Cover and Clip Path

> NOTE: If you are working on CSS with background-images in a `React` application. Then Put all CSS related assets within the `src`.

The following code shows how to set a background cover in REACT scss, 

```scss
.header{
    height:95vh; // At every point the box should 95 of the view port height
    background-image: linear-gradient(to right, 
    $light-green,
    $dark-green),
    url('./../../assets/img/hero.jpg'); // Adding gradient and then the image

    background-size: cover; // Always try to fit the image inside the element
    background-position: top; //The top of the image always stays on top, the bottom can get cropped

    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);  //Adding a polygon so that the element will still get a shape
    // clip-path:polygon(50% 0, 100% 100%, 0 100%);
}//end:class-header
```

# Clip Part - Polygon in CSS3

Another new feature in CSS 3 is the `clip-path: polygon();` 
- Click here to see the clip-path in action: [Clippy](http://bennettfeely.com/clippy/)

```scss
.header{
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);  //Adding a polygon so that the element will still get a shape
}
```

# Another way to center div elements

You know the previous way to center div elements

- Put `text-align` as center on the parent div
- Put `margin 0 auto` on the child element to be centered.

The following code shows another way to center the div element, using `position:absolute` and `translate` scripts

```scss
.text-box{
        position: absolute;
        top:45%; // This will move the entire box from top
        left:50%; //This will move the entire box to left
        transform: translate(-50%,-50%);
        
        .heading-primary{
            color: #fff;
            text-transform: uppercase;        
            &-main{
                display: block;
                font-size: 60px;
                font-weight: 400;
                letter-spacing: 25px;
            }
            &-sub{
                margin-top: 20px;
                text-align: center;
                display: block;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 22px;
            }
        }
    }
}//end:class-header
```

# CSS 3 Animations

Animations, using only CSS 3 happens in 2 sections
1. Define the animation: `@keyframes name-of-animation`
1. Invoke the animation: `animation-name: name-of-animation`

## 1.Define the Animation:

```scss
//Animations part - for main and sub spans
// NOTE: Browsers are optimized for 2 main propertis - opacity and transform ppty
@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-100px); //We want it to animate in the X-direction
    }
    
    60% {        
        transform: translateX(10px); //We want it to animate in the X-direction
    }
    
    100% {
        opacity: 1;
        transform: translate(0); //Its going to look exactly the same state
    }
}//end:moveInLeft

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(100px); //We want it to animate in the X-direction
    }
    
    60% {        
        transform: translateX(-10px); //We want it to animate in the X-direction
    }
    
    100% {
        opacity: 1;
        transform: translate(0); //Its going to look exactly the same state
    }
}//end:moveInRight

@keyframes fadeIn{
    0% {
        opacity: 0;        
    }

    100% {
        opacity: 1;        
    }
}//end:fadeIn
```

---

## 2.Invoking Animations

```scss
.heading-primary{
            color: #fff;
            text-transform: uppercase;   
            backface-visibility: hidden;    //This is a fix for animation jerk caused in css3. this causes the bacface ppty to be hidden
            &-main{
                display: block;
                font-size: 60px;
                font-weight: 400;
                letter-spacing: 25px;
                //Invoking Animation
                animation-name: moveInLeft;
                animation-duration: 2s;
                animation-timing-function: ease-in-out;
                // animation-iteration-count: 3;
                // animation-delay: 3s;
            }
```

# Pseudo-elements & Pseudo-classes

The following provides an example for the button `pseudo-classes` and `pseudo-elements`


```jsx
<a href="#" className="btn btn-white">Explore !</a>
```

```scss
//Pseudo-class are special state of a selector
        .btn{                        
            margin-top: 20px;
            display: inline-block;
            padding:10px 40px;
            border-radius: 100px;
            text-transform: uppercase;
            text-decoration: none;             
            //:link is a special state of the button selector        
            &:link{
                text-transform: uppercase;
                text-decoration: none;
            }
            //:visited is a special state of the button selector
            &:visited{ 
                transition: all .2s; // Since this is the default state - we are telling to animate by default HERE !!                       
            }
            &:hover{
                transform: translateY(-4px);
                box-shadow: 0 10px 20px rgba(0,0,0,.2);//offset in the x y direction, blur,
            }
            &:active{
                transform: translateY(-2px);
                box-shadow: 0 5px 5px rgba(0,0,0,.2);//offset in the x y direction, blur,
            }
            &-white{
                background-color: white;
                color: $button-grey;
            }
        }//end:.btn
```
## Pseudo-Elements

- `:after` > It acts like virtual elements `AFTER` the main element link

```scss
$button-grey:#777;

//Pseudo-class are special state of a selector
.btn{    
    position: relative; // We are making the button relative so that the pseudo-element can be absolute and behind this button                  
    margin-top: 20px;
    display: inline-block;
    padding:10px 40px;
    border-radius: 100px;
    text-transform: uppercase;
    text-decoration: none;
              
    //:link is a special state of the button selector        
    &:link{
        text-transform: uppercase;
        text-decoration: none;
    }
    //:visited is a special state of the button selector
    &:visited{ 
        transition: all .2s; // Since this is the default state - we are telling to animate by default HERE !!                       
    }
    &:hover{
        transform: translateY(-4px);
        box-shadow: 0 10px 20px rgba(0,0,0,.2);//offset in the x y direction, blur,
        &::after{
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }//end:hover
    &:active{
        transform: translateY(-2px);
        box-shadow: 0 5px 5px rgba(0,0,0,.2);//offset in the x y direction, blur,
    }
    &-white{
        background-color: white;
        color: $button-grey;
        &::after{
            background-color: white;            
        }    
    }//end:-white

    &-animated{
        animation: moveInBottom .5s ease-out .75s; 
        animation-fill-mode: backwards; //It will automatically apply the styles 0% before the animation begins
    }//end:-animated

    //Pseudo element - virtual elements needs a content AND display property
    //By Default the content inside the after pseudo-element is treated as a CHILD of the enclosing element
    &::after{
        content:"";
        display: inline-block;
        width: 100%; // This makes the virtual element the same dimension as that of the parent element.
        height: 100%;
        border-radius: 100px;
        position: absolute;
        top:0;
        left:0;
        z-index: -1; //Commenting this line, you will see that it's ahead of the button :)
        transition: all .4s; //since this is the initial virtual dom state
    }//end::after
}//end:.btn

@keyframes moveInBottom {
    0%{
        opacity: 0;
        transform: translateY(100px);
    }
    100%{
        opacity: 1;        
        transform: translate(0);
    }
}
```

# Creating a Button Component using React, Classnames and SCSS

The following provides a Pseudo-code on how to leverage the power of `SASS`, using `React`, `Classnames` and `SCSS`:


1. Our Button Component is fairly simple, with just minimal line of code.
> `button.jsx`

```js
import React, {Component} from 'react';
import classnames from 'classnames';
import './button.css';
class Button extends Component{

    constructor(props,context){
        super(props,context);
    }//end:constructor

    render(){
        const {text,color} = this.props;
        let buttonClass = classnames({
            'btn':true,
            'btn-animated':true,
            'btn-white':color=='white',
            'btn-green':color=='green',
            'btn-blue':color=='blue',
            'btn-red':color=='red',
            'btn-gold':color=='gold',
        })
        return(
            <a href="#" className={buttonClass}>{text}</a>
        );
    }//end:render

}//end:Button

export default Button;
```


2. All the main Animation, Styling and Layout of the Button, happens in the `button.scss` file:

> `button.scss`

```scss
$button-grey:#777;
$button-green: rgb(41, 182, 128);
$button-blue: rgb(39, 112, 214);
$button-red: rgb(201, 24, 24);
$button-gold: rgb(236, 178, 76);


//Pseudo-class are special state of a selector
.btn{    
    position: relative; // We are making the button relative so that the pseudo-element can be absolute and behind this button                  
    margin-top: 20px;
    display: inline-block;
    padding:10px 40px;
    border-radius: 100px;
    text-transform: uppercase;
    text-decoration: none;
              
    //:link is a special state of the button selector        
    &:link{
        text-transform: uppercase;
        text-decoration: none;
    }
    //:visited is a special state of the button selector
    &:visited{ 
        transition: all .2s; // Since this is the default state - we are telling to animate by default HERE !!                       
    }
    &:hover{
        transform: translateY(-4px);
        box-shadow: 0 10px 20px rgba(0,0,0,.2);//offset in the x y direction, blur,
        &::after{
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }//end:hover
    &:active{
        transform: translateY(-2px);
        box-shadow: 0 5px 5px rgba(0,0,0,.2);//offset in the x y direction, blur,
    }

    //NOTE: This is the place where you add new colors, to button element
    &-white{
        background-color: white;
        color: $button-grey;
        &::after{
            background-color: white;            
        }    
    }//end:-white

    &-green{
        background-color: $button-green;
        color: white;
        &::after{
            background-color: $button-green;
            color: white;            
        }    
    }//end:-green

    &-blue{
        background-color: $button-blue;
        color: white;
        &::after{
            background-color: $button-blue;
            color: white;            
        }    
    }//end:-blue

    &-red{
        background-color: $button-red;
        color: white;
        &::after{
            background-color: $button-red;
            color: white;            
        }    
    }//end:-red

    &-gold{
        background-color: $button-gold;
        color: white;
        &::after{
            background-color: $button-gold;
            color: white;            
        }    
    }//end:-gold

    //Place where you add new colors, to button element - ends here

    &-animated{
        animation: moveInBottom .5s ease-out .75s; 
        animation-fill-mode: backwards; //It will automatically apply the styles 0% before the animation begins
    }//end:-animated

    //Pseudo element - virtual elements needs a content AND display property
    //By Default the content inside the after pseudo-element is treated as a CHILD of the enclosing element
    &::after{
        content:"";
        display: inline-block;
        width: 100%; // This makes the virtual element the same dimension as that of the parent element.
        height: 100%;
        border-radius: 100px;
        position: absolute;
        top:0;
        left:0;
        z-index: -1; //Commenting this line, you will see that it's ahead of the button :)
        transition: all .4s; //since this is the initial virtual dom state
    }//end::after
}//end:.btn

@keyframes moveInBottom {
    0%{
        opacity: 0;
        transform: translateY(100px);
    }
    100%{
        opacity: 1;        
        transform: translate(0);
    }
}
```

# Partials using SCSS

Partials are files which contain intermediate code to be used in the project. SASS Identifies Partials using the `@import` command:

1. Create a folder in your SASS project > `sass/base/_base.scss`
1. But to import you simply type as follows:

```scss
@import "base/base"; //SASS knows that you are looking for the _base.scss partial file.
```

# Mixins, Not() , Calc() & Attribute Ppty [] in SASS / CSS functionality:


The following code provides a comprehensive understanding of all following topics: 

- `Mixins:` Two ways to define and invoke a mixin
    - `@mixin` mixin-name {}
    - `@include` mixin-name;
- `.not()` : the `.not()` functionality in CSS, helps in isolating a particular element
```scss
div:not(:last-child){
        margin-bottom: 10px; // This means apply the margin to all but not the last div
```
- `.calc()` : The `.calc()` functionality is a pure CSS function, used to provide mathematical calculations.
- `[]` selector : The `[]` selector along with the following `wildcards`, can be used to select any element
    - `^=` : Any attribute which begins with
    - `*=` : Any attribute which contains
    - `$=` : Any attribute which ends with

- To create a Mixin, all you have to do is as follows:

> `_mixins.scss`

```scss
/*
* author: Pramod AJ
* date: 29th Nov 2017
* description: Common mixins will be provided here
*/

@mixin clearfix {
    &::after{
        content:""; //Without the content ppty, a pseudo-element will not appear on the page.
        display: table; // Standard version of the clearfix
        clear:both;
    }
}//end:clearfix
```

> `_grid.scss`

```scss
//NOTE: Remember 10px is 1 rem;
.row {
    max-width:$grid-width; //Standard for mordern browsers - 
    background-color: $color-dull-white; 
    margin: 0 auto;
    //Without the not(), this would select the last child, but with not we can continue our original styling
    //not(:last-child) - Everything, except the last child element
    &:not(:last-child){
        margin-bottom: $gutter-vertical;
    }//end::not
    // in CSS there is a powerful function called calc()
    @include clearfix;
    // with CSS calc() we can mix in units, this is not possible using SASS functions
    
    //Attribute selector to apply to all the columns
    //^= we can select the attributes which start with 
    //*= we can select the attribute with contain
    //$= we can select the attribute with end with

    [class^="col-"] {
        background-color: orangered;
        float: left;
        &:not(:last-child){
            margin-right: $gutter-horizontal;
        }
    }//end:[class]

    .col-1-of-2 {
        width: calc((100% - #{$gutter-horizontal}) / 2);        
    }//end:.col-1-of-2
    
    .col-1-of-3{
        width: calc((100% - 2 * #{$gutter-horizontal}) / 3);
    }//end:.col-1-of-3

    .col-1-of-4{
        width: calc((100% - 3 * #{$gutter-horizontal}) / 4);
    }//end:.col-1-of-4

    .col-2-of-3{
        width: calc(2*((100% - 2 * #{$gutter-horizontal}) / 3) + #{$gutter-horizontal});
    }//end:.col-2-of-3

    .col-2-of-4{
        width: calc(2*((100% - 3 * #{$gutter-horizontal}) / 4) + #{$gutter-horizontal});
    }//end:.col-2-of-4

    .col-3-of-4{
        width: calc(3*((100% - 3 * #{$gutter-horizontal}) / 4) + 2*(#{$gutter-horizontal}));
    }//end:.col-3-of-4

}//end:row
```

# Important statement for the Website

Innovation is in our DNA, and innovation goes hand-to-hand with transformation. So looking at the events in 2017 as well as our plans for the future, you can count 100% on this common denominator. In fact, there are three strong common denominators that bonds us: meaningful INNOVATION, our determination to serve our CUSTOMERS and the conviction to make bets in our TEAMS.
