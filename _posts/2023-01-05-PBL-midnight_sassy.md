---
toc: true
comments: false
layout: post
title:  UX, Midnight Theme and SASS
description: User Experience tips on customizing Midnight theme, plus concepts and terms on using SASS.  Contributions on SASS from Charlie Zhu, class of 2022.
categories: []
type: pbl
week: 17
---


## User Experience Design
* At Qualcomm, I was involved in projects related to Customer Experience.  In this design phase,  Corporate  User Experience designers would  create concepts of what that system would look like.  As a second phase, I would give those concepts to Frontend Designers that would put the concepts into code with motion.   We are trying to simulate these steps through Markdown, a little HTML, images, etc.  In this process, we can build a concept of a system, prior to having functional code behind the scenes, aka JavaScript, APIs, Backend.

### Build GitHub pages SASS files
* Build and explore the output of scss.  

- Build per instruction in Project README
    - bundle exec jekyll serve -H 0.0.0.0 -P 4002
- After you do this, make sure .gitignore blocks 
```
### Jekyll ###
_site
.sass-cache
.jekyll-cache
.jekyll-metadata
```
- Explore output CSS, for example look at customization for h1, h2, ...
    - _site/assets/css/style.css
- Look at other assets, see all the work that goes into Style.  Learn to leverage off of it.  Learn to customize on top of it using SASS tips in the blog.

### Stylesheet Notes from [Midnight Theme](https://github.com/pages-themes/midnight/blob/master/README.md#stylesheet)

Altering GitHub theme and adding custom styles:

1. Create a file called `/assets/css/style.scss` in your site
2. Add the following content to the top of the file, exactly as shown:
    ```scss
    ---
    ---

    @import "{{ site.theme }}";
    ```
3. Add any custom CSS (or Sass, including imports) you'd like immediately after the `@import` line

*Note: If you'd like to change the theme's Sass variables, you must set new values before the `@import` line in your stylesheet.*

### Layouts Notes from [Midnight Theme](https://github.com/pages-themes/midnight/blob/master/README.md#layouts)

If you'd like to change the theme's HTML layout:

1. For some changes such as a custom `favicon`, you can add custom files in your local `_includes` folder. The files [provided with the theme](https://github.com/pages-themes/midnight/tree/master/_includes) provide a starting point and are included by the [original layout template](https://github.com/pages-themes/midnight/blob/master/_layouts/default.html).
2. For more extensive changes, [copy the original template](https://github.com/pages-themes/midnight/blob/master/_layouts/default.html) from the theme's repository<br />(*Pro-tip: click "raw" to make copying easier*)
3. Create a file called `/_layouts/default.html` in your site
4. Paste the default layout content copied in the first step
5. Customize the layout as you'd like

## Welcome to SASS
> SASS helps process a SASS file and compile it like the usual CSS file.  Using SASS let's us leverage off of a lot of implementation that has already been performed, such as GitHub pages.  But it also lets you more programmatically build CSS. 

![image](https://user-images.githubusercontent.com/72889453/149642880-22b11bab-1c1c-4741-999b-77c1697ce1ec.png)

## SASS Prerequisites
> Skip downloads section unless you have issues.

### Downloads / Command Prompt Lines
* Check for `npm --version` to verify install, or download node.js [here](https://nodejs.org/en/) (just download the LTS version).

* This line of code is just used to check that you actually have npm installed, if not run installer :
```
npm --version
```
* Next you will use check for sass :
```
npm view sass version
```

* Install sass if required :
```
npm install -g sass
```

## SASS Tips
### Features / Functionality
* As the great thing about scss is that ***it writes the css for you***, making it much less tedious. There are many aspects as to why it actually simplifies the process.


### Aspect 1: Partials
* Sass naturally transpiles all the .scss files directly. However, when you want to import a file, you do not need the file to be transpiled directly. Sass has a mechanism for this: If you start the filename with an underscore, Sass will not transpile it. Files named this way are called partials and they allow you to work in a much more organized space.
![dwankawkldnalwdlkwandklawjdklajdlkwajdlajwldjalwd](https://user-images.githubusercontent.com/72889453/149645411-25d66017-4dd9-4fa5-8728-2f92cc38eac9.png)


### Aspect 2: Defining Colors / Variables
* Rather than retyping the hexadecimal values of each color every single time, you can define all of the ones you want to use in a partial and then just reference them with $[color] when you want to use it. However, make sure you import the partial into the scss file where you are going to use it in.
``` scss
$light: #f7f7f7;
$dark: #222121;
$lime: #00cc66;
$orangeRed: #fb4b4e;
$blue: #2541b2;
```
* Example shown here:
``` scss
.navbar {
  background: $light; // see how instead of having to retype the hexadecimal, I can just reference it like this WOWOW so COOL
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 10;
  position: relative;
```


### Aspect 3: Nested Styling
* Another unique aspect about scss is that you can actually nest styles, so if you want an aspect like let's say color to apply to everything you are working on for that portion of the html, you can actually nest the rest of the formatting, animations, etc within that definition.
* Implementation shown here with the Hero section in student scss:
``` scss
.hero {
  background-color: $light; // see how the rest of the code is indented / nested within .hero

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    margin: 0 auto;
    height: 90vh;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    padding-right: 24px;
    padding-left: 24px;

    @include tablet { // @include tablet and @include mobile will be explained next
      grid-template-columns: 1fr;
      height: 100%;
    }

    &--left {
      width: 100%;
      line-height: 1.2;

      @include tablet {
        padding: 5rem 0;
      }

      @include mobile {
        line-height: 1.5;
      }
    }

    &--left h1 {
      font-size: 4rem;
      color: $lime;

      @include mobile {
        font-size: 1.5rem;
      }
    }

    &--left h2 {
      font-size: 4rem;
      color: $dark;

      @include mobile {
        font-size: 2rem;
      }
    }

    &--left p {
      font-size: 2rem;
      color: $dark;
      margin-top: 1rem;
      font-weight: 700;

      @include mobile {
        font-size: 1.5rem;
      }
    }

    &--btn {
      font-size: 1rem;
      background-color: $lime;
      padding: 14px 32px;
      border: none;
      border-radius: 4px;
      color: $light;
      margin-top: 2rem;
      cursor: pointer;
      position: relative;
      transition: all 0.3s;
      outline: none;
    }

    &--btn a {
      position: relative;
      z-index: 2;
      color: $light;
      text-decoration: none;
    }

    &--btn:after { // code animates home page button so that it transitions to red when hovered
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: $orangeRed;
      transition: all 0.3s;
      border-radius: 4px;
    }

    &--btn:hover:after {
      width: 100%;
    }

    &--right {
      text-align: center;
    }

    &--img {
      height: 100%;
      width: 100%;
    }
  }
}
```

* You can see how this code works in tandem with the Hero section of the HTML, the class definitions are associated with every definition of styling coded above:

``` html
<!-- Hero HTML, each of the classes here correspond to what's defined above in the scss
<div class="hero">
    <div class="hero__container">
        <div class="hero__container--left">
            <h1>College Apps Are Coming!</h1>
            <h2>Be Prepared</h2>
            <p>Sign up now to join the list.</p>
            <button class="hero__container--btn"><a href="#">Sign Up</a></button>
        </div>
        <div class="hero__container--right">
            <img src="images/img-2.svg" class="hero__container--img" />
        </div>
    </div>
</div>
-->
```


### Aspect 4: Easily Change Formatting Based on Device
* With the power of scss, you can more easily than ever change the formatting of your site based on which device a person is using.
* Such can be done by defining the resolutions in a partial like here:

``` scss
<!--
@mixin tablet {
  @media screen and (max-width: 768px) {
    @content;
  }
}

@mixin mobile {
  @media screen and (max-width: 280px) {
    @content;
  }
}
-->
```

* Then you can use @include to reference these resolutions and change the css/formatting based on the device like here:

``` scss
&--left h1 {
  font-size: 4rem;
  color: $lime;

  @include mobile { // in this case the font size changes because it's mobile
    font-size: 1.5rem;
  }
}

&--left h2 {
  font-size: 4rem;
  color: $dark;

  @include mobile {
    font-size: 2rem;
  }
}
```


### Aspect 5: Extending, Inheritance, and Calculations
* In scss, you can also use @extend if you want certain classes to inherit attributes from previously defined classes, sort of similar to nesting inheritance (where the classes nested within inherit the attributes from outermost classes). An example is shown below:

``` scss
<!--
%align-center {
  display: flex;
  align-items: center;
}

logo {
    color: $dark;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    margin-left: 24px;
    @extend %align-center; //it's inheriting the above values for display and align:items
}
-->
```

* Furthermore, you can actually use math operators like multiplication, addition, subtraction and division in scss. In the code below I use it to extend the animation of a button:
``` scss
&--btn:hover:after {
  width: 100% * 4; //makes the animation extend way farther, past the border of the button
}
```


### Supporting Videos
* These are just some videos Charlie found that he thinks are helpful, click on the images to go directly to the videos!
[![IntelliJ and SASS files compile with File watcher](https://img.youtube.com/vi/LtMgTdjWEuk/0.jpg)](https://www.youtube.com/watch?v=LtMgTdjWEuk "IntelliJ and SASS files compile with File watcher")
[![Learn Sass In 20 Minutes | Sass Crash Course](https://img.youtube.com/vi/Zz6eOVaaelI/0.jpg)](https://www.youtube.com/watch?v=Zz6eOVaaelI "Learn Sass In 20 Minutes | Sass Crash Course")

## Hacks
* All hacks related to SASS are with respect to design of your project(s)

