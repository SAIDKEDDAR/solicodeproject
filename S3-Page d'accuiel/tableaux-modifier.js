let notes = [12, 8, 15, 9, 17, 14];
notes[1] = 10;
let index = notes.length - 1;
notes[index] = 20;
console.log(notes);
console.log(notes.length);
console.log(notes[0]);
index = notes.length - 2;
console.log(notes[index]);