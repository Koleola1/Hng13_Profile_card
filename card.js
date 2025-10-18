function updateTime() {
    const now = Date.now();
    document.getElementById('time').textContent = now;
}
setInterval(updateTime,1);