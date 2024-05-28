const modalStyles = `
    .ggumiweb-modal {
        display: none; /* 기본적으로 숨김 */
        width: 100vw;
        height: 100vh;
        z-index: 99999;
        position: fixed;
        top: 0;
        left: 0;
    }
    .ggumiweb-modal-bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ggumiweb-modal-content {
        position: relative;
        display: inline-block;
        overflow: visible; /* 콘텐츠 오버플로우 허용 */
    }
    .ggumiweb-modal-content .logo {
        position: absolute;
        top: 10px;
        right: 10px; /* 필요에 따라 조정 */
        width: 50px;
        height: auto;
        z-index: 10;
    }
    .ggumiweb-modal-cancel-container {
        position: absolute;
        top: -30px;
        right: -30px;
        cursor: pointer;
    }
    .ggumiweb-modal-cancel {
        font-size: 30px;
        color: white;
    }
    .ggumiweb-modal-container {
        margin-top: 0;
        position: relative;
        border-radius: 5px;
        max-width: 1122px;
        background-color: white;
    }
    .ggumiweb-modal-content img {
        display: block;
        width: 500px;
        height: 500px;
        object-fit: contain;
        background-color: #4462f900;
    }
    .ggumiweb-modal-actions {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 36px 0;
        column-gap: 15px;
        background-color: white;
    }
    .ggumiweb-modal-button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-family: 'SUIT Bold';
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        border-radius: 5px;
        width: 191px;
        height: 51px;
    }
    .ggumiweb-modal-button.blue {
        background-color: #4461f9;
        color: #fff; /* 텍스트 색상 흰색 */
    }
    .ggumiweb-modal-button.black {
        background-color: black;
        color: #fff; /* 텍스트 색상 흰색 */
    }
    /* 태블릿 장치에 대한 미디어 쿼리 */
    @media (max-width: 768px) {
        .ggumiweb-modal-container {
            max-width: 300px;
            margin-top: 15%;
        }
        .ggumiweb-modal-content img {
            width: 300px;
            height: 300px;
        }
        .ggumiweb-modal-actions {
            padding: 18px 0;
        }
        .ggumiweb-modal-button {
            width: 100px;
            height: 40px;
            word-break: keep-all;
            font-size: 12px;
        }
    }
`;
const styleElement = document.createElement('style');
styleElement.innerHTML = modalStyles;
document.head.appendChild(styleElement);

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('ggumiweb-modal');
    const dismissButton = document.getElementById('ggumiweb-back');
    const modalDismissedTime = localStorage.getItem('modalDismissedTime');
    const currentTime = new Date().getTime();

    // 모달을 닫은 지 5초가 지나지 않았으면 모달을 표시하지 않음
    if (modalDismissedTime && currentTime - modalDismissedTime < 5000) return;

    // 스크롤 이벤트 리스너
    document.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollY / scrollableHeight) * 100;
        
        // 스크롤이 50% 이상이면 모달을 표시
        if (scrollPercent >= 50) {
            modal.style.display = 'flex';
        }
    });

    // 'Dismiss' 버튼 클릭 이벤트
    dismissButton.addEventListener('click', function() {
        modal.style.display = 'none';
        localStorage.setItem('modalDismissedTime', new Date().getTime());
    });
});