

// Store the locations in a array. Make sure the array is not in alphabetical order

let places :string[] = ['Karachi', 'Islamabad', 'lahore', 'Quetta', 'Multan'];

// Print your array in its original order.

console.log('orginal ' + places);

// Print your array in alphabetical order without modifying the actual list.

console.log('copy ' + [...places].sort());

//Show that your array is still in its original order by printing it.

console.log('orginal ' + places);

//Print your array in reverse alphabetical order without changing the order of the original list.

console.log('copy ' + [...places].sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log('orginal ' + places);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log('orginal ' + places.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('orginal ' + places.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('orginal ' + places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log('orginal ' + places.sort().reverse());