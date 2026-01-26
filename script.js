    // Initialize AOS (Animate On Scroll)
    document.addEventListener('DOMContentLoaded', function() {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            offset: 100
        });

        // Add scroll animations for sections
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

    // Custom cursor functionality
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    if (cursor && cursorDot && !('ontouchstart' in window)) {
        document.body.classList.add('custom-cursor-enabled');
        cursor.style.display = 'block';
        cursorDot.style.display = 'block';
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });
        
        const interactiveElements = document.querySelectorAll('a, button, .tech-tag, .project-card, .skill-item, .timeline-item, .actualite-item, input, textarea, select');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
            });
            
            el.addEventListener('mouseleave', function() {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.backgroundColor = 'rgba(59, 130, 246, 0.5)';
            });
        });
        
        document.addEventListener('mousedown', function() {
            cursor.style.transform = 'scale(0.7)';
        });
        
        document.addEventListener('mouseup', function() {
            cursor.style.transform = 'scale(1)';
        });
    }

    // Terminal functionality (inline version for hero section)
    const terminalInline = document.getElementById('terminal-inline');
    if (terminalInline) {
        const commands = [
            { text: 'anzo@portfolio:~$ whoami', delay: 100 },
            { text: 'Anzo Lo', delay: 500 },
            { text: 'anzo@portfolio:~$ cat about.txt', delay: 1000 },
            { text: 'Étudiant BTS SIO SLAM', delay: 1500 },
            { text: 'Passionné par le développement web et logiciel', delay: 2000 },
            { text: 'anzo@portfolio:~$ ls skills/', delay: 2500 },
            { text: 'Python  HTML  CSS  JavaScript  PHP  Java  SQL  MySQL  Oracle', delay: 3000 },
            { text: 'anzo@portfolio:~$ _', delay: 3500 }
        ];

        let currentIndex = 0;
        let currentChar = 0;

        function typeText() {
            if (currentIndex >= commands.length) {
                currentIndex = 0;
                terminalInline.innerHTML = '';
            }

            const command = commands[currentIndex];
            const element = document.createElement('div');
            element.className = 'terminal-line';
            terminalInline.appendChild(element);

            function typeChar() {
                if (currentChar < command.text.length) {
                    element.textContent = command.text.substring(0, currentChar + 1);
                    currentChar++;
                    setTimeout(typeChar, 50);
                } else {
                    setTimeout(() => {
                        currentIndex++;
                        currentChar = 0;
                        if (currentIndex < commands.length) {
                            typeText();
                        } else {
                            setTimeout(() => {
                                currentIndex = 0;
                                terminalInline.innerHTML = '';
                                typeText();
                            }, 2000);
                        }
                    }, command.delay);
                }
            }

            typeChar();
        }

        setTimeout(typeText, 500);
    }

    // Terminal functionality (full version - removed from main content)
    const terminal = document.getElementById('terminal');
    if (terminal) {
        const commands = [
            { text: 'anzo@portfolio:~$ whoami', delay: 100 },
            { text: 'Anzo Lo', delay: 500 },
            { text: 'anzo@portfolio:~$ cat about.txt', delay: 1000 },
            { text: 'Étudiant BTS SIO SLAM', delay: 1500 },
            { text: 'Passionné par le développement web et logiciel', delay: 2000 },
            { text: 'anzo@portfolio:~$ ls skills/', delay: 2500 },
            { text: 'Python  HTML  CSS  JavaScript  PHP  Java  SQL  MySQL  Oracle', delay: 3000 },
            { text: 'anzo@portfolio:~$ _', delay: 3500 }
        ];

        let currentIndex = 0;
        let currentChar = 0;
        let isDeleting = false;

        function typeText() {
            if (currentIndex >= commands.length) {
                currentIndex = 0;
            }

            const command = commands[currentIndex];
            const element = document.createElement('div');
            element.className = 'terminal-line';
            terminal.appendChild(element);

            function typeChar() {
                if (currentChar < command.text.length) {
                    element.textContent = command.text.substring(0, currentChar + 1);
                    currentChar++;
                    setTimeout(typeChar, 50);
                } else {
                    setTimeout(() => {
                        currentIndex++;
                        currentChar = 0;
                        if (currentIndex < commands.length) {
                            typeText();
                        }
                    }, command.delay);
                }
            }

            typeChar();
        }

        // Start typing after a short delay
        setTimeout(typeText, 500);
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Here you would normally send the data to a server
            // For now, we'll just show an alert and reset the form
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
            
            // Reset form
            contactForm.reset();
        });
    }
});
