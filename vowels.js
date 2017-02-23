// Given an array of chracters return the array with every vowel doubled

// what on earth are you talking about?
//myFish.splice(2, 0, 'drum'); 

//wrong version
function doubleVowels(array) {
	var newArr = []
	array.forEach( (character, i) => {
		newArr.push(character)
		if( character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
			newArr.push(character)
		}
	})
	return newArr.join('')
}

// // console.log(doubleVowels('what on earth are you talking about?'.split('')))
//totally works tho ^^^ 
// Uvag #1

// Can you compute the length of the doubled array?

// Uvag #2

// Can you compute the destination index of every character?

// Uvag #3

// Iterating and manipulating the array in reverse can be a powerful technique for avoiding having to shift all elements to the right (thus keeping things O(n)).

// Uvag #4

// Pseudocode:

// count the vowels and thereby computed the required length of the doubled array
// scan the array in reverse from its original end...
// and fill in the array from its new end in reverse, doubling chars and decrementing the index accordingly.






function doubleVowelsX(array) {
	var vowelCount = 0

	for(var i = 0; i < array.length; i++){

		if( array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u') {
			vowelCount++

 			array[i + 1] = array[i]

		}
	}
	return array.join('')
}
console.log(doubleVowelsX('what on earth are you talking about?'.split('')))

//cant splice, cant create new array, 
//

//megashift









