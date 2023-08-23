# Project Part1 라임올리브 홈쇼핑 사이트 제작 
📌<라임올리브 클론코딩> </br></br>

## 🚩프로젝트를 만든 목적
html과 css 및 자바스크립트 언어를 활용한 프로젝트가 홈쇼핑이 가장 적합한 페이지라고 생각하고 그 외 상품들의 리스트 컴포넌트 기능, api를 활용한 외부 데이터 호출 및 동적 html 제작 을 하고 싶어서 프로젝트를 개발 </br></br>

## 🚩프로젝트 작업 순서
### 1.메인페이지 스와이프제작,추천아이템 제작, 모든아이템 제작, 컴포넌트 페이지 제작
### 2.상세설명페이지 제작
### 3.카테고리페이지 제작
### 4.로그인 및 회원가입 페이지 제작 </br></br>

## 🚩프로젝트 개발 언어 및 개발자
<img src="https://cdn-icons-png.flaticon.com/128/9496/9496578.png"></img>
<img src="https://cdn-icons-png.flaticon.com/128/9496/9496599.png"></img>
<img src="https://cdn-icons-png.flaticon.com/128/9407/9407318.png"></img> </br>
### ❗개발인원(1명):장부영 </br></br>

## 🚩프로젝트 구축한 핵심기능들
### 📌fetch기능 
```
async function fetchItems() {
  try {
    const response = await fetch("./data/products.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
```
### 📌버튼더보기 기능
```
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

// 클릭이벤트 리스너 클릭스 이벤트 함수 호출
const moreButton = document.getElementById("more-button");
moreButton.addEventListener("click", showMoreItems);

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
```
### 📌탑버튼 기능
```
window.onscroll = function() {
  const topButton = document.getElementById("topButton");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};
  // scrollToTop 함수
  function scrollToTop() {  
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
```
### 📌sort 기능
```
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
```
</br>

## 🚩프로젝트 섹션별 작업 시간
### 메인페이지 (총:35시간)
### 상세페이지 (총:25시간)
### 카테고리페이지 (총:30시간)
### 로그인페이지 (총:8시간)
### 회원가입페이지 (총:6시간) </br></br>
## 🚩프로젝트 개발후 개인 평가
### 웹개발에서 협업을 하였을때 제일 중요한 것이 서버가 코드를 보았을때 오해의 소지가 있고 의사소통이 잘 안되어 있는 코드면 가속성과 편의성이 떨어지기 반면이다. 그래서 다음 프로젝트 작성시 최대한 가속성과 편의성을 담은 코드를 참고할 생각이다. 
### ❗프로젝트 개발일지 블로그 주소: https://wkdqndud120.tistory.com/
