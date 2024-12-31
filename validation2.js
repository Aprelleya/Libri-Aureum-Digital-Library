document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm"); // Ambil form berdasarkan ID

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Hentikan pengiriman form default

            // Ambil nilai input
            const fullname = document.getElementById("fullname").value.trim();
            const email = document.getElementById("email").value.trim();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirm-password").value.trim();

            // Validasi input
            if (!fullname || !email || !username || !password || !confirmPassword) {
                alert("Harap isi semua kolom sebelum mendaftar.");
                return;
            }

            const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            if (!emailPattern.test(email)) {
                alert("Harap masukkan email yang valid.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Password dan konfirmasi password tidak cocok.");
                return;
            }

            if (password.length < 6) {
                alert("Password harus memiliki minimal 6 karakter.");
                return;
            }

            // Jika validasi lolos, tampilkan pesan berhasil
            alert("Pendaftaran berhasil! Silakan login.");
            registerForm.reset(); // Reset form setelah berhasil
        });
    }
});
