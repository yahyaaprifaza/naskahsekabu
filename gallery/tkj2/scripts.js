// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImg');
    var close = document.getElementsByClassName('close')[0];
    var triggers = document.querySelectorAll('.modal-trigger');

    triggers.forEach(function(trigger) {
        trigger.onclick = function(event) {
            event.preventDefault();
            modal.style.display = 'block';
            modalImg.src = this.href;
        };
    });

    close.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
