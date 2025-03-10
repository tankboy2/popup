// 모달 창의 CSS 스타일을 정의하는 문자열
const modalStyles = `
.aros-modal {
    display: none; /* 기본적으로 숨겨진 상태 */
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    position: fixed;
    top: 0;
    left: 0;
}

.aros-modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(220, 220, 220); /* 연한 회색 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.aros-modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: visible;
    padding: 0;
    height: 100%;
}

.aros-modal-content .logo {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: auto;
    z-index: 10;
}

.aros-modal-button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: 'Noto Sans';
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    border-radius: 15px;
    height: 86px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    width: 100%;
    transition: box-shadow 0.3s ease;
}

.aros-modal-button:hover {
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.5);
}

.aros-modal-button.red {
    background-color: #FF0000;
    color: #fff;
}

.aros-modal-button.yellow {
    background-color: #ffb02a;
    color: #fff;
}

.aros-modal-button.blue {
    background-color: #1f21ff;
    color: #fff;
}

.aros-modal-button.black {
    background-color: black;
    color: #fff;
}
`;

// CSS 스타일을 페이지에 추가
const styleElement = document.createElement('style');
styleElement.innerHTML = modalStyles;
document.head.appendChild(styleElement);

// 페이지 로드 후 실행할 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function () {
    // 로고 이미지 생성
    var logoImage = document.createElement('img');
    logoImage.src = 'https://i.imgur.com/R27ROap.png'; // 로고 이미지 URL
    logoImage.alt = '로고'; // 접근성을 위한 alt 속성
    logoImage.className = 'logo'; // 스타일 적용을 위한 클래스 추가

    // 모달 내용 영역에 로고 추가
    var modalContent = document.querySelector('.aros-modal-content');
    if (modalContent) {
        modalContent.appendChild(logoImage);
    }

    // 모달 창 요소 찾기
    const modalElement = document.getElementById('aros-modal');
    const modalBg = document.getElementById('aros-back');

    // 모달 창이 존재하면 표시
    if (modalElement) {
        modalElement.style.display = 'flex';
    }
});
