document.addEventListener("DOMContentLoaded", () => {
    // Validasi Form Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Mencegah pengiriman form secara default
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                alert("Harap isi semua kolom sebelum login.");
                return;
            }

            // Simulasi login (ganti dengan logika autentikasi)
            alert("Login berhasil!");
            window.location.href = "index.html"; // Redirect ke halaman beranda setelah login
        });
    }

    // Validasi Form Register
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Mencegah pengiriman form secara default
            const fullname = document.getElementById("fullname").value.trim();
            const email = document.getElementById("email").value.trim();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirm-password").value.trim();

            if (fullname === "" || email === "" || username === "" || password === "" || confirmPassword === "") {
                alert("Harap isi semua kolom sebelum mendaftar.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Password dan konfirmasi password tidak cocok.");
                return;
            }

            // Simulasi pendaftaran (ganti dengan logika penyimpanan data)
            alert("Pendaftaran berhasil! Silakan login.");
            window.location.href = "login.html"; // Redirect ke halaman login setelah pendaftaran
        });
    }
});
