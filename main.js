/*
 X Skapa en array med objekt som bär alla produkterna. 
 X Skapa en funktion som loopar ut alla produkterna på sidan/i vår html struktur. 
 - Skapa funktion för plus och minus av antal 
 - Skapa funktion som beräknar totalen (och uppdateras vid förändring)
 - Skapa visuell bild av raiting
 - Toggla funktioner i beställningsformuläret som ska döljas och synas. 
 - Skapa en timer som räknar ner och deletar innehåll
 - Fält i formuläret ska valideras innan det går att skicka beställningen. 
 - Lägg in regler för rabatter
 - Lägg till funktion för varukorg
 - Bekrätfelse ruta vid beställning
 - Funktion för betalningssätt. 
 - Validering av formulär + markering vid fel
 - Visa/dölj beställningsknapp
 - Rensa knapp för beställningsformulär
 - Funktion fö rabattkod
 - Effekt när Totalen uppe på sidan uppdateras
 */



//  Skapande av produktlista  //
const productList = [
  {
    id: 0,
    namn: 'Kolakungen',
    img: {
      url: './img/munk_med_kola_glasyr.png',
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
      url: './munk_choklad_glasyr.png',
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
      url: 'img/munk_extra_choklad.png',
      width: 400,
      height: 400,
      alt: 'Munk med chokladglasyr och chokladbitar' 
    },
    raiting: 4,
    kategori: 'Choklad',
    pris: 20,
    amount: 0
  },

  {
    id: 3,
    namn: 'Smurfmunken',
    img: {
      url: 'img/munk_gron_glasyr_med_musli.png',
      width: 400,
      height: 400,
      alt: 'Munk med päronglasyr och musli' 
    },
    raiting: 4,
    kategori: 'Glutenfri',
    pris: 20,
    amount: 0
  },

  {
    id: 4,
    namn: 'Guldklumpen',
    img: {
      url: 'img/munk_med_honungs_glasyr.png',
      width: 400,
      height: 400,
      alt: 'Munk med honungsglasyr och choklad strössel' 
    },
    raiting: 4,
    kategori: 'Övrigt',
    pris: 20,
    amount: 0
  },

  {
    id: 5,
    namn: 'Rosa moln',
    img: {
      url: 'img/munk_rosa_glasyr_med_florsocker.png',
      width: 400,
      height: 400,
      alt: 'Munk med hallonglasyr och florsocker' 
    },
    raiting: 4,
    kategori: 'Glutenfri',
    pris: 20,
    amount: 0
  },

  {
    id: 6,
    namn: 'Smaklösa Sven',
    img: {
      url: 'img/munk_utan_glasyr.png',
      width: 400,
      height: 400,
      alt: 'Munk utan glasyr' 
    },
    raiting: 4,
    kategori: 'Övrigt',
    pris: 20,
    amount: 0
  },

  {
    id: 7,
    namn: 'Rosa prinsessan',
    img: {
      url: 'img/munk_rosa_glasyr_med_godis.png',
      width: 400,
      height: 400,
      alt: 'Munk med hallonglasyr och godis' 
    },
    raiting: 4,
    kategori: 'Hallon',
    pris: 20,
    amount: 0
  },

  {
    id: 8,
    namn: 'Trollkarlens förtrollning',
    img: {
      url: 'img/munk_choklad_glasyr_med_notter_och_bar.png',
      width: 400,
      height: 400,
      alt: 'Munk med chokladglasyr samt bär och nötter' 
    },
    raiting: 4,
    kategori: 'Choklad',
    pris: 20,
    amount: 0
  },

  {
    id: 9,
    namn: 'C-vitamin-kungen',
    img: {
      url: 'img/munk_orange_gasyr_med_apelsin.png',
      width: 400,
      height: 400,
      alt: 'Munk med apelsinglasyr och apelsinbitar' 
    },
    raiting: 4,
    kategori: 'Glutenfri',
    pris: 20,
    amount: 0
  },

  {
    id: 10,
    namn: 'Rosapantern',
    img: {
      url: 'img/munk_rosa_glasyr_med_strossel.png',
      width: 400,
      height: 400,
      alt: 'Munk med hallonglasyr och strössel' 
    },
    raiting: 4,
    kategori: 'Övrigt',
    pris: 20,
    amount: 0
  },

  {
    id: 11,
    namn: 'Nötskallen',
    img: {
      url: 'img/munk_choklad_och_notter.png',
      width: 400,
      height: 400,
      alt: 'Munk med chokladglasyr och nötter' 
    },
    raiting: 4,
    kategori: 'Glutenfri',
    pris: 20,
    amount: 0
  },

  {
    id: 12,
    namn: 'Polarbjörnen',
    img: {
      url: 'img/munk_vit_glasyr_med_choklad_strossel.png',
      width: 400,
      height: 400,
      alt: 'Munk med vit glasyr och choklad strössel' 
    },
    raiting: 4,
    kategori: 'Övrigt',
    pris: 20,
    amount: 0
  },
];

//  Utskrift av produktlistan  //
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
          <h3>${eachProduct.raiting}</h3>
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

// Funktion för minus knappar //
function removeProductCount(e) {
  const removeProductId = Number(e.target.id.replace('remove-', ''));
  console.log('Du klickade på ID:', removeProductId);

  // Letar upp produkt med hjälp av id //
  const foundProductIndexRemove = productList.findIndex(eachProduct => eachProduct.id === removeProductId);
  console.log('Okjetet är:', foundProductIndexRemove);

  if (foundProductIndexRemove === -1) {
    console.error('Kolla att id:t är rätt.');
    return;
  }

  // Kontrollera om mängden är större än 0 och uppdatering av fält  //
  if (productList[foundProductIndexRemove].amount > 0) {
    productList[foundProductIndexRemove].amount -= 1;
    const productContainerRemove = e.target.closest('.eachProduct');
    const inputRemove = productContainerRemove.querySelector('input');
    inputRemove.value = productList[foundProductIndexRemove].amount;
  } else {
    console.log("Du kan inte ha ett negativt antal produkter.");
  }
}


// Funktion för plus knappar //
function addProductCount(e) {
  const addProductId = Number(e.target.id.replace('add-', ''));
  console.log('clicked on button with id', addProductId);

     // Letar upp produkt med hjälp av id //
  const foundProductIndexAdd = productList.findIndex(eachProduct => eachProduct.id === addProductId);
  console.log('found eachProduct at index', foundProductIndexAdd);

  if (foundProductIndexAdd === -1) {
    console.error('Kolla att id:t är rätt.');
    return;
  }

   // Uppdatering av fält vid klick //
  productList[foundProductIndexAdd].amount += 1;

  const productContainerAdd = e.target.closest('.eachProduct');
  const inputAdd = productContainerAdd.querySelector('input');
  inputAdd.value = productList[foundProductIndexAdd].amount;
}