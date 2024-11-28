/*
 X Skapa en array med objekt som bär alla produkterna. 
 X Skapa en funktion som loopar ut alla produkterna på sidan/i vår html struktur.
 X Skapa visuell bild av rating 
 X Skapa funktion för plus och minus av antal 
 X Skapa sorteringsfunktioner
 X Skapa funktion för varukorg
 X Skapa funktion som beräknar totalen (och uppdateras vid förändring)
 X Funktion för betalningssätt. Toggla funktioner i beställningsformuläret som ska döljas och synas. 
 X Visa/dölj beställningsknapp
 - Fält i formuläret ska valideras innan det går att skicka beställningen. 
 - Skapa en timer som räknar ner och deletar innehåll
 - Lägg in regler för rabatter
 X Bekrätfelse ruta vid beställning
 X Rensa knapp för beställningsformulär
 - Effekt när Totalen uppe på sidan uppdateras
 */


// -----------------------------------------------------------------//
// -----------------------Produktlistan------------------------------//

/**
 * Skapa upp en array där varje artikel är ett objekt
 */
const productList = [
  {
    id: 0,
    namn: 'Kolakungen',
    img: {
      url: '/img/Munk_med_kola_glasyr.png',
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
      url: 'img/Munk_choklad_glasyr.png',
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

/* 🦄🦄🦄🦄🦄🦄 JENNI: Kolla på {{Varför mina bilder visas i min localhost men på github pages}}, tack!*/

/**
 * Hämta en referens till DOM-elementet med id "product-list".
 * Rensa befintlig lista
 * Skriv ut varje artikel på nytt
 * Skapa en variabel för plus och minusknapp och koppla dessa ihop med html elmenten. 
 */
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

  // Variabler för minus knappar //
  const removeButton = document.querySelectorAll('button.remove');
  removeButton.forEach(button => {
    button.addEventListener('click', removeProductCount);
  });

  // Variabler för plus knappar //
  const addButton = document.querySelectorAll('button.add');
  addButton.forEach(button => {
    button.addEventListener('click', addProductCount);
  });
}

printProductListDiv();

// -----------------------------------------------------------------//
// ----------------Funktion för minus knappar-----------------------//

/**
 * Skapa en variabel som tar reda på Id:t
 * Skapa en variabel som hittar index för Id:t
 * Om index hittades (inte är lika med -1) ska följande ske;
     Kontrollera om mängden är större än 0 innan man kan minska ännu mer
     Minska antalet (amount) av den produkten i vår lista med en.
     Leta upp den närmsta föräldern som utlöste händelsen
     Leta upp input fältet och visa antalet där
 * Om index inte hittades ska du bara skriva ut i konsollen att den inte hittades.
 */
function removeProductCount(e) {
  const removeProductId = Number(e.target.id.replace('remove-', ''));
  console.log('Du klickade på ID:', removeProductId);

  const foundProductIndexRemove = productList.findIndex(eachProduct => eachProduct.id === removeProductId);
  console.log('Okjetet är:', foundProductIndexRemove);

  if (foundProductIndexRemove === -1) {
    console.error('Kolla att id:t är rätt.');
    return;
  }

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

/**
 * Skapa en variabel som tar reda på Id:t
 * Skapa en variabel som hittar index för Id:t
 * Om index hittades (inte är lika med -1) ska följande ske; 
     Öka antalet (amount) av den produkten i vår lista med en.
     Leta upp den närmsta föräldern som utlöste händelsen
     Leta upp input fältet och visa antalet där
 * Om index inte hittades ska du bara skriva ut i konsollen att den inte hittades.
 */
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

/**
 * Skapa en variabel för att kontrollera att amount är större än 0 
 * Skapa en variabel för html elementet med id cart
 * Töm innehållet i html elementet
 * Skapa ett html elmement i varukorgen för varje artikel som har ett amount som är större än 0.
 */
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

/**
 * Skapa en variabel och räkna ut totalkostanden
 * Skapa en variabel för att visa totalkostanden på html element med id totalCost (totalen i varukrogen)
 * Skriv ut värdet. 
 * Skapa en variabel för att visa totalkostanden på html elementet med id totalSum (totalen högst upp på sidan)
 * Skriv ut värdet.
 */
function updateTotal() {
  const totalCost = productList.reduce((total, eachProduct) => total + eachProduct.amount * eachProduct.pris, 0);
  const totalElement = document.getElementById('totalCost');
  totalElement.textContent = `Totalt: ${totalCost} kr`;

  const totalSum = document.getElementById('totalSum');
  totalSum.textContent = `${totalCost} kr`;
}

// -----------------------------------------------------------------//
// -----------Funktion för att skapa emojis för rating--------------//

/**
 * Skapa en variabel för raiting och kontrollera om det är ett heltal eller har decimaler
 * Skapa en tom html sträng
 * Uppreda följande;
    För heltal: Lägg till en stjärna för varje heltal med start från 0
    För decimaltal: Lägg till en tom stjärna för att avrunda uppåt. 
 * Retunera en färdig HTML-sträng
 */
function getRatingHtml(rating) {
  const isHalf = String(rating).indexOf('.');

  let html = '';
  for (let i = 0; i < rating; i++) {
    html += `<span>⭐</span>`;
  }
  if (isHalf !== -1) {
    html += `<span></span>`;
  }
  return html;
}

// -----------------------------------------------------------------//
// ----------------Soretingsfunktionen för namn-------------------- //

/**
 * Skapa en kopia på befintlig produktlista
 * Skapa en sortering i stigande ordning på namn
 * Skapa en variabel som hämtar produktlistan
 * Rensa befintlig lista
 * Skriv ut varje artikel på nytt
 * Skapa en variabel för sorteringsknappen med id sortName
 * Skapa en event lyssnare som kollar om man klickar på sorteringsknappen och byt riktning varannan gång
 */
function sortByName(Name) {
  const copiedProductList = [...productList];

  copiedProductList.sort((a, b) => {
    return Name ? a.namn.localeCompare(b.namn) : b.namn.localeCompare(a.namn);
  });

  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = '';

  copiedProductList.forEach(eachProduct => {
    const productElement = document.createElement('div');
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
    productListElement.appendChild(productElement);
  });
}

  const sortNameButton = document.getElementById('sortName');
  sortNameButton.addEventListener('click', () => {
  sortByName(true); 
}); 

  let isName = true;
  sortNameButton.addEventListener('click', () => {
  sortByName(isName);
  isName = !isName; 
}); 

// -----------------------------------------------------------------//
// ----------------Sorteringsfunktionen för kategori---------------- //

/**
 * Skapa en kopia på befintlig produktlista
 * Skapa en sortering i stigande ordning på kategori
 * Skapa en variabel som hämtar produktlistan
 * Rensa befintlig lista
 * Skriv ut varje artikel på nytt
 * Skapa en variabel för sorteringsknappen med id sortCategory
 * Skapa en event lyssnare som kollar om man klickar på sorteringsknappen och byt riktning varannan gång
 */
function sortByCategory(Category) {
  const copiedProductList = [...productList];

  copiedProductList.sort((a, b) => {
    return Category ? a.kategori.localeCompare(b.kategori) : b.kategori.localeCompare(a.kategori);
  });

  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = '';

  copiedProductList.forEach(eachProduct => {
    const productElement = document.createElement('div');
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
    productListElement.appendChild(productElement);
  });
}

  const sortCategoryButton = document.getElementById('sortCategory');
  sortCategoryButton.addEventListener('click', () => {
  sortByCategory(true); 
});

  let isCategory = true;
  sortCategoryButton.addEventListener('click', () => {
  sortByCategory(isCategory);
  isCategory = !isCategory; 
});


// -----------------------------------------------------------------//
// ----------------Soretingsfunktionen för pris---------------------//

/**
 * Skapa en kopia på befintlig produktlista
 * Skapa en sortering i stigande ordning på pris
 * Skapa en variabel som hämtar produktlistan
 * Rensa befintlig lista
 * Skriv ut varje artikel på nytt
 * Skapa en variabel för sorteringsknappen med id sortPrice
 * Skapa en event lyssnare som kollar om man klickar på sorteringsknappen och byt riktning varannan gång
 */
function sortByPrice(Price) {
  const copiedProductList = [...productList];

  copiedProductList.sort((a, b) => {
    return Price ? a.pris - b.pris : b.pris - a.pris;
  }); 

  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = '';

  copiedProductList.forEach(eachProduct => {
    const productElement = document.createElement('div');
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
    productListElement.appendChild(productElement);
  });

}

const sortPriceButton = document.getElementById('sortPrice');
sortPriceButton.addEventListener('click', () => {
  sortByPrice(!isPrice);
  isPrice = !isPrice;
});

let isPrice = true;


// -----------------------------------------------------------------//
// ----------------Sorteingsfunktionen för rating-------------------//

/**
 * Skapa en kopia på befintlig produktlista
 * Skapa en sortering i fallande ordning på betyg
 * Skapa en variabel som hämtar produktlistan
 * Rensa befintlig lista
 * Skriv ut varje artikel på nytt
 * Skapa en variabel för sorteringsknappen med id sortRating
 * Skapa en event lyssnare som kollar om man klickar på sorteringsknappen och byt riktning varannan gång
 */
function sortByRating(Rating) {
  const copiedProductList = [...productList];

  copiedProductList.sort((a, b) => {
    return Rating ? a.raiting - b.raiting : b.raiting - a.raiting;
  });

  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = '';

  copiedProductList.forEach(eachProduct => {
    const productElement = document.createElement('div');
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
    productListElement.appendChild(productElement);
  });
}

const sortRatingButton = document.getElementById('sortRating');
sortRatingButton.addEventListener('click', () => {
  sortByRating(!isRating); 
  isRating = !isRating;
});

let isRating = true;

// -----------------------------------------------------------------//
// -----------------------Sortera efter ID--------------------------//

/**
 * Skapa en kopia på befintlig produktlista
 * Skapa en sortering på id
 * Skapa en variabel som hämtar produktlistan
 * Rensa befintlig lista
 * Skriv ut varje artikel på nytt
 * Skapa en variabel för sorteringsknappen med id sortStop
 * Skapa en event lyssnare som kollar om man klickar på sorteringsknappen
 */
function sortById(Id) {
  const copiedProductList = [...productList];
  
  copiedProductList.sort((a, b) => {
    return Id ? a.id - b.id : a.id - b.id;
  });

  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = '';

  copiedProductList.forEach(eachProduct => {
    const productElement = document.createElement('div');
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
    productListElement.appendChild(productElement);
  });

}

const sortIdButton = document.getElementById('sortStop');
sortIdButton.addEventListener('click', () => {
  sortById(!isId);
  isId = !isId;
});

let isId = true;


// -----------------------------------------------------------------//
// --------------Validering av formulär - Förnamn-------------------//

/**
 * Skapa en variabel för RegEx valideringen
 * Skapa en variabel för fältet för felmeddelande med id firstNameError
 * Skapa en if else sats som kollar om input fältet uppfyller RegEx valideringen
 * Skapa en variabel för input fältet med id fname
 * Skapa en event listener som kollar av värdet i input fältet och kör funktionen
 */
function validateFirstName(FirstName) {
  const FirstNameRegEx = /^[a-öA-Ö][a-öA-Ö '-]+$/;
  const FirstNameError = document.getElementById('firstNameError');

  if (!FirstNameRegEx.test(FirstName)) {
    FirstNameError.textContent = " Förnamnet får enbart innehålla bokstäver, mellanslag, apostrof och bindestreck.";
  } else {
    FirstNameError.textContent = '';
  }
}

const firstNameInput = document.getElementById('fname');
firstNameInput.addEventListener('input', () => {
  validateFirstName(firstNameInput.value);
});


// -----------------------------------------------------------------//
// --------------Validering av formulär - Efternamn-----------------//

/**
 * Skapa en variabel för RegEx valideringen
 * Skapa en variabel för fältet för felmeddelande med id lastNameError
 * Skapa en if else sats som kollar om input fältet uppfyller RegEx valideringen
 * Skapa en variabel för input fältet med id lname
 * Skapa en event listener som kollar av värdet i input fältet och kör funktionen
 */
function validateLastName(LastName) {
  const LastNameRegEx = /^[a-öA-Ö][a-öA-Ö '-]+$/;
  const LastNameError = document.getElementById('lastNameError');

  if (!LastNameRegEx.test(LastName)) {
    LastNameError.textContent = " Efternamn får enbart innehålla bokstäver, mellanslag, apostrof och bindestreck.";
  } else {
    LastNameError.textContent = '';
  }
}

const lastNameInput = document.getElementById('lname');
lastNameInput.addEventListener('input', () => {
  validateLastName(lastNameInput.value);
});

// -----------------------------------------------------------------//
// --------------Validering av formulär - Adressfält----------------//

/**
 * Skapa en variabel för RegEx valideringen
 * Skapa en variabel för fältet för felmeddelande med id addressError
 * Skapa en if else sats som kollar om input fältet uppfyller RegEx valideringen
 * Skapa en variabel för input fältet med id address
 * Skapa en event listener som kollar av värdet i input fältet och kör funktionen
 */
function validateAddress(Address) {
  const AddressRegEx = /^[a-öA-Ö0-9][a-öA-Ö0-9 '-]+$/;
  const AddressError = document.getElementById('addressError');

  if (!AddressRegEx.test(Address)) {
    AddressError.textContent = " Du har inte angett en giltig adress";
  } else {
    AddressError.textContent = '';
  }
}

const addressInput = document.getElementById('address');
addressInput.addEventListener('input', () => {
  validateAddress(addressInput.value);
});

// -----------------------------------------------------------------//
// --------------Validering av formulär - Postnummer----------------//
// ----------------------UNDER ARBETE!!!!---------------------------//

/**
 * Skapa en variabel för RegEx valideringen
 * Skapa en variabel för fältet för felmeddelande med id postalCodeError
 * Skapa en if else sats som kollar om input fältet uppfyller RegEx valideringen
 * Skapa en variabel för input fältet med id postalcode
 * Skapa en event listener som kollar av värdet i input fältet och kör funktionen
 */
function validatePostalCode(PostalCode) {
  const PotalCodeRegEx = /^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$/;
  const PostalCodeError = document.getElementById('postalCodeError');

  if (!PotalCodeRegEx.test(PostalCode)) {
    PostalCodeError.textContent = " Du har inte angett en giltig adress";
  } else {
    PostalCodeError.textContent = '';
  }
}

const postalCodeInput = document.getElementById('postalcode');
postalCodeInput.addEventListener('input', () => {
  validatePostalCode(postalCodeInput.value);
});

// -----------------------------------------------------------------//
// --------------Visa & dölj betalningsuppgifter--------------------//

/**
 * Skapa variabel för att hämta HTML elementet med rullistan för betalningsmetod (id payment-method)
 * Skapa en variabel för att hämta sektionen med alla fält för betalning med kort (is payment-details) 
 * Skapa en event lyssnare som kollar efter ändringar i rullistan
    Om valet är invoice/faktura visa inget
    Om valt är något annat så visa betalningsuppgifter
 */
const paymentMethodSelect = document.getElementById('payment-method');
const paymentDetailsSection = document.getElementById('payment-details');

paymentMethodSelect.addEventListener('change', () => {
  if (paymentMethodSelect.value !== 'invoice') {
    paymentDetailsSection.style.display = 'none';
  } else {
    paymentDetailsSection.style.display = 'block';
  }
});


// -----------------------------------------------------------------//
// ------------------Visa & dölj beställningsknapp------------------//

/**
 * Skapa en variabel för knappen med id "submitButton"
 * Skapa en variabel för att kontrollera obligatoriska fält
 * Skapa en variabel för att kontrollera ej obligatoriska fält
 * Skapa en funktion för att konrollera att obligatoriska fält är ifyllda
    Om det är sant: Visa knappen
    Om det är falskt: Dölj knappen
 * Skapa en event lyssnare som kollar efter ändringar på obligatoriska fält
 */
const submitButtonHide = document.getElementById("submitButton");
const requiredFields = document.querySelectorAll("input[required]:not([type='checkbox']), select[required]");
const optionalFields = document.querySelectorAll("input:not([required]), select:not([required])");

function checkRequiredFields() {
  let allRequiredFilled = true;
  for (const field of requiredFields) {
    if (!field.value.trim()) {
      allRequiredFilled = false;
      break;
    }
  }

  let atLeastOneOptionalFilled = false;
  for (const field of optionalFields) {
    if (field.value.trim()) {
      atLeastOneOptionalFilled = true;
      break;
    }
  }

  submitButtonHide.disabled = !allRequiredFilled || !atLeastOneOptionalFilled;
}

checkRequiredFields();

for (const field of [...requiredFields, ...optionalFields]) {
  field.addEventListener("change", checkRequiredFields);
}


// -----------------------------------------------------------------//
// ------------------Knapp för att tömma formulär-------------------//

/**
 * Skapa en variabel för formuläret med id "myForm" 
 * Återställ formuläret
 * Skapa en variabel för knappen med id "clearButton"
 * Skapa ett klick event för knappen
 */
function clearForm() {
   const form = document.getElementById("myForm");

  form.reset();
}

const removeButton = document.getElementById("clearButton");
removeButton.addEventListener("click", clearForm);


// -----------------------------------------------------------------//
// ------------------Beställningsbekräftelse------------------------//

/**
 * Skapa en variabel för knappen med id "submitButton"
 * Skapa ett klick event på knappen
 * Förhindra standardbeteendet för knappen (t.ex. att skicka formuläret)
 * Visa en bekräftelsedialogruta med frågan "Är du säker på att du vill skicka beställningen?"
    Om användaren klickar på "OK" i dialogrutan:
        Visa ett meddelande som säger "Tack för din beställning! Vår leveranstid är för närvarande 8 dagar."
    Annars:
        Visa ett meddelande som säger "Beställningen avbröts."
 */
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const confirmed = confirm('Är du säker på att du vill skicka beställningen?');

  if (confirmed) {
    alert('Tack för din beställning! Vår leveranstid är för närvarande 8 dagar.');
  } else {
    alert('Beställningen avbröts.');
  }
});