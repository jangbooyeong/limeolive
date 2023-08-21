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
  // URL에서 쿼리 매개변수를 가져옵니다.
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
  // images.json 파일을 가져옵니다.
  fetch('../data/images.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('네트워크 오류로 images.json 파일을 가져올 수 없습니다.');
      }
      return response.json();
    })
    .then(data => {
      // 해당 id 값을 가진 이미지 데이터를 가져옵니다.
      const imageData = data.images.find(image => image.id === id);
      if (imageData) {
        // 이미지 요소를 생성하고 화면에 표시합니다.
        displayImage(imageData);
      } else {
        console.error('해당 id에 대한 이미지 데이터를 찾을 수 없습니다.');
      }
    })
    .catch(error => {
      console.error(error.message);
    });
});

// 이미지 요소를 화면에 표시하는 함수
function displayImage(imageData) {
  const imageContainer = document.querySelector('.swiper-wrapper');
  
  // 첫번쨰 div
  const swiperWrapper1 = document.createElement("div");
  swiperWrapper1.classList.add("swiper-slide");

  // 첫번째 img
  const FristimgElement = document.createElement('img');
  FristimgElement.src = imageData.mediumFrist;
  FristimgElement.id = "slide1";
  FristimgElement.alt = "Image 1";

  // 첫번째 이미지 요소를 화면에 추가
  swiperWrapper1.appendChild(FristimgElement);
  imageContainer.appendChild(swiperWrapper1);

  // 두 번째 img 요소 있을시 속성 표시
  if (imageData.mediumSecond) {
    // 두번째 div
    const swiperWrapper2 = document.createElement("div");
    swiperWrapper2.classList.add("swiper-slide");
    
    // 두번쨰 img
    const secondImgElement = document.createElement('img');
    secondImgElement.src = imageData.mediumSecond;
    secondImgElement.id = "slide2";
    secondImgElement.alt = "Image 2";
    
    // 두번째 이미지 요소를 화면에 추가
    swiperWrapper2.appendChild(secondImgElement);
    imageContainer.appendChild(swiperWrapper2);
  }
}


const swiper = new Swiper('.swiper-container', {
  loop : false,
  pagination: {
  el: '.swiper-pagination',
  type : 'fraction',
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // URL에서 쿼리 매개변수 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
  // origins.json 파일 가져오기
  fetch('../data/origins.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('origins.json 파일을 가져올 수 없습니다. 네트워크 오류가 발생했습니다.');
      }
      return response.json();
    })
    .then(data => {
      // 해당 id 값에 해당하는 아이템 데이터 가져오기
      const itemData = data.origins.find(item => item.id === id);
      if (itemData) {
        // 해당 아이템 데이터를 화면에 표시하는 함수 호출
        displayItem(itemData);
      } else {
        console.error('해당하는 id 값에 대한 아이템 데이터를 찾을 수 없습니다.');
      }
    })
    .catch(error => {
      console.error(error.message);
    });
});

// origins.json 안에 데이터들을 가져오는 함수
function displayItem(itemData) {
  const prodInfoTop = document.querySelector('.prod-info-top');
  const prodInfoPrice = document.querySelector('.prod-info-price');
  const prodInfoTotal = document.querySelector('.prod-info-total');

  const title = itemData.title;
  const per = itemData.per;
  const del = itemData.del;
  const price = itemData.price;
  const total = itemData.total;
  
  // prod-info-top 요소
  const h2 = document.createElement('h2');
  h2.textContent = title;
  prodInfoTop.appendChild(h2);

  // prod-info-price 요소
  const perStrong = document.createElement("strong");
  perStrong.classList.add("per-strong")
  perStrong.textContent = per;
  prodInfoPrice.appendChild(perStrong);

  const priceDl = document.createElement("dl");
  prodInfoPrice.appendChild(priceDl);
  const priceDt = document.createElement("dt");
  priceDl.appendChild(priceDt);
  const priceDel = document.createElement("del");
  priceDel.textContent = del;
  priceDt.appendChild(priceDel);

  const priceDd = document.createElement("dd");
  priceDd.textContent = price;
  priceDl.appendChild(priceDd);

  // prod-info-total 요소
  const totalDl = document.createElement("dl");
  prodInfoTotal.appendChild(totalDl);
  const totalDt = document.createElement("dt");
  totalDl.appendChild(totalDt);
  const totalSpan = document.createElement("span");
  totalSpan.textContent = total;
  totalDt.appendChild(totalSpan);
  const totalDd = document.createElement("dd");
  totalDd.textContent = price;
  totalDl.appendChild(totalDd);
}

document.addEventListener('DOMContentLoaded', function() {
  // URL에서 쿼리 매개변수 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
  // origins.json 파일 가져오기
  fetch('../data/descriptions.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('origins.json 파일을 가져올 수 없습니다. 네트워크 오류가 발생했습니다.');
      }
      return response.json();
    })
    .then(data => {
      // 해당 id 값에 해당하는 아이템 데이터 가져오기
      const descriptionsData = data.descriptions.find(descriptions => descriptions.id === id);
      if (descriptionsData) {
        // 해당 아이템 데이터를 화면에 표시하는 함수 호출
        displaydescriptions(descriptionsData);
      } else {
        console.error('해당하는 id 값에 대한 아이템 데이터를 찾을 수 없습니다.');
      }
    })
    .catch(error => {
      console.error(error.message);
    });
});

function displaydescriptions(descriptionsData) {
  const prodDetailWrapper = document.querySelector('.prod-detail-list');

  const medium1 = descriptionsData.medium1;
  const medium2 = descriptionsData.medium2;
  const medium3 = descriptionsData.medium3;
  const medium4 = descriptionsData.medium4;

  const detailImg1 = document.createElement("img");
  detailImg1.src = medium1;
  prodDetailWrapper.appendChild(detailImg1);
  // 2
  if (descriptionsData.medium2) {
  const detailImg2 = document.createElement("img");
  detailImg2.src = medium2;
  prodDetailWrapper.appendChild(detailImg2);
  }
  // 3
  if (descriptionsData.medium3) {
  const detailImg3 = document.createElement("img");
  detailImg3.src = medium3;
  prodDetailWrapper.appendChild(detailImg3);
  }
  // 4
  if (descriptionsData.medium4) {
  const detailImg4 = document.createElement("img");
  detailImg4.src = medium4;
  prodDetailWrapper.appendChild(detailImg4);
  }
}