//declare variables to grab the diffrent boxes by ID
var mainBox = document.getElementById("main-box");
var boxes = document.getElementById("grid-container");
var One = document.getElementById("one");
var Two = document.getElementById("two");
var Three = document.getElementById("three");
var Four = document.getElementById("four");
var Five = document.getElementById("five");
var Six = document.getElementById("six");

//call init function
init();

//declare init function
function init() {
    //fade boxes in
    TweenMax.from(mainBox, { autoAlpha: 0, duration: 3 });
    TweenMax.from(boxes, { autoAlpha: 0, duration: 3 });

    //event listeners for the main box
    //highlight box on mouse over
    mainBox.addEventListener("mouseover", () => {
        TweenMax.to(mainBox, { opacity: 0.5 });
    }); //un highlight on ouse out
    mainBox.addEventListener("mouseout", () => {
        TweenMax.to(mainBox, { opacity: 1, duration: 0.5 });
    }); //make box disappear on click
    mainBox.addEventListener("click", () => {
        TweenMax.to(mainBox, { opacity: 0, autoAlpha: 0 });
    });

    //event listeners for box one
    //highlight box on mouse over
    One.addEventListener("mouseover", () => {
        TweenMax.to(One, { opacity: 0.5 });
    }); //un highlight on ouse out
    One.addEventListener("mouseout", () => {
        TweenMax.to(One, { opacity: 1, duration: 0.5 });
    }); //make box disappear on click
    One.addEventListener("click", () => {
        TweenMax.to(One, { opacity: 0, autoAlpha: 0 });
    });

    //event listeners for box two
    //highlight box on mouse over
    Two.addEventListener("mouseover", () => {
        TweenMax.to(Two, { opacity: 0.5 });
    }); //un highlight on ouse out
    Two.addEventListener("mouseout", () => {
        TweenMax.to(Two, { opacity: 1, duration: 0.5 });
    }); //make box disappear on click
    Two.addEventListener("click", () => {
        TweenMax.to(Two, { opacity: 0, autoAlpha: 0 });
    });

    //event listeners for box three
    //highlight box on mouse over
    Three.addEventListener("mouseover", () => {
        TweenMax.to(Three, { opacity: 0.5 });
    }); //un highlight on ouse out
    Three.addEventListener("mouseout", () => {
        TweenMax.to(Three, { opacity: 1, duration: 0.5 });
    });
    Three.addEventListener("click", () => {
        TweenMax.to(Three, { opacity: 0, autoAlpha: 0 });
    });

    //event listeners for box four
    //highlight box on mouse over
    Four.addEventListener("mouseover", () => {
        TweenMax.to(Four, { opacity: 0.5 });
    }); //un highlight on ouse out
    Four.addEventListener("mouseout", () => {
        TweenMax.to(Four, { opacity: 1, duration: 0.5 });
    }); //make box disappear on click
    Four.addEventListener("click", () => {
        TweenMax.to(Four, { opacity: 0, autoAlpha: 0 });
    });

    //event listeners for box five
    //highlight box on mouse over
    Five.addEventListener("mouseover", () => {
        TweenMax.to(Five, { opacity: 0.5 });
    }); //un highlight on ouse out
    Five.addEventListener("mouseout", () => {
        TweenMax.to(Five, { opacity: 1, duration: 0.5 });
    });
    Five.addEventListener("click", () => {
        TweenMax.to(Five, { opacity: 0, autoAlpha: 0 });
    });

    //event listeners for box six
    //highlight box on mouse over
    Six.addEventListener("mouseover", () => {
        TweenMax.to(Six, { opacity: 0.5 });
    }); //un highlight on ouse out
    Six.addEventListener("mouseout", () => {
        TweenMax.to(Six, { opacity: 1, duration: 0.5 });
    }); //make box disappear on click
    Six.addEventListener("click", () => {
        TweenMax.to(Six, { opacity: 0, autoAlpha: 0 });
    });
}