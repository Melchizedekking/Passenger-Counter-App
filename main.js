// Grab the counte-el element and store it in a variable called count-el
let countEl = document.getElementById("count-el")

// Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

// intialize the count as 0
let count = 0;

// Create a function, increment(), which displays the count when it's called
function increment() {
    // listen for clicks on the increment button
    // console.log("The increment button was clicked!") - Always test if your functon is working correctly.

    // increment the count variable when the button is clicked
    count += 1;

    // change the count-el in the HTML to reflect the new count. For this to work, you need to add an event listener on INCREMENT BUTTON.
    countEl.textContent = count;
    // console.log(count)
}


// Create a function, save(), which logs out the count when it's called
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let both = count + " - ";

    // NB: Make sure to not delete the existing content of the paragraph. It should look like - Previous Entries:1 - 3 - 5 - .. and so on
    // 3. Render the variable in the saveEl using innerText
    // textContent gets the content of all elements, including <script> and <style> elements. innerText only shows human readable elements
    saveEl.textContent += both;
    // console.log(count);

    // reset the count to 0
    countEl.textContent = 0;

    // set count to 0 to start increment from 0
    count = 0;
}