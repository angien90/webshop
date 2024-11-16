/*
 X Skapa en array med objekt som bär alla produkterna. 
 X Skapa en funktion som loopar ut alla produkterna på sidan/i vår html struktur. 
 - Skapa funktion för plus och minus antal 
 - Skapa funktion som beräknar totalen (och uppdateras vid förändring)
 - Skapa visuell bild av raiting
 - Toggla funktioner i beställningsformuläret som ska döljas och synas. 
 - Skapa en timer som räknar ner och deletar innehåll
 - Fält i formuläret ska valideras innan det går att skicka beställningen. 
 -
 */



//  Produktlistan  //
const productList = [
  {
    id: 0,
    namn: 'Kolakungen',
    img: {
      url: 'img/Munk_med_kola_glasyr.png',
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
      url: 'img/Munk_extra_choklad.png',
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
      url: 'img/Munk_grön_glasyr_med_musli.png',
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
      url: 'img/Munk_med_honungs_glasyr.png',
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
      url: 'img/Munk_rosa_glasyr_med_florsocker.png',
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
      url: 'img/Munk_utan_glasyr.png',
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
      url: 'img/Munk_rosa_glasyr_med_godis.png',
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
      url: 'img/Munk_choklad_glasyr_med_nötter__och_bär.png',
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
      url: 'img/Munk_orange_gasyr_med_apelsin.png',
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
    id: 11,
    namn: 'Rosapantern',
    img: {
      url: 'img/Munk_rosa_glasyr_med_strössel.png',
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
    id: 12,
    namn: 'Nötskallen',
    img: {
      url: 'img/Munk_choklad_och_nötter.png',
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
    id: 13,
    namn: 'Polarbjörnen',
    img: {
      url: 'img/Munk_vit_glasyr_med_choklad_strössel.png',
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
          <button><span class="material-symbols-outlined">remove_shopping_cart</span></button>
          <input type="number" value="0">
          <button><span class="material-symbols-outlined">add_shopping_cart</span></button>
        </div>
      </article>
    `; 
  });
}

printProductListDiv();
