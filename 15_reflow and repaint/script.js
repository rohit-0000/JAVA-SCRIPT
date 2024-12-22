// code :- 1

const t1 = performance.now();
for (let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para no. :- " + (i + 1);
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log("Time taken by code = " + (t2 - t1));

// code :- 2
const t3 = performance.now();
let mydiv = document.createElement('div');
for (let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para no :- " + (i + 100);
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("Time taken by code = " + (t4 - t3));

//reflow vs repaint
// reflow is process of calculating position/ dimensions of Element.
//it is computationally intensive task;
// it consume more time;

//repaint is process of displaying content/element pixel by pixel
//it consume less time.

// eg:- in  code 1 we are using 100 reflow and 100 repaint .because we are printing para 100 times in display
// but in code 2 we are using 1 reflow and 1 repaint , in this code we are storing in div and only one time use are displaying whole div.


// Document Fragement: it is light weight document object.
// it does not do any repaint and reflow while addition or append in it.
// while adding document fragment in document it take 1 reflow and 1 repaint that time only.

//best code
const t5 = performance.now();
let Fragement=document.createDocumentFragment();
for(let i=200;i<=300;i++)
{
    let para=document.createElement('p');
    para.textContent="This is para " + i;
    Fragement.appendChild(para);
}
document.body.appendChild(Fragement);
const t6 = performance.now();
console.log("Time taken by code = " + (t6 - t5));
