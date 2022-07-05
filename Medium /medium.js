var cap = prompt("Enter a word or phrase");


if (cap== cap.toUpperCase()){
    console.log("Person is shouting (they typed in all caps)");
}

else if (cap== cap.toLowerCase()){
    console.log("Person is whispering (they typed in all lowercase)")
}

else {
    console.log("person is talking normally")
}
