document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const greetingMessage = document.getElementById('greeting-message');

    // Fungsi untuk menampilkan pesan selamat datang "Hi Name"
    function displayGreeting(name) {
        if (name) {
            greetingMessage.textContent = `Hai ${name}, ada yang bisa kami bantu?`;
        } else {
            greetingMessage.textContent = ''; // Kosongkan jika tidak ada nama
        }
    }

    // Contoh: Meminta nama saat halaman dimuat (jika ingin fitur "Hi Name" awal)
    // const userName = prompt("Siapa nama Anda?");
    // displayGreeting(userName);


    // Validasi Formulir
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form untuk submit secara default

            let isValid = true;

            // Reset pesan error
            document.querySelectorAll('.error-message').forEach(span => {
                span.textContent = '';
            });

            // Validasi Nama
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Nama tidak boleh kosong.';
                isValid = false;
            }

            // Validasi Email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email tidak boleh kosong.';
                isValid = false;
            } else if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = 'Format email tidak valid.';
                isValid = false;
            }

            // Validasi Telepon (hanya angka)
            const phoneInput = document.getElementById('phone');
            const phoneError = document.getElementById('phone-error');
            const phonePattern = /^[0-9]+$/; // Hanya angka
            if (phoneInput.value.trim() === '') {
                phoneError.textContent = 'Nomor telepon tidak boleh kosong.';
                isValid = false;
            } else if (!phonePattern.test(phoneInput.value)) {
                phoneError.textContent = 'Nomor telepon hanya boleh angka.';
                isValid = false;
            }

            // Validasi Pesan
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Pesan tidak boleh kosong.';
                isValid = false;
            }

            if (isValid) {
                // Jika semua valid, tampilkan pesan sukses dan "Hi Name"
                const submittedName = nameInput.value.trim();
                alert(`Terima kasih, ${submittedName}! Pesan Anda telah berhasil dikirim.`);
                displayGreeting(submittedName); // Tampilkan pesan Hai Name

                // Kosongkan formulir setelah submit
                contactForm.reset();
            }
        });
    }

    // Navigasi Smooth Scroll
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Mengurangi tinggi header agar tidak tertutup
                    behavior: 'smooth'
                });
            }
        });
    });
});