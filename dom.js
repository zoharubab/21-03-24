function update() {
    console.log("Updating results");
    var input = document.getElementById('myinput');
    var output = document.getElementById('output'); 
    //console.log(input.value);
    output.innerHTML = input.value;
}