"use strict";
let Guest_List = ['Shumaila', 'Shafaq', 'Iqra'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mrs. ' +  Guest_List[i] + ' , \n\nIt is our pleasure to invite you in our dinner party.\n\nThank you!\n\n')
// }
let Absent_Guest = 'Iqra';
let new_Guest = 'Shahtaj';
Guest_List[2] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mrs. ' +  Guest_List[i] + ' , \n\nIt is our pleasure to invite you in our dinner party.\n\nThank you!\n\n')
// }
console.log(`Mrs. ${Absent_Guest} is not coming to the party. `);
console.log('Good News! We find Big Table So we are inviting 3 more guests.');
Guest_List.unshift(' Syeda Hafsa');
Guest_List.splice(2, 0, 'Saman Sarfaraz');
Guest_List.push('Romica');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mrs. ' + Guest_List[i] + ' , \n\nIt is our pleasure to invite you in our dinner party.\n\nThank you!\n\n');
}
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mrs. ${remove_Guest}, You are not invited for Dinner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mrs. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);