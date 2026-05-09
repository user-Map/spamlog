const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const tokenInput = document.getElementById('accessToken');
const terminal = document.getElementById('logTerminal');
const liveStatus = document.getElementById('liveStatus');

let isRunning = false;
let spamInterval = null;

// Hàm tạo thông báo Popup (Toast)
function showToast(message, type = 'info') {
    const container = document.getElementById('notification-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    if(type === 'success') toast.style.borderLeftColor = '#2ed573';
    if(type === 'error') toast.style.borderLeftColor = '#ff4757';
    
    toast.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function addLog(text) {
    const line = document.createElement('div');
    line.className = 'line';
    line.textContent = `[${new Date().toLocaleTimeString()}] > ${text}`;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
}

startBtn.addEventListener('click', () => {
    const token = tokenInput.value.trim();
    
    if (!token) {
        showToast("Vui lòng nhập Access Token!", "error");
        return;
    }

    isRunning = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    tokenInput.disabled = true;
    
    liveStatus.textContent = "Đang chạy...";
    liveStatus.style.background = "#ff4757";
    
    showToast("Đã khởi động tiến trình Spam Log!", "success");
    addLog("Đang kết nối tới Server Garena...");
    addLog("Đang mã hóa gói tin Protobuf...");

    // Giả lập vòng lặp Spam (Trong thực tế bạn sẽ gọi API Backend ở đây)
    spamInterval = setInterval(() => {
        addLog("Gửi packet: 0115... thành công");
    }, 1500);
});

stopBtn.addEventListener('click', () => {
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    tokenInput.disabled = false;
    
    clearInterval(spamInterval);
    
    liveStatus.textContent = "Đã dừng";
    liveStatus.style.background = "#57606f";
    
    showToast("Đã dừng hệ thống spam.", "info");
    addLog("Dừng tiến trình theo yêu cầu.");
});
