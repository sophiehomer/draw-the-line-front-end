const logo = document.querySelectorAll('#logo path');
const line = document.querySelectorAll('#line path')
for(let i = 0; i <logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

// for(let i = 0; i <line.length; i++) {
//     console.log(`Line ${i} is ${logo[i].getTotalLength()}`);
// }