// Smooth Scrolling for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive Button Effects
document.querySelectorAll('.explore-btn').forEach(button => {
    button.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#f40612';
    });
    button.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#e50914';
    });
});

// Dark Mode Toggle
const toggleDarkMode = document.querySelector('#dark-mode-toggle');
toggleDarkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
// Smooth Scrolling for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive Button Effects
document.querySelectorAll('.explore-btn').forEach(button => {
    button.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#f40612';
    });
    button.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#e50914';
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.querySelector('.explore-btn');

    if (exploreBtn) {
        exploreBtn.addEventListener('click', (event) => {
            // Tambahkan kelas animasi ke tombol
            exploreBtn.classList.add('animate-click');

            // Hapus kelas animasi dan arahkan setelah animasi selesai
            setTimeout(() => {
                window.location.href = 'gallery.html'; // Ubah URL sesuai tujuan
            }, 200); // Durasi animasi dalam milidetik
        });
    }
});

/* ini tombol  hamburger #naskahmenu */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active'); // Toggle kelas 'active' untuk menampilkan atau menyembunyikan menu
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.tab-button');

    // Fungsi untuk menampilkan tab
    function showTab(tabId) {
        const tabs = document.querySelectorAll('.class-members');
        tabs.forEach(function(tab) {
            tab.classList.remove('show');
        });

        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.classList.add('show');
        }
    }

    // Cek fragment identifier saat halaman dimuat
    const hash = window.location.hash;
    if (hash) {
        const classId = hash.substring(1);
        showTab(classId);
    } else {
        // Tampilkan tab pertama jika tidak ada hash
        const firstTabId = buttons[0].getAttribute('data-class');
        showTab(firstTabId);
    }

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const classId = this.getAttribute('data-class');
            showTab(classId);
            // Perbarui fragment identifier di URL
            window.location.hash = classId;
        });
    });
});
