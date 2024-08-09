// 탑 컴포넌트
fetch ("../components/top.html")
  .then (Response => Response.text())
  .then (data => {
    const topContainer = document.getElementById("topContainer");
    topContainer.innerHTML = data;
  })

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

  document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");
  
    loginButton.addEventListener("click", function() {
      const memId = document.getElementById("memId").value;
      const memPasswd = document.getElementById("memPasswd").value;

      const usersDatabase = [
        { id: "wkdqndud120", password: "123123" },
      ];
  
      let loggedIn = false;
      for (const user of usersDatabase) {
        if (user.id === memId && user.password === memPasswd) {
          loggedIn = true;
          break;
        }
      }
  
      if (loggedIn) {
        alert("로그인 성공!");
        // 로그인 성공 시 메인 홈페이지로 이동하는 코드
        window.location.href = "../index.html";
      } else {
        alert("로그인 실패. 아이디와 비밀번호를 확인하세요.");
      }
    });
  });