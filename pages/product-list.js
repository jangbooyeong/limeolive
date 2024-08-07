// 탑 컴포넌트
fetch("../components/top.html")
  .then(response => response.text())
  .then(data => {
    const topContainer = document.getElementById("topContainer");
    topContainer.innerHTML = data;
  });

// 헤더 컴포넌트
fetch("../components/header.html")
.then(response => response.text())
.then(data => {
  const headerContainer = document.getElementById("headerContainer");
  headerContainer.innerHTML = data;
});

// 푸터 컴포넌트
fetch("../components/footer.html")
  .then(response => response.text())
  .then(data => {
    const footerContainer = document.getElementById("footerContainer");
    footerContainer.innerHTML = data;
  });

  document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    fetch('../data/product-list.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('origins.json 파일을 가져올 수 없습니다. 네트워크 오류가 발생했습니다.');
        }
        return response.json();
      })
      .then(data => {
        const categoryData = data.productList.find(item => item.category === category);
        if (categoryData) {
          categoryItem(categoryData);
        } else {
          console.error('해당하는 id 값에 대한 아이템 데이터를 찾을 수 없습니다.');
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  });

// 상단에 있는 타이틀 요소들
function categoryItem(categoryData) {
  const prodListH2 = document.querySelector(".prod-list-h2");
  const h2 = categoryData.h2;
  prodListH2.textContent = h2;

  const prodListEm = document.querySelector(".prod-list-em");
  const em = categoryData.em;
  prodListEm.textContent = em;

  const arrayList1 = document.querySelectorAll(".array-list")[0];
  const bestA = document.createElement("a");
  bestA.id = "bestA";
  bestA.href = categoryData.bestT;
  bestA.textContent = categoryData.best;
  arrayList1.appendChild(bestA);

  const arrayList2 = document.querySelectorAll(".array-list")[1];
  const rowA = document.createElement("a");
  rowA.id = "rowA";
  rowA.href = categoryData.rowT;
  rowA.textContent = categoryData.row;
  arrayList2.appendChild(rowA);

  const arrayList3 = document.querySelectorAll(".array-list")[2];
  const highA = document.createElement("a");
  highA.id = "highA";
  highA.href = categoryData.highT;
  highA.textContent = categoryData.high;
  arrayList3.appendChild(highA);
}

// products.json 불러가지고 category 뽑아버리기
document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  const sStep = urlParams.get("sStep");
  
  fetch('../data/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('origins.json 파일을 가져올 수 없습니다. 네트워크 오류가 발생했습니다.');
      }
      return response.json();
    })
    .then(data => {
      const categoryGoodsData = data.goods.filter(item => item.category === category);

      if (categoryGoodsData.length > 0) {
        categoryGoodsData.forEach(item => {
          const itemElement = categoryGoodsItem(item);
          const sectionWrapper = document.getElementById('section-wrapper');
          sectionWrapper.appendChild(itemElement);
        });
      } else {
        console.error('해당하는 id 값에 대한 아이템 데이터를 찾을 수 없습니다.');
      }

      if (sStep === 'bestT') {
        const arrayList = document.querySelectorAll(".array-list")[0];
        arrayList.classList.add("active");
        const sectionWrapper = document.getElementById('section-wrapper');
        sectionWrapper.innerHTML = '';
        if (categoryGoodsData.length > 0) {
          categoryGoodsData.forEach(item => {
            const itemElement = categoryGoodsItem(item);
            sectionWrapper.appendChild(itemElement);
          });
        }
      }

      if (sStep === 'rowT') {
        const arrayList = document.querySelectorAll(".array-list")[1];
        arrayList.classList.add("active");
        const sectionWrapper = document.getElementById('section-wrapper');
        sectionWrapper.innerHTML = '';
        categoryGoodsData.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
          return priceA - priceB; // 오름차순으로 정렬
        }); 
        categoryGoodsData.forEach(item => {
          const itemElement = categoryGoodsItem(item);
          sectionWrapper.appendChild(itemElement);
        });
      }

      if (sStep === 'highT') {
        const arrayList = document.querySelectorAll(".array-list")[2];
        arrayList.classList.add("active");
        const sectionWrapper = document.getElementById('section-wrapper');
        sectionWrapper.innerHTML = '';
        categoryGoodsData.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
          return priceB - priceA; // 내림차순으로 정렬
        }); 
        categoryGoodsData.forEach(item => {
          const itemElement = categoryGoodsItem(item);
          sectionWrapper.appendChild(itemElement);
        });
      }
    })
    .catch(error => {
      console.error(error.message);
    });
});

// 상품데이터가 나오는 함수 구간
function categoryGoodsItem(categoryGoodsData) {
  const itemElement  = document.createElement("li");
  itemElement.classList.add("section-item");

  const linkElement = document.createElement("a");
  linkElement.href = "../pages/product.html?id=" + categoryGoodsData.id; 
  itemElement.appendChild(linkElement);

  const solidElement = document.createElement("div");
  solidElement.classList.add("section-solid");
  linkElement.appendChild(solidElement);
  
  const imageElement = document.createElement("img");
  imageElement.src = categoryGoodsData.image.medium;
  solidElement.appendChild(imageElement);

  const titleElement = document.createElement("h2");
  titleElement.textContent = categoryGoodsData.title; 
  linkElement.appendChild(titleElement);
  
  const textElement = document.createElement("p");
  textElement.textContent = categoryGoodsData.text; 
  linkElement.appendChild(textElement);

  const pricesElement = document.createElement("dl");
  pricesElement.classList.add("section-price");
  linkElement.appendChild(pricesElement);

  const perElement = document.createElement("dt");
  perElement.textContent = categoryGoodsData.per; 
  pricesElement.appendChild(perElement);

  const priceElement = document.createElement("dd");
  priceElement.textContent = categoryGoodsData.price;
  pricesElement.appendChild(priceElement);

  return itemElement;
}
