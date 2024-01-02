  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  var isSignedUp = false;

function saveCartToLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


function initializeCartFromLocalStorage() {
  var storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems = storedCartItems;
  updateCartIcon();
}

initializeCartFromLocalStorage();

updateSignupIcon();

  function addToCart(name, price, image) {
      var existingItem = cartItems.find(item => item.name === name);
  
      if (existingItem) {
          existingItem.quantity++;
      } else {
          var item = {
              name: name,
              price: price,
              image: image,
              quantity: 1
          };
  
       
          cartItems.push(item);
          displayCartItems();
         
          updateButtonColor(true);

      }
  
      updateCartIcon();
      saveCartToLocalStorage();
      // showMessage('Item added to cart!');
      
  }

function updateButtonColor(isAdded) {
  var addButton = document.getElementById('addToCartButton'); // Change 'addToCartButton' to the actual ID of your button
  if (addButton) {
      addButton.style.backgroundColor = isAdded ? 'green' : ''; // Change to your desired colors
  }
}
 
  function updateCartIcon() {
      var cartIcon = document.getElementById('cartIcon');
      if (cartIcon) {
          cartIcon.innerText = cartItems.length;
      }
  }

  function openCart() {
      document.getElementById('sidePanel').style.display = 'block';
      displayCartItems();
  }
  openCart();
  
  function closeSidePanel() {
      document.getElementById('sidePanel').style.display = 'none';
  
  }
  closeSidePanel();

  function displayCartItems() {
      var cartItemsContainer = document.getElementById('cartItems');
      if (cartItemsContainer) {
          cartItemsContainer.innerHTML = '';
          cartItems.forEach(function (item, index) {
            var cartItemElement = document.createElement('div');
            cartItemElement.innerHTML =
            '<div class="item">'+
            '<div class="item-image">' +
            '<img src="' + item.image + '" alt="' + item.name + '" class="item-image">'+
            '</div>'+
            '<div class="item1">'+
            '<div class="item-info">' +
                  '<p class="item-name">' + item.name + '</p>' +
                  '<p class="item-price">' + item.price + '</p>' +
                  '</div>' +
                  '<div class="item-actions">' +
                   '<div class="quantity-container">' +
                  '<button onclick="decrementQuantity(' + index + ')" class="quantity-button">-</button>' +
                  '<span class="item-quantity">'  + item.quantity + '</span>' + 
                  '<button onclick="incrementQuantity(' + index + ')" class="quantity-button">+</button>' +
                  '</div>' +
                  '<button onclick="deleteItem(' + index + ')" class="delete-button">Delete</button>' +
                  '</div>'+
                  '</div>'+
                  '</div>';
  
            cartItemsContainer.appendChild(cartItemElement);
        });
  
          var cartTotalElement = document.getElementById('cartTotal');
          if (cartTotalElement) {
              var totalPrice = calculateTotalPrice();
              cartTotalElement.innerText = 'Total: ' + totalPrice;
          }
       }
     }
  
  function closeSidePanel() {
      document.getElementById('sidePanel').style.display = 'none';
  }

 
  function calculateTotalPrice() {
      var total = 0;
      cartItems.forEach(function (item) {
          var price = parseInt(item.price.replace('₹', '').replace(',', ''));
          total += price *item.quantity;
      });
      return '₹' + total.toLocaleString(); 
  } 
  
  function incrementQuantity(index) {
    var item = cartItems[index];

    if (item) {
        item.quantity++;
    }
    displayCartItems();
}

function decrementQuantity(index) {
    var item = cartItems[index];

    if (item) {
      item.quantity--;
    }
    if (item.quantity === 0) {
      cartItems.splice(index, 1);
  }
    displayCartItems();
    updateCartIcon();
    saveCartToLocalStorage();
}
function deleteItem(index) {
    cartItems.splice(index, 1);
    updateCartIcon();
    saveCartToLocalStorage();
    displayCartItems();
    updateButtonColor(false);
}



const testAccounts = [
  { username: 'mounikakaranam10@gmail.com', password:'mounika#1' },
  { username: 'mounikakaranam11@gamil.com', password:'mounika#2' },
  { username: 'mounikakaranam12@gamil.com', password:'mounika#3' }
];


var isSignedUp = false;

        function checkout() {
            if (!isSignedUp) {
                openSignupPanel();
            } else {
              document.getElementById('checkoutButton').innerText = 'Process';
              toggleCardDetails();
            }
        }

        // Function to open the signup panel
        function openSignupPanel() {
            document.getElementById('signuppanel').style.display = 'block';
        }
        function toggleSignupText() {
          var signupButton = document.getElementById('signupButton');
          signupButton.innerText = isSignedUp ? 'Logout' : 'Signup';
        }

        function toggleSignupPanel() {
            var signupPanel = document.getElementById('signuppanel');
            if (signupPanel.style.display === 'block') {
                signupPanel.style.display = 'none';
            } else {
                signupPanel.style.display = 'block';
            }
        }

      
        function toggleCardDetails() {
          var cardDetailsPage = document.getElementById('cardDetailsPage');
          if (cardDetailsPage.style.display === 'block') {
              cardDetailsPage.style.display = 'none';
          } else {
              cardDetailsPage.style.display = 'block';
          }
      }

      function isUserSignedUp(username, password) {
        return testAccounts.some((account) => account.username === username && account.password === password);
      }
      
      updateSignupIcon();

      function updateSignupIcon() {
        var signupIcon = document.getElementById('signupIcon'); 
    
        if (signupIcon) {
            if (isSignedUp) {
                signupIcon.classList.add('signedUp'); 
                signupIcon.innerText = '😊';
                
                signupIcon.addEventListener('click', confirmLogout);
            } else {
                signupIcon.classList.remove('signedUp');
                signupIcon.innerText = '👤';
           
                signupIcon.removeEventListener('click', confirmLogout);
              }
            }
    }

    function saveSignupToLocalStorage() {
      localStorage.setItem('isSignedUp', JSON.stringify(isSignedUp));
    }
    
    function initializeSignupFromLocalStorage() {
      isSignedUp = JSON.parse(localStorage.getItem('isSignedUp')) || false;
      updateSignupIcon();
    }
    initializeSignupFromLocalStorage();
    

      function signup() {
        const usernameInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;
      
        if (isUserSignedUp(usernameInput, passwordInput)) {
          isSignedUp = true;
          console.log(isUserSignedUp)
          updateCheckoutButtonText();
          updateSignupIcon();
          toggleSignupPanel();
          saveSignupToLocalStorage();

          document.getElementById('signuppanel').style.display = 'none';
        } else {

          saveUserToLocalStorage(usernameInput, passwordInput);
        isSignedUp = true;
        updateCheckoutButtonText();
        updateSignupIcon();
        toggleSignupPanel();
        saveSignupToLocalStorage();
        document.getElementById('signuppanel').style.display = 'none';

          
        }
     
      }
      function updateSignupPanel() {
        var userImage = document.getElementById('signupUserImage'); 
        if (isSignedUp && userImage) {
            var firstLetter = testAccounts.find(account => account.username === username)?.username[0].toUpperCase();
            userImage.innerText = firstLetter;
        }
    }
      function showMessage() {
        var message = document.getElementById('message');
        message.style.display = 'block';
      }

      function saveUserToLocalStorage(username, password) {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        existingUsers.push({ username, password }); 
        localStorage.setItem('users', JSON.stringify(existingUsers));
    }

        function openCardDetailsPage() {
          console.log("in func card")
          document.getElementById('cardDetailsPage').style.display = 'block';
        }
        function checkout() {
          if (cartItems.length === 0) {
            alert('Your cart is empty. Add items to your cart before proceeding.');
        } else if (!isSignedUp) {
            openSignupPanel();
        } else {
            document.getElementById('checkoutButton').innerText = 'Process';
            toggleCardDetails();
        }
      }
      function process() {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Add items to your cart before proceeding.');
        } else if (!isSignedUp) {
            openSignupPanel();
        } else {
            openCardDetailsPage();
        }
    }

      function confirmLogout() {
        var confirmLogout = window.confirm('Are you sure you want to logout?');
      
        if (confirmLogout) {
          logout();
          openSignupPanel(); 
        }
      }
      
      function logout() {
          localStorage.removeItem('isSignedUp');
          isSignedUp = false;
           updateCheckoutButtonText();
          hideLogoutButton();
          updateSignupIcon();
        
      }
      function openSignupPanel() {
        document.getElementById('signuppanel').style.display = 'block';
    }
    
      function hideLogoutButton() {
        var logoutButton = document.getElementById('logoutButton');
        if (logoutButton) {
          logoutButton.style.display = 'none';
        }
      }

        function updateCheckoutButtonText() {
            var checkoutButton = document.getElementById('checkoutButton');
            var logoutButton = document.getElementById('logoutButton');
            if (isSignedUp) {
                checkoutButton.innerText = 'Process';
                if (logoutButton) {
                  logoutButton.style.display = 'inline'; // Show the logout button
                }
            } else {
                checkoutButton.innerText = 'Checkout';
                hideLogoutButton();
            }
        }
        updateCheckoutButtonText();






        function updateSignupTooltip() {
          var signupImage = document.getElementById('signupImage');
          var tooltipText = isSignedUp ? 'Logout' : 'Signup';
          signupImage.title = tooltipText;
        }
       
        function validateCardNumber() {
          var cardNumberInput = document.getElementById('cardNumber');
          var cardNumber = cardNumberInput.value.trim();

          if (!/^\d+$/.test(cardNumber) || cardNumber.length !== 16) {
            cardNumberInput.setCustomValidity('Please enter a valid 16-digit card number.');
          } else {
              cardNumberInput.setCustomValidity('');
          }
      
          // return true;
      }
      function initializeCardNumberInput() {
        var cardNumberInput = document.getElementById('cardNumber');
        cardNumberInput.setAttribute('maxlength', '16');

        cardNumberInput.addEventListener('input', function () {
          validateCardNumber();
      });
        
    }
    
    initializeCardNumberInput();

      function validateCVV() {
        var cvvInput = document.getElementById('cvv');
        var cvv = cvvInput.value.trim();
    
        if (!/^\d+$/.test(cvv) || (cvv.length !== 3 )) {
          cvvInput.setCustomValidity('Please enter a valid 3-digit CVV.');
        } else {
            cvvInput.setCustomValidity('');
        }
    
        // return true;
    }
    function initializeCVVInput() {
      var cvvInput = document.getElementById('cvv');
      cvvInput.setAttribute('maxlength', '3');

      cvvInput.addEventListener('input', function () {
        validateCVV();
    });
  }
  
  initializeCVVInput();

    function validateForm() {
          return document.getElementById('cardNumber').checkValidity() && document.getElementById('cvv').checkValidity()
  }
  
//   function displayOrderConfirmation() {
//     // Create a div element for the order confirmation
//     var orderConfirmationDiv = document.createElement('div');
//     orderConfirmationDiv.classList.add('order-confirmation');

//     // Create an image element
//     var confirmationImage = document.createElement('img');
//     confirmationImage.src = 'watches/icons/greentick-unscreen.gif'; 

//     // Create a paragraph element
//     var confirmationText = document.createElement('p');
//     confirmationText.innerText = 'Thank you for your order! Your order has been placed successfully.';

//     // Create a button element
//     var homeButton = document.createElement('button');
//     homeButton.innerText = 'Go to Home Page';
//     homeButton.addEventListener('click', function () {
//         // Redirect to the home page when the button is clicked
//         window.location.href = './index.html'; // Replace with the actual path to your home page
//     });

//     // Append elements to the orderConfirmationDiv
//     orderConfirmationDiv.appendChild(confirmationImage);
//     orderConfirmationDiv.appendChild(confirmationText);
//     orderConfirmationDiv.appendChild(homeButton);

//     // Append the orderConfirmationDiv to a container in your HTML (replace 'confirmationContainer' with the actual container ID)
//     var confirmationContainer = document.getElementById('confirmationContainer');
//     confirmationContainer.innerHTML = ''; 
//     confirmationContainer.appendChild(orderConfirmationDiv);
// }

// function placeOrder() {
//     if (validateForm()) {
//         cartItems = [];
//         updateCartIcon();
//         saveCartToLocalStorage();
//         displayOrderConfirmation(); 
//     }
// }

  
  function placeOrder() {
      if (validateForm()) {
        cartItems = [];
        updateCartIcon();
        saveCartToLocalStorage();
          alert('Order placed successfully!');
          window.location.href = './zimson.html'; 
      }
  }
  
  

// document.addEventListener("DOMContentLoaded", function () {
//   // Your existing watches array
//   const allWatches = {
//     "watch1":{ id: 'Reid Gold ', name: "Fossil Reid Gold Dial Women36mm", price: "₹7,995", image: "./zimson/watches/watch/fossil/BQ3655I.webp" },
//     "watch2":{ id: 'Autocross', name: "Fossil Autocross Black Dial Men 44mm", price: "₹9,995", image: "./zimson/watches/watch/fossil/BQ2551I.webp" },
//     "watch3":{ id: ' Bannon', name: "Fossil Bannon Green Dial Men 44mm", price: "₹9,995", image: "./zimson/watches/watch/fossil/BQ2539I.webp" },
//     "watch4":{ id: ' Yorke', name: "Fossil Yorke Black Dial Men 48mm", price: "₹13,995", image: "./zimson/watches/watch/fossil/BQ2492I.webp" },
//     "watch5":{ id: 'Gabby', name: "Fossil Gabby Brown Dial Women 34mm", price: "₹17,995", image: "./zimson/watches/watch/fossil/CE1110.webp" },
//     "watch6":{ id: 'Fb-01', name: "Fossil Fb-01 Brown Dial Women", price: "₹17,995", image: "./zimson/watches/watch/fossil/CE1121I.webp" },
//     "watch7":{ id: 'Redding', name: "Fossil Redding White Dial Women", price: "₹11,995", image: "./zimson/watches/watch/fossil/BQ3576I.webp" },
//     "watch8":{ id: 'Reid', name: "Fossil Reid Rose Gold Dial Women 34mm", price: "₹8,495", image: "./zimson/watches/watch/fossil/BQ3656I.webp" },
//     "watch9":{ id: 'Rye', name: "Fossil Rye Rose Gold Dial Women 36mm", price: "₹12,495", image: "./zimson/watches/watch/fossil/BQ3691.webp" },
//     "watch10":{ id: 'FB-01', name: "Fossil FB-01 White Dial Women 36mm", price: "₹19,995", image: "./zimson/watches/watch/fossil/CE1113.webp" },
//     "watch11":{ id: 'Lexie Luther', name: "Fossil Lexie Luther Black Dial Women 34mm", price: "₹9,995", image: "./zimson/watches/watch/fossil/BQ3569I.webp" },
//     "watch12":{ id: 'Sullivan', name: "Fossil Sullivan Black Dial Men 44mm", price: "₹₹8,995", image: "./zimson/watches/watch/fossil/BQ2457I.webp" },
//     "watch13":{ id: 'Fenmore', name: "Fossil Fenmore Black Dial Men 44mm", price: "₹14,495", image: "./zimson/watches/watch/fossil/BQ2366I.webp" },
//     "watch14":{ id: 'Luther', name: "Fossil Luther Black Dial Men 44mm", price: "₹14,495", image: "./zimson/watches/watch/fossil/BQ2328.webp" },
//     "watch15":{ id: 'Modern Sophisticate', name: "Fossil Modern Sophisticate Silver Dial Women", price: "₹7,995", image: "./zimson/watches/watch/fossil/bq1574i.webp" },
//     "watch16":{ id: 'Lux Luther', name: "Fossil Lux Luther Black Dial Men", price: " ₹10,995", image: "./zimson/watches/watch/fossil/BQ2416I.webp" },
//   };

//   // Function to create HTML for each watch
//   function createWatchHTML(watch) {
//     return `
//       <div class="watchesname" data-id="${watch.id}" data-name="${watch.name}" data-price="${watch.price}">
//           <img src="${watch.image}">
//         <p>Fossil</p>
//         <p class="name">${watch.name}</p>
//         <p>${watch.price}</p>
//         <button id="Cart" onclick="addToCart('${watch.id}')" class="cart">Add To Cart</button>
//       </div>
//     `;
//   }

//   // Function to display watches in the specified container
//   function displayWatches(watches, containerSelector) {
//     const watchesContainer = document.querySelector(containerSelector);

//     // Loop through the watches array and append HTML to watchesContainer
//     watches.forEach((watch) => {
//       watchesContainer.innerHTML += createWatchHTML(watch);
//     });
//   }

//   // Your existing addToCart function
//   function addToCart(watchId) {
//     // Add your logic to handle adding to cart, similar to the previous example
//     // ...

//     // After adding to the cart, call the displayCart function to update the UI
//     displayCart();
//   }

//   // Function to display the shopping cart
//   function displayCart() {
//     const cartItemsContainer = document.getElementById('cartItems');
//     const cartTotalContainer = document.getElementById('cartTotal');

//     // Retrieve the cart from local storage
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Display the items in the cart
//     if (cartItemsContainer) {
//       cartItemsContainer.innerHTML = '';
//       cart.forEach((item) => {
//         cartItemsContainer.innerHTML += `
//           <div class="cart-item" data-id="${item.id}">
//             <p>${item.name}</p>
//             <p>${item.price}</p>
//             <button onclick="deleteCartItem('${item.id}')" class="delete-button">Delete</button>
//           </div>
//         `;
//       });
//     }

//     // Display the total in the cart
//     if (cartTotalContainer) {
//       const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('₹', '')), 0);
//       const quantity = cart.length;
//       cartTotalContainer.innerHTML = `Total: ₹${total.toFixed(2)} | Quantity: ${quantity}`;
//     }
//   }

//   // Function to delete a cart item
//   function deleteCartItem(itemId) {
//     // Add your logic to delete the item from the cart
//     // ...

//     // After deleting, call the displayCart function to update the UI
//     displayCart();
//   }

//   // Function to close the side panel
//   function closeSidePanel() {
//     const sidePanel = document.getElementById('sidePanel');
//     if (sidePanel) {
//       sidePanel.style.display = 'none';
//     }
//   }

//   // Function to handle checkout
//   function checkout() {
//     // Add your logic for handling checkout
//     // ...

//     // After checkout, call the displayCart function to update the UI
//     displayCart();
//   }

//   // Function to cancel checkout
//   function cancelCheckout() {
//     // Add your logic for canceling checkout
//     // ...

//     // After canceling, call the displayCart function to update the UI
//     displayCart();
//   }

//   // Initial display of watches
//   displayWatches(allWatches, '.all-watches');

//   // Initial display of cart
//   displayCart();
// });









