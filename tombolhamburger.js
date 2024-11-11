    // Mengambil elemen yang diperlukan  
    const hamburger = document.getElementById('hamburger');  
    const navMenu = document.getElementById('nav-menu');  
    const darkModeToggle = document.getElementById('dark-mode-toggle');  
    const body = document.body;  
    
    // Fungsi untuk mengatur tampilan menu hamburger  
    hamburger.addEventListener('click', () => {  
        navMenu.classList.toggle('active');  
    });  
    
    // Menutup menu saat mengklik di luar menu  
    document.addEventListener('click', (event) => {  
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {  
            navMenu.classList.remove('active');  
        }  
    });  
    
    // Mengatur mode gelap  
    darkModeToggle.addEventListener('click', () => {  
        body.classList.toggle('dark-mode');  
    });