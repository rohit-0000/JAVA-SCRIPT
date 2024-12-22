let name = "ROHIT KUMAR";
console.log(name);

let name1 = 'Vineet heramath';
console.log(name1);

let temp = `I am
coading`;
console.log(temp);

//concatenation
{
    let firstName = "Mayank";
    let lastName = "Pandey";
    let fullName = firstName + " " + lastName;
    console.log(fullName);

    //Output : Mayank Pandey
}

{
    let string1 = "Mai pal do pal ka shayar hoon";
    let string2 = "Pal do pal meri kahani hai";
    let multiLineString = `
    ${string1},
    ${string2}`;
    console.log(multiLineString);

    /*
    Output :
        Mai pal do pal ka shayar hoon,
        Pal do pal meri kahani hai
    */
}

//upercase and lowercase and length
{
    let str="RAM";
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    console.log(str.length);
}

//split and join
{
    let sentance="I am rohit";
    let word=sentance.split();
    console.log(word);

    let JOIN=word.join("");
    console.log(JOIN);
}

//substring
{
    let str="asdfghjk";
    console.log(str);
    console.log(str.substring(2));//dfghjk
    console.log(str.substring(2,3));//d
}