/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
 function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    
    return listings;
}

const listingsArray = generateListings(37);
console.log(listingsArray);

//forEach
listingsArray.forEach(listing => console.log(listing.size));

//map
const listingsArrayPrices = listingsArray.map(listing => listing.price);
console.log(listingsArrayPrices);

//filter
//array of cheap listings
const cheapListingsArray = listingsArray.filter(
    listing => listing.price < 5000
);
console.log(cheapListingsArray);

//array of expensize listings prices
const expensiveListingsArrayPrices = listingsArray.filter(
    listing => listing.price >= 5000
).map(listing => listing.price);
console.log(expensiveListingsArrayPrices);

//array of listings that have parking
const parkingListingsArray = listingsArray.filter(
    listing => listing.facilities.includes('Parkering')
);

console.log(parkingListingsArray);

//Listing Project 

//Filter listings
const listings = generateListings(20);

const filter = {
    type: 'Farm',
    facilities: ['Parkering'],
    minPrice: 10,
    maxPrice: 5000,
    hasGarden: false,
    minSize: 10,
    maxSize: 20,
};

// function filterListings(listings, filter) {
//    return listings.filter(listing => listing.type === filter.type);
// }

const filterListings = (listings, filter) => {
    return listings.filter(listing => 
        filter.type? listing.type === filter.type: true //it gives all the listings if the type is undefined
    ).filter(listing => 
        filter.maxPrice? listing.price > filter.maxPrice: true
    );
}

// const filters = {
//     type: 'Apartment',
//     facilities: 'Parkering',
//     minPrice: 4000,
//     maxPrice: 10000,
//     //   hasGarden: false,
//     //   minSize: 10,
//     //   maxSize: 20,
//   }
  
//   const filterListings = (listings, filters) => {
//     return listings.filter((listing) => {
//       const typeFilter = filters.type ? filters.type === listing.type : true
//       const facilitiesFilter = filters.facilities
//         ? listing.facilities.includes(filters.facilities)
//         : true
  
//       const minPriceFilter = filters.minPrice
//         ? filters.minPrice < listing.price
//         : true
  
//       const maxPriceFilter = filters.maxPrice
//         ? filters.maxPrice > listing.price
//         : true
  
//       const hasGardenFilter = filters.hasGarden ? listings.hasGarden : true
  
//       return (
//         typeFilter &&
//         facilitiesFilter &&
//         minPriceFilter &&
//         maxPriceFilter &&
//         hasGardenFilter
//       )
//     })
//   }

const farmListings = filterListings(listings, filter);
console.log(farmListings);

