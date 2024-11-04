document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 'c')) {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 's')) {
        e.preventDefault();
    }
});
