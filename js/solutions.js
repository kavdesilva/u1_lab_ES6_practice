
// // part 1 - spreading

const evens = [2, 4, 6];
const odds = [1, 3, 5];
const nums = [...evens, ...odds, 8, 9, 10];

console.log(nums)

// // part 2 - merging

const kristinaFavFoods = {
    'ramen': {restaurant: 'ramen hood'},
    'patacon vegetariano': {restaurant: 'patacon pisao'},
    'impossible whopper': {restaurant: 'burger king'}
}

const taylorFavFoods = {
    'vegetable soup': {restaurant: 'panera'},
    'margherita flatbread': {restaurant: 'starbucks'},
    'artichoke dip': {restaurant: 'ruby tuesdays'}
}

const allFoodsTogether = {...kristinaFavFoods, ...taylorFavFoods}

console.log(allFoodsTogether)

// part 3 - destructuring

const kristinaRex = {
    firstName: 'kristina',
    age: 32,
    hometown: 'brooklyn'
}

const {firstName, age, hometown} = kristinaRex
console.log(firstName)
console.log(age)
console.log(hometown)

const pet = 'dog'
const kristinaAndPet = {...kristinaRex, ...pet}

const petAge = 8
const petBreed = 'morkie'
const petName = 'minnie'

const petDetails = {
    pet,
    petName,
    petAge,
    petBreed
}

const kristinaAndPetDetails = {...kristinaRex, ...petDetails}
console.log(kristinaAndPetDetails)