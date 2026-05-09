const logBody = document.getElementById('logBody');
const statusDot = document.getElementById('status-dot');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

function addLog(text, color = "#00ff00") {
    const p = document.createElement('div');
    p.style.color = color;
    p.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
    logBody.appendChild(p);
    logBody.scrollTop = logBody.scrollHeight; // Tự động cuộn xuống log mới nhất
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.style.display = 'block';
    setTimeout(() => { t.style.display = 'none'; }, 2000);
}

startBtn.onclick = async () => {
    const token = document.getElementById('accessToken').value;
    if(!token) return showToast("Chưa nhập Token!");

    startBtn.disabled = true;
    stopBtn.disabled = false;
    statusDot.classList.add('active');
    addLog("Đang khởi tạo tiến trình...", "#ffff00");

    // ĐÂY LÀ PHẦN LÀM CHO WEB CÓ CÔNG DỤNG:
    // Bạn cần chạy một script Python (Flask) ở local hoặc server để nhận yêu cầu này
    try {
        addLog("Đang gửi lệnh tới server xử lý...");
        
        // Giả lập gửi tới server xử lý Spam
        // Trong thực tế bạn sẽ dùng: await fetch('http://localhost:5000/start-spam?token=' + token);
        
        addLog("Packet đã được gửi: AccountID: 8038983330...");
        addLog("Đang spam TCP tới IP Garena...");
    } catch (e) {
        addLog("Lỗi kết nối Server!", "#ff0000");
    }
};

stopBtn.onclick = () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    statusDot.classList.remove('active');
    addLog("Đã dừng tiến trình.", "#ff4757");
};
