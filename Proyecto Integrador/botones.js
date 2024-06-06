document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.btn');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (this.classList.contains('seleccionado')) {
                this.classList.remove('seleccionado');
            } else {
                // Remove 'seleccionado' class from all buttons
                buttons.forEach(function(btn) {
                    btn.classList.remove('seleccionado');
                });
                // Add 'seleccionado' class to the clicked button
                this.classList.add('seleccionado');
            }
        });
    });
});
