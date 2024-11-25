/*
 X Skapa en array med objekt som bär alla produkterna. 
 X Skapa en funktion som loopar ut alla produkterna på sidan/i vår html struktur.
 X Skapa visuell bild av rating 
 X Skapa funktion för plus och minus av antal 
 X Skapa sorteringsfunktioner
 - Skapa funktion för varukorg
 - Skapa funktion som beräknar totalen (och uppdateras vid förändring)
 - Toggla funktioner i beställningsformuläret som ska döljas och synas. 
 - Skapa en timer som räknar ner och deletar innehåll
 - Fält i formuläret ska valideras innan det går att skicka beställningen. 
 - Lägg in regler för rabatter
 - Bekrätfelse ruta vid beställning
 - Funktion för betalningssätt. 
 - Visa/dölj beställningsknapp
 - Rensa knapp för beställningsformulär
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
          <button class="remove" id="remove-${eachProduct.id}"><span class="material-symbols-outlined">remove_shopping_cart</span></button>
          <input type="number" min="0" value="${eachProduct.amount}" id="input-${eachProduct.id}">
          <button class="add" id="add-${eachProduct.id}"><span class="material-symbols-outlined">add_shopping_cart</span></button>
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
}

// -----------------------------------------------------------------//
// ----------------Funktion för plus knappar-----------------------//

function addProductCount(e) {
  const addProductId = Number(e.target.id.replace('add-', ''));

  
  const foundProductIndexAdd = productList.findIndex(eachProduct => eachProduct.id === addProductId);
  console.log('Okjetet är:', foundProductIndexAdd);

  if (foundProductIndexAdd === -1) {
    productList[foundProductIndexAdd].amount += 1;

  const productContainerAdd = e.target.closest('.eachProduct');
  const inputAdd = productContainerAdd.querySelector('input');
  inputAdd.value = productList[foundProductIndexAdd].amount;
}
}

// -----------------------------------------------------------------//
// ----------------Funktion för att fylla varukorg------------------//
// ------------------------FUNGERAR EJ!!----------------------------//

function updateCart() {
  const cartItems = productList.filter(eachProduct => eachProduct.amount > 0);

  console.log(cartItems);

  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';

  cartItems.forEach(eachProduct => {
    const productElement = document.createElement('article');
    productElement.classList.add('product-cart');
    productElement.innerHTML += `
      <img src="${eachProduct.img.url}" alt="${eachProduct.img.alt}">
      <h2>${eachProduct.namn}</h2>
      <h3>${eachProduct.amount} st</h3>
      <h3>${eachProduct.amount * eachProduct.pris} kr</h3>
    `;
    cartElement.appendChild(productElement);
  });

  
  updateTotal();
}

// -----------------------------------------------------------------//
// ----------Funktion för att beräkna totalen i varukorgen----------//
// ------------------------FUNGERAR EJ!!----------------------------//

function updateTotal() {
  const cartItemsTotal = productList.filter(eachproduct => eachproduct.amount > 0);
  let totalCost = 0;

  cartItemsTotal.forEach(eachProduct => {
      totalCost += eachProduct.amount * eachProduct.pris;
  });

  const totalElement = document.getElementById('totalCost');
  if (totalElement) {
      totalElement.textContent = `Totalt: ${totalCost} kr`;
  } else {
      console.error('Element with ID "totalCost" not found.');
  }
}


updateCart();


// -----------------------------------------------------------------//
// --------------------Totalsumma upp på sidan--------------------- //
// -------------------------FUNGERAR EJ-----------------------------//

function updateSum() {
  const TotalSum = productList.filter(eachproduct => eachproduct.amount > 0);
  let totalSum = 0;

  TotalSum.forEach(eachProduct => {
      totalSum += eachProduct.amount * eachProduct.pris;
  });

  const totalSumElement = document.getElementById('totalSum');
  if (totalSumElement) {
      totalSumElement.textContent = `${totalSum} kr`;
  } else {
      console.error('Element with ID "totalSum" not found.');
  }
}

updateSum();


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