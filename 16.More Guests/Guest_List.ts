

let Guest_List :string[] = ['Shumaila','Shafaq','Iqra'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mrs. ' +  Guest_List[i] + ' , \n\nIt is our pleasure to invite you in our dinner party.\n\nThank you!\n\n')

// }

let Absent_Guest :string = 'Iqra' ;

let new_Guest :string = 'Shahtaj' ;

Guest_List[2] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mrs. ' +  Guest_List[i] + ' , \n\nIt is our pleasure to invite you in our dinner party.\n\nThank you!\n\n')

}

console.log(`Mrs. ${Absent_Guest} is not coming to the party. `);

console.log('Good News! We find Big Table So we are inviting 3 more guests.')

Guest_List.unshift(' Syeda Hafsa') ;
Guest_List.splice(2 , 0 , 'Saman Sarfaraz');
Guest_List.push('Romica');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mrs. ' +  Guest_List[i] + ' , \n\nIt is our pleasure to invite you in our dinner party.\n\nThank you!\n\n')

}