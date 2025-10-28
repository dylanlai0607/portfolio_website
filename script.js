

// Simple nav: clicking a button shows its section and hides the others.
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('.nav-btn');
            const sections = document.querySelectorAll('.content-section');

            function show(id) {
                sections.forEach(s => {
                    if (s.id === id) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            }

            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    show(btn.dataset.target);
                });
            });

            // Show default section on load
            show('about');
        });