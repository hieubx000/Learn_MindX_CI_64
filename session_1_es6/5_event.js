function sayHello() {
    console.log("Hello, World!");
}

const btnClickMe = document.getElementById("btnClickMe")

btnClickMe.addEventListener("click", function(evt) {
    console.log(this);
    console.log("Hello, world!");
});

btnClickMe.addEventListener("click", (evt) => {
    console.log(this);
    console.log("Hello, world 2!");
});