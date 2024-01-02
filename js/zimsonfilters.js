function filterWatches() {
    
    const minPrice = parseInt(document.getElementById('currentValue').value) ||  Infinity;
    const maxPrice = parseInt(document.getElementById('maxValue').value)||7999 ;

   
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    const genderValue = selectedGender ? selectedGender.value : null;

   
    const selectedCollections = document.querySelectorAll('input[name="collection"]:checked');
    const collectionValues = Array.from(selectedCollections).map(collection => collection.value);

    const watches = Array.from(document.getElementsByClassName('watchesname'));
    
    // const filteredWatches = Array.from(document.getElementsByClassName('watchesname')).filter(watch => {
        watches.forEach(watch => {
       const price = parseInt(watch.getAttribute('data-price').replace('₹', '').replace(',', ''));
        const gender = watch.getAttribute('data-gender');
        const collection = watch.getAttribute('data-collection');
        console.log(price);

        const priceCondition = price >= minPrice && price <= maxPrice;
        const genderCondition = !genderValue || gender === genderValue;
        const collectionCondition = collectionValues.length === 0 || collectionValues.includes(collection);

        
        const shouldDisplay = priceCondition && genderCondition && collectionCondition;
        watch.style.display = shouldDisplay ? 'block' : 'none';
        
        // console.log(priceCondition ,genderCondition,collectionCondition)
        // return priceCondition && genderCondition && collectionCondition;
    });

    // Array.from(document.getElementsByClassName('watchesname')).forEach(watch => watch.style.display = 'none');

    // filteredWatches.forEach(watch => watch.style.display = 'block');
}

document.getElementById('myRange').addEventListener('input', function () {
 var sliderValue = this.value;
    document.getElementById('currentValue').value = sliderValue;
    filterWatches();
});

document.querySelectorAll('input[name="gender"]').forEach(gender => {
    gender.addEventListener('change', filterWatches);
});

document.querySelectorAll('input[name="collection"]').forEach(collection => {
    collection.addEventListener('change', filterWatches);
});

Array.from(document.getElementsByClassName('watchesname')).forEach(watch => watch.style.display = 'block');


filterWatches();











































// document.addEventListener("DOMContentLoaded", function () {
//     var slider = document.getElementById("myRange");
//     var currentValue = document.getElementById("currentValue");
//     var maxValue = document.getElementById("maxValue");

//     console.log("Slider element:", slider);
//     slider.value = slider.min;

//     // Set initial values for the input boxes
//     currentValue.value = slider.value;
//     maxValue.value = "19998"; // Corrected value

//     // Event listener for slider input
//     slider.oninput = function () {
//         currentValue.value = this.value;
//         filterWatches(); // Call filterWatches when the range input changes
//     };

//     // Event listener for current value input
//     currentValue.addEventListener("input", function () {
//         // Validate the input, allowing users to type the required numbers
//         var enteredValue = parseFloat(currentValue.value);
//         if (!isNaN(enteredValue) && enteredValue >= parseFloat(slider.min) && enteredValue <= parseFloat(slider.max)) {
//             slider.min = enteredValue; 
//             if (slider.value < enteredValue) {
//                 slider.value = enteredValue; // Adjust the slider value if it's less than the entered value
//             }
//             filterWatches(); // Call filterWatches when the input value changes
//         }
//     });

//     // Event listener for max value input
//     maxValue.addEventListener("input", function () {
//         // Validate the input, allowing users to type the required numbers
//         var enteredValue = parseFloat(maxValue.value);
//         if (!isNaN(enteredValue) && enteredValue >= parseFloat(slider.min) && enteredValue <= parseFloat(slider.max)) {
//             // You may want to update the slider max value here if needed
//             filterWatches(); // Call filterWatches when the input value changes
//         }
//     });
  
//       const watches = document.querySelectorAll(".watchesname");
  
//       // Iterate through each watch
//       watches.forEach((watch) => {
//         const gender = watch.dataset.gender;
//         const collection = watch.dataset.collection;
//         const price = parseFloat(
//           watch.dataset.price.replace("₹", "").replace(",", ""),
//         );
    
//         if (isNaN(price)) {
//           // Handle the case where price is not defined
//           console.error("Price is not defined for the watch:", watch);
//         } else {
//           // Do something with the values
//           console.log(
//             `Gender: ${gender}, Collection: ${collection}, Price: ${price}`
//           );
//         }
//       });
  
  
//       let selectedGender = [];
  
//     // Function to handle gender filter selection
//     function handleGenderSelection(gender) {
//       selectedGender = [gender];
//       // Additional code to apply the filter
//     }
  
//     function filterWatches() {
//         console.log("Filtering watches...");
    
//         // Get the selected gender, collection, and price values
//         const selectedGenderInput = document.querySelector('input[name="gender"]:checked');
//         const selectedGender = selectedGenderInput ? selectedGenderInput.value : "all";
    
//         const selectedCollectionInputs = document.querySelectorAll('input[name="collection"]:checked');
//         const selectedCollection = Array.from(document.querySelectorAll('input[name="collection"]:checked')).map(input => input.value.toLowerCase());
    
//         const priceFilterElement = document.getElementById("priceFilter");
//         const selectedPrice = priceFilterElement.querySelector(".slider").value;
//         const priceValue = selectedPrice === "all" ? Infinity : parseFloat(selectedPrice);
    
//         console.log("Selected Gender:", selectedGender);
//         console.log("Selected Collection:", selectedCollection);
//         console.log("Selected Price:", priceValue);
    
//         // Iterate through each watch and determine if it should be visible
//         const watches = document.querySelectorAll(".watchesname");
//         watches.forEach(watch => {
//             const watchGender = watch.dataset.gender;
//             const watchCollection = watch.dataset.collection.toLowerCase();
//             const watchPrice = parseFloat(watch.dataset.price.replace(/[^\d.]/g, ""));
    
//             const isGenderMatch = selectedGender === "all" || watchGender === selectedGender;
//             const isCollectionMatch = selectedCollection.length === 0 || selectedCollection.includes(watchCollection);
//             const isPriceMatch = selectedPrice === "all" || priceValue >= watchPrice;
    
//             const isVisible = isGenderMatch &&  isCollectionMatch &&  isPriceMatch;
    
//             watch.style.visibility = isGenderMatch ? "visible" :"hidden";
//             watch.style.display = isGenderMatch ? "block" : "none";

//             watch.style.visibility = isCollectionMatch ? "visible" :"hidden";
//             watch.style.display = isCollectionMatch ? "block" : "none";

//             watch.style.visibility = isPriceMatch ? "visible" :"hidden";
//             watch.style.display = isPriceMatch ? "block" : "none";




//             // watch.style.visibility = isVisible ? "visible" : "hidden";
    
//             console.log("Watch Visibility:", watch.style.visibility);
//             console.log("Watch Display:", watch.style.display);
//         });
//     }
// });