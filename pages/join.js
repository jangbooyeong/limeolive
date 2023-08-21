// 탑 컴포넌트
fetch ("/components/top.html")
  .then (Response => Response.text())
  .then (data => {
    const topContainer = document.getElementById("topContainer");
    topContainer.innerHTML = data;
  })

// 헤더 컴포넌트
fetch("/components/header.html")
.then(response => response.text())
.then(data => {
  const headerContainer = document.getElementById("headerContainer");
  headerContainer.innerHTML = data;
  });

// 푸터 컴포넌트
fetch("/components/footer.html")
  .then(response => response.text())
  .then(data => {
    const footerContainer = document.getElementById("footerContainer");
    footerContainer.innerHTML = data;
  });

