
// 탑 컴포넌트
fetch("./components/top.html")
  .then(response => response.text())
  .then(data => {
    const topContainer = document.getElementById("topContainer");
    topContainer.innerHTML = data;
  });

// 헤더 컴포넌트
fetch("./components/header.html")
  .then(response => response.text())
  .then(data => {
    const headerContainer = document.getElementById("headerContainer");
    headerContainer.innerHTML = data;
  });

// 푸터 컴포넌트
fetch("./components/footer.html")
  .then(response => response.text())
  .then(data => {
    const footerContainer = document.getElementById("footerContainer");
    footerContainer.innerHTML = data;
  });

const swiperpc = new Swiper('._use-pc', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop : true,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
});

const swiperm = new Swiper('._use-m', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop : true,
});

// 데이터 받아오기
async function fetchItems() {
  try {
    const response = await fetch("./data/products.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

// 아이템 생성 및 화면에 표시하는 함수
function createItemElement(item) {  
  const itemElement  = document.createElement("li");
  itemElement.classList.add("section-item");

  const linkElement = document.createElement("a");
  linkElement.href = "./pages/product.html?id=" + item.id; 
  itemElement.appendChild(linkElement);

  const solidElement = document.createElement("div");
  solidElement.classList.add("section-solid");
  linkElement.appendChild(solidElement);
  
  const imageElement = document.createElement("img");
  imageElement.src = item.image.medium;
  solidElement.appendChild(imageElement);

  const titleElement = document.createElement("h2");
  titleElement.textContent = item.title; 
  linkElement.appendChild(titleElement);
  
  const textElement = document.createElement("p");
  textElement.textContent = item.text; 
  linkElement.appendChild(textElement);

  const pricesElement = document.createElement("dl");
  pricesElement.classList.add("section-price");
  linkElement.appendChild(pricesElement);

  const perElement = document.createElement("dt");
  perElement.textContent = item.per; 
  pricesElement.appendChild(perElement);

  const priceElement = document.createElement("dd");
  priceElement.textContent = item.price;
  pricesElement.appendChild(priceElement);

  return itemElement;
}


// 원하는 객체 분류 및 화면에 표시
async function displayItems() {
  try {
    const data = await fetchItems();
    const selectedItems = data.goods.filter(item => ["11", "12", "13", "14", "16", "19"].includes(item.id));

    const itemListElement = document.getElementById("section-wrapper"); 
    
    selectedItems.forEach((item) => {
      const itemElement = createItemElement(item); 
      itemListElement.appendChild(itemElement); 
    });
  } catch (error) {
    console.log("Error displaying items:", error);
  }
}
displayItems();

// hidden 갯수별 숨김 함수
async function loadInitialScreen() {
  try {
    const itemList = document.getElementById("list-wrapper");
    const data = await fetchItems();
    const initialVisibleItemsW = 16; //초기 아이템 개수
    const initialVisibleItemsM = 12; //초기 아이템 개수
    const items = data.goods;

    items.forEach((item, index) => {
      const itemElement = createItemElement(item);
      itemList.appendChild(itemElement);
      if (index >= initialVisibleItemsW) {
        itemElement.classList.add("hidden-w"); 
      }
      if (index >= initialVisibleItemsM) {
        itemElement.classList.add("hidden-m"); 
      }
    });
    const moreButton = document.getElementById("more-button");
    moreButton.addEventListener("click", showMoreItems);
  } catch(error) {
    console.error("Error load initial screen", error);
  }
}
loadInitialScreen();

// more button 사라지는 함수
function showMoreItems() {
  const hiddenItemsW = document.getElementsByClassName("hidden-w");
  const hiddenItemsM = document.getElementsByClassName("hidden-m");

  while (hiddenItemsW.length > 0) {
    hiddenItemsW[0].classList.remove("hidden-w");
  }
  while (hiddenItemsM.length > 0) {
    hiddenItemsM[0].classList.remove("hidden-m");
  }

  const moreButton = document.getElementById("more-button");
  if (hiddenItemsW.length === 0 && hiddenItemsM.length === 0) {
    moreButton.style.display = "none"; // "더보기" 버튼을 숨깁니다.
  }
}















