# jQuery is for BALLERS

<img src="https://s3.amazonaws.com/after-school-assets/basketballers.gif" width="300px" hspace="10" align="right">

jQuery is an amazing language that lets us add tremendous power to our websites through animations. You can make elements move around the page, menus slide in and out, and objects disappear from the page. The options are as endless as your creativity. 

In fact, jQuery is so widely used that 75% of the top 100 sites in the world use jQuery. That means that basically every site you look at uses jQuery. And where did jQuery come from? It was developed by a 20 year old college student. 

Curious about sites that use jQuery?: [Pinterest](http://www.pinterest.com), [ESPN](http://www.espn.com)'s pin it button, [Reddit](http://www.reddit.com, [Instagram](http://www.instagram.com)'s infinite scroll to look at images, [Huffington Post](http://www.huffingtonpost.com)'s nav bar, and the list goes on.

Because jQuery is for BALLERS, you're about to become a jQuery BasketBALLER.

## Let's Get Started

### Step 1:

Click `N Open` at the top of this page to open the files in Nitrous so you can edit them.

<img src="https://s3.amazonaws.com/after-school-assets/new-open-in-nitrous.png">

### Step 2: 

Take a look at the files in this directory. Some of the files should look familiar. But some of them might look strange.

<img src="https://s3.amazonaws.com/after-school-assets/js-files.png">

Notice we have a directory called  `js`, and inside of that directory, a file called `ball.js`. Just like we wrote our HTML and CSS in different files, we also write our jQuery in different files. The `js` stands for JavaScript. jQuery is technically a JavaScript library (an enhancement to JavaScript), but for now we're just worrying about jQuery. `js/ball.js` is where you'll be coding your solutions.

### Step 3:

Take a look at `index.html` in the Nitrous text editor. Scroll down to right before the closing `</body>` tag. You'll see something new.

```html
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="js/ball.js"></script>
```

This is the JS equivalent of the `link` tag to link your CSS. We put this at the bottom of the page before the closing `body` tag because we don't want animations to start running before the text and images have loaded on the page!

### Step 4:

Open `index.html` in the browser by running in terminal `python -m SimpleHTTPServer 3000`

You should see this output in the terminal:

<img src="https://s3.amazonaws.com/after-school-assets/started-server.png">

Then select `preview` and then `port 3000`.

<img src="https://s3.amazonaws.com/after-school-assets/nitrous-preview.png" alt="nitrous preview">

You should see a page with a basketball hoop and 4 balls: a basketball, a bowling ball, a beach ball, and a tennis ball. Your goal is to get the balls through the hoop by writing some jQuery.

<img src='https://s3.amazonaws.com/after-school-assets/court.png'>


### Step 5:

Open up `js/ball.js` in the Nitrous text editor. There's going to be a lot of unfamiliar text on this page, but you'll start to understand a lot by the end of this lesson. 

The first line of code on the page is the "Document Ready"

```js
$(document).ready(function(){
  // The rest of the jQuery

});
```

The `$` tells the browser that we're using jQuery specifically. This sets up the web page for you to be able to manipulate the objects on the page with jQuery. Without this line, none of your jQuery would work. You'll notice that all the code is wrapped by `{}`, `()`, and `;`. All of this punctuation is super important to jQuery. It's like finishing a sentence or a paragraph in English with a period.


### Step 6:

<img src="https://s3.amazonaws.com/after-school-assets/bowling-ball.png" align="right" hspace="10">

What we want to happen is that when you click each ball, it flies through the hoop and lands on the ground. We've set up a lot of the code for you--your goal is to use **jQuery Selectors** to apply the pre-written code to the appropriate ball. We're going to start with the bowling ball.

If you take a look at `index.html` in the Nitrous text editor for the code that puts the bowling ball image on the page, you'll notice that it has `id="bowling-ball"`. Just like with CSS, we can use the ID as our jQuery selector to apply a specific animation.

In `js/ball.js`, you'll want to replace `__` with the selector `#bowling-ball`, so that your code looks something like this:

```js 
// selector for bowling ball where you see __ (keep the single quotes!)
  $('#bowling-ball').click(function() {
    $(this).animate({
      bottom: "400px"}).animate({left: "330px"}).animate({top: "45px"}).animate({left: "420px"});
  });
```

`$('#bowling-ball')` is our entire jQuery selector. We need the `$` so the browser again knows we're using jQuery to run the animations. Remember from CSS selectors that `#` stands for an ID and `.` stands for a class.

The rest of the code basically defines what animation will take place once you click the bowling ball. Save your changes to this file and then refresh `index.html` in the browser. Try clicking the bowling ball, you should see the bowling ball fly through the hoop.

If it doesn't work, refresh the page, and then right click anywhere on the page and select `Inspect Element` to bring up the developer tools in Chrome. (Take a look at Lesson 1 if you need help with other browsers). If you click console, it'll bring up the JavaScript console. With the console open, try clicking the bowling ball again. If there is an error with your code, you'll see the error in the console. The error will show up where the highlighted yellow text is in the image below. Usually the error tells you what went wrong, and even what file and line number the error occured.

<img src="https://s3.amazonaws.com/after-school-assets/js-console.png">

 Once you get it working, bowling ball done. &#10003;

### Step 7:

<img src="https://s3.amazonaws.com/after-school-assets/basketball.png" align="right" hspace="10">

Let's shoot the basketball next. If you look at `index.html` you'll notice that the basketball has `class="basketball"`. Again, just like in CSS we can use the class as our jQuery selector in `js/ball.js`. You'll want to replace `__` with `.basketball`:

```js
// Selector for basketball where you see __ (keep the single quotes!)
$('.basketball').click(function() {
  $(this).animate({
    bottom: "400px"}).animate({left: "290px"}).animate({top: "30px"});
});
```

Save your changes to this file, reload the page in the browser (it will reset all the balls)  , and try clicking on the basketball. If it flies through the air, you're good to go! Basketball done. &#10003;


### Step 8:

<img src="https://s3.amazonaws.com/after-school-assets/beachball.png" align="right" hspace="10">

Time to shoot the beach ball. You'll notice in `index.html`, that the beach ball doesn't have a class or an ID. But it does have `alt` text defined. We can use that as our jQuery selector: `img[alt="rainbow beachball"]` If you want a refresher on this specific selector, take a look at the Week 4 lesson. 

We can replace `__` in `js/ball.js` with that selector:

```js
// Selector for beachball where you see __ (keep the single quotes!)
  $('img[alt="rainbow beachball"]').click(function() {
    $(this).animate({
      bottom: "420px"}).animate({left: "200px"}).animate({top: "20px"}).animate({left: "400px"});
  });
```
Save your changes to this file and then refresh `index.html` in the browser. Try clicking on the beach ball. Did you make the shot?!

Beach ball done. &#10003;

### Step 9: 

<img src="https://s3.amazonaws.com/after-school-assets/tennis-ball.png" align="right" hspace="10">

Last but certainly not least, it's time to shoot the tennis ball. In `index.html`, the tennis ball doesn't have an ID, class, or alt text. Sow how can we move it? You'll notice it's nested inside a `div` with the ID `tennis-ball`. We can use a descendant selector this time: `#tennis-ball img`. What this does is select the HTML element with the id `tennis-ball` and then the `img` inside the `div`.

We can plug that in `js/ball.js`:

```js
$('#tennis-ball img').click(function() {
  $(this).animate({
    bottom: "510px"}).animate({left: "190px"}).animate({top: "20px"}).animate({left: "500px"})
});
```

Don't forget to save your changes to the JS file before you refresh in the browser. Click the tennis ball to shoot, and done. &#10003;


## Done and Done

Lastly, you need to enter in terminal in Nitrous `learn submit`. This command will push your work to GitHub and mark this lesson as complete in Learn!

## Share Share Share!
Show of your work by taking a screenshot of your basketball court or code and share with **\#flatironcodeclub** and **\#jQueryBasketBallers**

## Reminder 

Don't forget to shut down your server by hitting `control` and `c` before you move on to other material!




<p data-visibility='hidden'>View <a href='https://learn.co/lessons/hs-code-club-jquery-selectors-basketball' title='jQuery is for BALLERS'>jQuery is for BALLERS</a> on Learn.co and start learning to code for free.</p>
