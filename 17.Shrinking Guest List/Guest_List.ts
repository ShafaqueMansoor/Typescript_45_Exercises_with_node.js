

//Make a list that includes at least three people you’d like to invite to dinner.

let Guest_List :string[] = ['Shumaila','Shafaq','Iqra'];

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mrs. ' +  Guest_List[i] + ' , \n\nIt is our pleasure to invite you in our dinner party.\n\nThank you!\n\n')
// }


//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let Absent_Guest :string = 'Iqra' ;

let new_Guest :string = 'Shahtaj' ;

Guest_List[2] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mrs. ' +  Guest_List[i] + ' , \n\nIt is our pleasure to invite you in our dinner party.\n\nThank you!\n\n')

// }

console.log(`Mrs. ${Absent_Guest} is not coming to the party. `);

//Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log('Good News! We find Big Table So we are inviting 3 more guests.')
// Think of three more guests to invite to dinner.
Guest_List.unshift(' Syeda Hafsa') ;
Guest_List.splice(2 , 0 , 'Saman Sarfaraz');
Guest_List.push('Romica');

//Print a new set of invitation messages, one for each person in your list.
for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mrs. ' +  Guest_List[i] + ' , \n\nIt is our pleasure to invite you in our dinner party.\n\nThank you!\n\n')

}
// prints a message saying that you can invite only two people for dinner.
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');

// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mrs. ${remove_Guest}, You are not invited for Dinner.`);
 }

// Print a message to each of the two people still on your list, letting them know they’re still invited.

 for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mrs. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
Guest_List.splice(0, 2);
console.log(Guest_List);