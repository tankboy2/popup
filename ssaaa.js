const _0x1a9b15 = _0x5917;
function _0x5917(_0x6d6697, _0x280774) {
    const _0x620e00 = _0x620e();
    return _0x5917 = function (_0x591784, _0x4ce9a8) {
        _0x591784 = _0x591784 - 0x12b;
        let _0x798627 = _0x620e00[_0x591784];
        return _0x798627;
    }, _0x5917(_0x6d6697, _0x280774);
}

function _0x620e() {
    return [
        'my-modal', 'my-modal-bg', 'addEventListener', 'DOMContentLoaded',
        'getElementById', 'style', 'display', 'createElement',
        'appendChild', 'innerHTML', 'head', 'flex'
    ];
}

document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('my-modal');
    
    if (modalElement) {
        modalElement.style.display = 'flex'; // 모달 표시
    }
});

// 스타일 적용
const modalStyles = `
.my-modal {
    display: none;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    position: fixed;
    top: 0;
    left: 0;
}

.my-modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(220, 220, 220);
    display: flex;
    justify-content: center;
    align-items: center;
}`;

const styleElement = document.createElement('style');
styleElement.innerHTML = modalStyles;
document.head.appendChild(styleElement);
