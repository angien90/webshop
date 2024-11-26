/*
 X Skapa en array med objekt som bär alla produkterna. 
 X Skapa en funktion som loopar ut alla produkterna på sidan/i vår html struktur.
 X Skapa visuell bild av rating 
 X Skapa funktion för plus och minus av antal 
 X Skapa sorteringsfunktioner
 X Skapa funktion för varukorg
 X Skapa funktion som beräknar totalen (och uppdateras vid förändring)
 - Fält i formuläret ska valideras innan det går att skicka beställningen. 
 - Funktion för betalningssätt. Toggla funktioner i beställningsformuläret som ska döljas och synas. 
 - Visa/dölj beställningsknapp
 - Skapa en timer som räknar ner och deletar innehåll
 - Lägg in regler för rabatter
 X Bekrätfelse ruta vid beställning
 X Rensa knapp för beställningsformulär
 - Effekt när Totalen uppe på sidan uppdateras
 */


// -----------------------------------------------------------------//
// -----------------------Produktlistan------------------------------//
const productList = [
  {
    id: 0,
    namn: 'Kolakungen',
    img: {
      url: 'public/img/Munk_med_kola_glasyr.png',
      width: 400,
      height: 400,
      alt: 'Munk med kolaglasyr och kola bitar' 
    },
    raiting: 3,
    kategori: 'Övrigt',
    pris: 15,
    amount: 0
  },

  {
    id: 1,
    namn: 'Chokladhjulet',
    img: {
      url: 'public/img/Munk_choklad_glasyr.png',
      width: 400,
      height: 400,
      alt: 'Munk med chokladglasyr' 
    },
    raiting: 4,
    kategori: 'Choklad',
    pris: 20,
    amount: 0
  },

  {
    id: 2,
    namn: 'Mörkets mysterium',
    img: {
      url: 'public/img/Munk_extra_choklad.png',
      width: 400,
      height: 400,
      alt: 'Munk med chokladglasyr och chokladbitar' 
    },
    raiting: 4,
    kategori: 'Choklad',
    pris: 25,
    amount: 0
  },

  {
    id: 3,
    namn: 'Smurfmunken',
    img: {
      url: 'public/img/Munk_gron_glasyr_med_musli.png',
      width: 400,
      height: 400,
      alt: 'Munk med päronglasyr och musli' 
    },
    raiting: 3,
    kategori: 'Glutenfri',
    pris: 25,
    amount: 0
  },

  {
    id: 4,
    namn: 'Guldklumpen',
    img: {
      url: 'public/img/Munk_med_honungs_glasyr.png',
      width: 400,
      height: 400,
      alt: 'Munk med honungsglasyr och choklad strössel' 
    },
    raiting: 5,
    kategori: 'Övrigt',
    pris: 20,
    amount: 0
  },

  {
    id: 5,
    namn: 'Rosa moln',
    img: {
      url: 'public/img/Munk_rosa_glasyr_med_florsocker.png',
      width: 400,
      height: 400,
      alt: 'Munk med hallonglasyr och florsocker' 
    },
    raiting: 5,
    kategori: 'Glutenfri',
    pris: 25,
    amount: 0
  },

  {
    id: 6,
    namn: 'Smaklösa Sven',
    img: {
      url: 'public/img/Munk_utan_glasyr.png',
      width: 400,
      height: 400,
      alt: 'Munk utan glasyr' 
    },
    raiting: 2,
    kategori: 'Övrigt',
    pris: 10,
    amount: 0
  },

  {
    id: 7,
    namn: 'Rosa prinsessan',
    img: {
      url: 'public/img/Munk_rosa_glasyr_med_godis.png',
      width: 400,
      height: 400,
      alt: 'Munk med hallonglasyr och godis' 
    },
    raiting: 3,
    kategori: 'Hallon',
    pris: 25,
    amount: 0
  },

  {
    id: 8,
    namn: 'Trollkarlens förtrollning',
    img: {
      url: 'public/img/Munk_choklad_glasyr_med_notter_och_bar.png',
      width: 400,
      height: 400,
      alt: 'Munk med chokladglasyr samt bär och nötter' 
    },
    raiting: 5,
    kategori: 'Choklad',
    pris: 15,
    amount: 0
  },

  {
    id: 9,
    namn: 'C-vitamin-kungen',
    img: {
      url: 'public/img/Munk_orange_gasyr_med_apelsin.png',
      width: 400,
      height: 400,
      alt: 'Munk med apelsinglasyr och apelsinbitar' 
    },
    raiting: 4,
    kategori: 'Glutenfri',
    pris: 25,
    amount: 0
  },

  {
    id: 10,
    namn: 'Rosapantern',
    img: {
      url: 'public/img/Munk_rosa_glasyr_med_strossel.png',
      width: 400,
      height: 400,
      alt: 'Munk med hallonglasyr och strössel' 
    },
    raiting: 3,
    kategori: 'Övrigt',
    pris: 20,
    amount: 0
  },

  {
    id: 11,
    namn: 'Nötskallen',
    img: {
      url: 'public/img/Munk_choklad_och_notter.png',
      width: 400,
      height: 400,
      alt: 'Munk med chokladglasyr och nötter' 
    },
    raiting: 5,
    kategori: 'Glutenfri',
    pris: 20,
    amount: 0
  },

  {
    id: 12,
    namn: 'Polarbjörnen',
    img: {
      url: 'public/img/Munk_vit_glasyr_med_choklad_strossel.png',
      width: 400,
      height: 400,
      alt: 'Munk med vit glasyr och choklad strössel' 
    },
    raiting: 4,
    kategori: 'Övrigt',
    pris: 25,
    amount: 0
  },
];

// -----------------------------------------------------------------//
// -----------Skapande av produktlista i HTML-----------------------//
const productsListDiv = document.querySelector('#product-list');
function printProductListDiv() {
  productsListDiv.inneHTML = '';

  productList.forEach(eachProduct => {
    productsListDiv.innerHTML += `
      <article class="eachProduct">
        <h2>${eachProduct.namn}</h2>
        <img src="${eachProduct.img.url}" alt="${eachProduct.img.alt}">
        <p>${eachProduct.img.alt}</p>
        <div class="product-information">
          <h3>${getRatingHtml(eachProduct.raiting)}</h3>
          <h3>Kategori: ${eachProduct.kategori}</h3>
          <h3>${eachProduct.pris} kr/st</h3>
        </div>
        
        <div class="product-counter">
          <button class="remove material-symbols-outlined" id="remove-${eachProduct.id}">remove_shopping_cart</button>
          <input type="number" min="0" value="${eachProduct.amount}" id="input-${eachProduct.id}">
          <button class="add material-symbols-outlined" id="add-${eachProduct.id}">add_shopping_cart</button>
        </div>
      </article>
    `; 
  });

  // Variabler för plus och minus knappar //
  const removeButton = document.querySelectorAll('button.remove');
  removeButton.forEach(button => {
    button.addEventListener('click', removeProductCount);
  });

  const addButton = document.querySelectorAll('button.add');
  addButton.forEach(button => {
    button.addEventListener('click', addProductCount);
  });
}

printProductListDiv();

// -----------------------------------------------------------------//
// ----------------Funktion för minus knappar-----------------------//
function removeProductCount(e) {
  const removeProductId = Number(e.target.id.replace('remove-', ''));
  console.log('Du klickade på ID:', removeProductId);

  const foundProductIndexRemove = productList.findIndex(eachProduct => eachProduct.id === removeProductId);
  console.log('Okjetet är:', foundProductIndexRemove);

  if (foundProductIndexRemove === -1) {
    console.error('Kolla att id:t är rätt.');
    return;
  }

  // Kontrollera om mängden är större än 0 innan man kan minska ännu mer //
  if (productList[foundProductIndexRemove].amount > 0) {
    productList[foundProductIndexRemove].amount -= 1;

    const productContainerRemove = e.target.closest('.eachProduct');
    const inputRemove = productContainerRemove.querySelector('input');
    inputRemove.value = productList[foundProductIndexRemove].amount;
  } else {
    console.log("Du kan inte ha ett negativt antal produkter.");
  }

  updateCart();
  updateTotal();
}

// -----------------------------------------------------------------//
// ----------------Funktion för plus knappar-----------------------//
function addProductCount(e) {
  const addProductId = Number(e.target.id.replace('add-', ''));
  
  const foundProductIndexAdd = productList.findIndex(eachProduct => eachProduct.id === addProductId);

  if (foundProductIndexAdd !== -1) {
    productList[foundProductIndexAdd].amount += 1;

    const productContainerAdd = e.target.closest('.eachProduct');
    const inputAdd = productContainerAdd.querySelector('input');
    inputAdd.value = productList[foundProductIndexAdd].amount;
  } else {
    console.error('Kunde inte hitta produkten med ID:', addProductId);
  }

  updateCart();
  updateTotal();
}

// -----------------------------------------------------------------//
// ----------------Funktion för att fylla varukorg------------------//

function updateCart() {
  const cartItems = productList.filter(eachProduct => eachProduct.amount > 0);
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';

  cartItems.forEach(eachProduct => {
    const productElement = document.createElement('div');
    productElement.classList.add('cart-item');
    productElement.innerHTML = `
    <div class="product-cart">
      <img src="${eachProduct.img.url}" alt="${eachProduct.img.alt}">
      <h2>${eachProduct.namn}</h2>
      <h3>${eachProduct.amount} st á ${eachProduct.pris} kr </h3>
      <h3>Pris: ${eachProduct.amount * eachProduct.pris} kr</h3>
    </div>
    `;
    cartElement.appendChild(productElement);
  });
}

// --------------------------------------------------------------------------//
// ----Funktion för att beräkna totalen i varukorgen & högst upp på sidan----//
function updateTotal() {
  const totalCost = productList.reduce((total, eachProduct) => total + eachProduct.amount * eachProduct.pris, 0);
  const totalElement = document.getElementById('totalCost');
  totalElement.textContent = `Totalt: ${totalCost} kr`;

  const totalSum = document.getElementById('totalSum');
  totalSum.textContent = `${totalCost} kr`;
}

// -----------------------------------------------------------------//
// -----------Funktion för att skapa emojis för rating--------------//
function getRatingHtml(rating) {
  const isHalf = String(rating).indexOf('.');

  let html = '';
  for (let i = 0; i < rating; i++) {
    html += `<span>⭐</span>`;
  }
  if (isHalf !== -1) {
    html += `<span></span>`; // Avrundar uppåt så att en 3.5 får 4 stjärnor
  }
  return html;
}

// -----------------------------------------------------------------//
// ----------------Soretingsfunktionen för namn-------------------- //
function sortByName(Name) {
  productList.sort((a, b) => {
    return Name ? a.namn.localeCompare(b.namn) : b.namn.localeCompare(a.namn);
  }); // Sorteringsfunktion (stigande)

  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = ''; // Rensa listan innan vi fyller på

  productList.forEach(eachProduct => {
    const productElement = document.createElement('div');
    // ... skapa HTML för varje produkt
    productListElement.appendChild(productElement);
  });

  printProductListDiv();
}

  const sortNameButton = document.getElementById('sortName');
  sortNameButton.addEventListener('click', () => {
  sortByName(true); // Koppla funktion till knapp
});

  let isName = true;
  sortNameButton.addEventListener('click', () => {
  sortByName(isName);
  isName = !isName; // Växla mellan stigande och fallande
});

// -----------------------------------------------------------------//
// ----------------Soretingsfunktionen för kategori---------------- //
function sortByCategory(Category) {
  productList.sort((a, b) => {
    return Category ? a.kategori.localeCompare(b.kategori) : b.kategori.localeCompare(a.kategori);
  }); // Sorteringsfunktion (stigande)

  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = ''; // Rensa listan innan vi fyller på

  productList.forEach(product => {
    const productElement = document.createElement('div');
    // ... skapa HTML för varje produkt
    productListElement.appendChild(productElement);
  });

  printProductListDiv();
}

  const sortCategoryButton = document.getElementById('sortCategory');
  sortCategoryButton.addEventListener('click', () => {
  sortByCategory(true); // Koppla funktion till knapp
});

  let isCategory = true;
  sortCategoryButton.addEventListener('click', () => {
  sortByCategory(isCategory);
  isCategory = !isCategory; // Växla mellan stigande och fallande
});


// -----------------------------------------------------------------//
// ----------------Soretingsfunktionen för pris---------------------//
function sortByPrice(Price) {
  productList.sort((a, b) => {
    return Price ? a.pris - b.pris : b.pris - a.pris;
  }); // Sorteringsfunktion (stigande)

  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = ''; // Rensa listan innan vi fyller på

  productList.forEach(product => {
    const productElement = document.createElement('div');
    // ... skapa HTML för varje produkt
    productListElement.appendChild(productElement);
  });

  printProductListDiv();
}

const sortPriceButton = document.getElementById('sortPrice');
sortPriceButton.addEventListener('click', () => {
  sortByPrice(!isPrice); // Växla mellan stigande och fallande
  isPrice = !isPrice;
});

let isPrice = true;


// -----------------------------------------------------------------//
// ----------------Sorteingsfunktionen för rating-------------------//
function sortByRating(Rating) {
  productList.sort((a, b) => {
    return Rating ? a.raiting - b.raiting : b.raiting - a.raiting;
  }); // Sorteringsfunktion (stigande)

  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = ''; // Rensa listan innan vi fyller på

  productList.forEach(eachProduct => {
    const productElement = document.createElement('div');
    // ... skapa HTML för varje produkt
    productListElement.appendChild(productElement);
  });

  printProductListDiv();
}

const sortRatingButton = document.getElementById('sortRating');
sortRatingButton.addEventListener('click', () => {
  sortByRating(!isRating); // Växla mellan stigande och fallande
  isRating = !isRating;
});

let isRating = true;

// -----------------------------------------------------------------//
// -----------------------Sortera efter ID--------------------------//
function sortById(Id) {
  productList.sort((a, b) => {
    return Id ? a.id - b.id : a.id - b.id;
  }); // Sorteringsfunktion (stigande)

  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = ''; // Rensa listan innan vi fyller på

  productList.forEach(eachProduct => {
    const productElement = document.createElement('div');
    // ... skapa HTML för varje produkt
    productListElement.appendChild(productElement);
  });

  printProductListDiv();
}

const sortIdButton = document.getElementById('sortStop');
sortIdButton.addEventListener('click', () => {
  sortById(!isId); // Växla mellan stigande och fallande
  isId = !isId;
});

let isId = true;


// -----------------------------------------------------------------//
// -----------------Validering av formulär--------------------------//
// -------------------------EJ KLAR!!!------------------------------//

function validateRequired(...fields) {
  for (const field of fields) {
    if (field.value.trim() === "") {
      alert(`Vänligen fyll i ditt namn i ${field.name}.`);
      return false;
    }
  }
  return true;
}

function validateEmail(email) {
  const emailRegEx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const result = emailRegEx.exec(email);
  const emailError = document.getElementById('emailError');

  if (result === null) {
    emailError.textContent = 'E-post är inte giltig';
  } else {
    emailError.textContent = '';
  }
}
  

function validateCardDetails(cardName, cardNumber, expMonth, expYear, cvv) {
  return true;
}


// -----------------------------------------------------------------//
// --------------Visa & dölj betalningsuppgifter--------------------//
const paymentMethodSelect = document.getElementById('payment-method');
const paymentDetailsSection = document.querySelector('.betalningsuppgifter');

paymentMethodSelect.addEventListener('change', () => {
  if (paymentMethodSelect.value !== 'invoice') {
    paymentDetailsSection.style.display = 'none';
  } else {
    paymentDetailsSection.style.display = 'block';
  }
});


// -----------------------------------------------------------------//
// ------------------Knapp för att tömma formulär-------------------//
function clearForm() {
   const form = document.getElementById("myForm");

  form.reset();
}

const removeButton = document.getElementById("clearButton");
removeButton.addEventListener("click", clearForm);


// -----------------------------------------------------------------//
// ------------------Beställningsbekräftelse------------------------//
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Förhindra standardskickning

  const confirmed = confirm('Är du säker på att du vill skicka beställningen?');

  if (confirmed) {
    alert('Tack för din beställning! Vår leveranstid är för närvarande 8 dagar.');
  } else {
    alert('Beställningen avbröts.');
  }
});