const themeSwitch = document.querySelector('#checkbox');

// Fungsi untuk menerapkan tema
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        themeSwitch.checked = true;
    } else {
        themeSwitch.checked = false;
    }
}

// Event listener untuk tombol
themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    } else {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    }
});

// Cek tema yang tersimpan saat halaman dimuat
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);