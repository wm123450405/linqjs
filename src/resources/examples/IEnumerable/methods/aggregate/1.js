let fruits = [ "apple", "mango", "orange", "passionfruit", "grape" ];

// Determine whether any string in the array is longer than "banana".
let longestName =
	fruits.asEnumerable().aggregate("banana",
		(longest, next) =>
			next.length > longest.length ? next : longest,
		// Return the final result as an upper case string.
		fruit => fruit.toUpperCase());

console.log(`The fruit with the longest name is ${ longestName }`);

// This code produces the following output:
//
// The fruit with the longest name is PASSIONFRUIT.