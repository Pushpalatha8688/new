var dataDictionary = {
    "item1": {
        name: "fossil",
        description: " Fossil Reid Gold Dial Women 36mm",
        price: " ₹7,995",
        image: "./BQ3655I.webp" 
    },
    "item2": {
        name: "fossil",
        description: "Fossil Autocross Black Dial Men 44mm",
        price: "₹9,995",
        image: "./BQ2551I.webp" 
    },
    "item3": {
        name: "fossil",
        description: "Fossil Bannon Green Dial Men 4mm",
        price: "₹9,995",
        image: "./BQ2539I.webp" 
    },
    "item4": {
        name: "fossil",
        description: "Fossil Fb-01 Brown Dial Women 44mm",
        price: "₹17,995",
        image: "./CE1121I.webp" 
    },
    "item5": {
        name: "Michael Kors",
        description: "Michael Kors Darci Gold Dial Women 39mm",
        price: " ₹19,995",
        image: "./MK3191_7abcbc43-6c24-4521-910f-cc185df31f2d.webp" 
    },
    "item6": {
        name: "Michael Kors",
        description: " Michael Kors Sofie Rose Gold Dial Women 36mm",
        price: " ₹15,495",
        image: "./MK4335I.webp" 
    },
    "item7": {
        name: "Michael Kors",
        description: "Michael Kors Pyper Black Dial Women 39mm",
        price: " ₹14,495",
        image: "./MK4593I.webp" 
    },
    "item8": {
        name: "Michael Kors",
        description: "Michael Kors Pyper Pink Dial Women 38mm",
        price: " ₹13,495",
        image: "./MK4631I.webp" 
    },
    "item9": {
        name: "Omega",
        description: "Omega Seamaster Aqua Terra Shades Co Axial Master Chronometersandstone Dial Women 34MM",
        price: " ₹646,100",
        image: "./22010342010002.webp" 
    },
    "item10": {
        name: "Omega",
        description: "Omega Omega Speedmaster Moonwatch Professional Co‑Axial Master Chronometer Green Dial Men 42MM",
        price: " ₹4,065,900",
        image: "./31060425010001.webp" 
    },
    "item11": {
        name: "Omega",
        description: "Omega Speedmaster Chronoscope Co Axial Master Chronometer Chronograph Brown Dial Men 43MM",
        price: " ₹1,581,800",
        image: "./32992435110001.webp" 
    },
    "item12": {
        name: "Omega",
        description: "Omega Speedmaster Yellow Dial Men 42MM",
        price: " ₹4,266,400",
        image: "./23150422106002.webp" 
    },
    "item13": {
        name: "Breguet",
        description: "Tradition Grey Men",
        price: " ₹3,707,000",
        image: "./g7597brg19wu.webp" 
    },
    "item14": {
        name: "Breguet",
        description: "Type XX-XXI-XXII Grey",
        price: " ₹1,363,000",
        image: "./g3817stx23zu.webp" 
    },
    "item15": {
        name: "Breguet",
        description: "Marine Grey",
        price: "₹2,802,000",
        image: "./g7727br129wu.webp" 
    },
    "item16": {
        name: "Breitling",
        description: "Breitling Navitimer Automatic White Dial Men 36mm",
        price: "₹799,800",
        image: "./U17327211A1U1.webp" 
    },
    "item17": {
        name: "Breitling",
        description: "Breitling Navitimer B01 Chronograph Blue Dial Men 43mm",
        price: "₹752,500",
        image: "./AB0138241C1P1.webp" 
    },

    "item18": {
        name: "Breitling",
        description: "Breitling Premier B01 Chronograph Green Dial Men 42mm",
        price: "₹765,400",
        image: "./AB0145371L1A1.webp" 
    },

    "item19": {
        name: "Breitling",
        description: "Breitling Navitimer Blue Dial Men 41mm",
        price: "₹335,400",
        image: "./a17326161c1p4.webp" 
    },
    "item20": {
        name: "Rado",
        description: "Rado True Skeleton Dial 38mm R27126012",
        price: "₹263,000",
        image: "./r27126012.webp" 
    },
    "item21": {
        name: "Rado",
        description: "Rado True Red Dial 39mm R27095652",
        price: "₹195,500",
        image: "./r27095652.webp" 
    },

    "item22": {
        name: "Rado",
        description: "Rado Centrix Black Dial 39.5mm R30022712",
        price: "₹178,800",
        image: "./R30022712.webp" 
    },
    "item23": {
        name: "Rado",
        description: "Rado Centrix Brown Dial 39.5mm R30023732",
        price: "₹210,400",
        image: "./R30023732.webp.webp" 
    },




    
};

// document.addEventListener('click', function (event) {
//     const searchPanel = document.getElementById('searchPanel');
//     const searchIcon = document.getElementById('searchIcon');

//     if (!searchPanel.contains(event.target) && event.target !== searchIcon) {
//         closeSearchPanel();
//     }
// });

function toggleSearchPanel() {
    var searchPanel = document.getElementById('searchPanel');
    searchPanel.style.display = searchPanel.style.display === 'none' ? 'block' : 'none';

    // Clear search input and results when closing
    if (searchPanel.style.display === 'none') {
        document.getElementById('searchInput').value = '';
        document.getElementById('searchResults').innerHTML = '';
    }
   
}

// Function to perform search
function performSearch() {
    // Get the search input value
    var searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Perform search in the data dictionary
    var searchResults = searchInDictionary(searchInput);

    // Display search results in the navigation
    displaySearchResults(searchResults);
}

// Function to search in the data dictionary
function searchInDictionary(query) {
    var results = {};

    for (var key in dataDictionary) {
        // Assuming you want to search in the "name" property of each item
        var itemName = dataDictionary[key].name.toLowerCase();

        if (itemName.includes(query)) {
            results[key] = dataDictionary[key];
        }
    }

    return results;
}

// Function to display search results in the navigation
function displaySearchResults(results) {
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    for (var key in results) {
        var resultItem = results[key];
        var resultElement = document.createElement('div');

        // Customize the content based on your needs
        resultElement.innerHTML = `<img src="${resultItem.image}" alt="${resultItem.name}">
                                  <p>${resultItem.name} - ${resultItem.description}</p>
                                  <p>Price: ${resultItem.price}</p>`;

        searchResultsContainer.appendChild(resultElement);
    }
}



function toggleSignupPanel() {
    var signupPanel = document.getElementById('signuppanel');
    if (signupPanel.style.display === 'block' || signupPanel.style.display === '') {
        signupPanel.style.display = 'none';
    } else {
        signupPanel.style.display = 'block';
    }
}


function signup() {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    // Validate email format
    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password format
    if (!isValidPassword(passwordInput.value)) {
        alert('Password must contain at least one letter, one number, and one special character.');
        return;
    }

    // Other signup logic goes here

    // Reset form inputs after successful signup
    emailInput.value = '';
    passwordInput.value = '';

    // Close the signup panel
    toggleSignupPanel();
}

function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // Use a regular expression to check for at least one letter, one number, and one special character
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return passwordRegex.test(password);
}