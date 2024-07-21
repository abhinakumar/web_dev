document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginCard').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('loginCard').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('loginCard')) {
        document.getElementById('loginCard').style.display = 'none';
    }
});
