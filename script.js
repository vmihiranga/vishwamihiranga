/* Portfolio Script - Enhanced with New Features
   Author: Vishwa Mihiranga
   Features: Smooth Scroll, Typing Effect, 3D Tilt, Dark Mode, Particles, Progress Bar
*/

document.addEventListener('DOMContentLoaded', function() {
    
    // ====== 1. Initialize AOS (Animate On Scroll) ======
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true,
        mirror: false,
        offset: 50
    });

    // ====== 2. Preloader - Smooth Fade Out ======
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        setTimeout(() => {
            if(preloader) {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }
        }, 800);
    });

    // ====== 3. Scroll Progress Bar ======
    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });

    // ====== 4. Floating Particles Animation ======
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 30;
        
        for(let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 15 + 's';
            
            // Random size
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            particlesContainer.appendChild(particle);
        }
    }
    
    createParticles();

    // ====== 5. Optimized Custom Cursor (Lag Effect) ======
    if (window.matchMedia("(pointer: fine)").matches) {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        
        let mouseX = 0, mouseY = 0;
        let posX = 0, posY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Immediate update for the dot
            if(cursor) {
                cursor.style.left = mouseX + 'px';
                cursor.style.top = mouseY + 'px';
            }
        });

        // Smooth follow animation loop
        function animateFollower() {
            if(follower) {
                posX += (mouseX - posX) * 0.1;
                posY += (mouseY - posY) * 0.1;
                follower.style.left = posX + 'px';
                follower.style.top = posY + 'px';
            }
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Hover States
        const interactiveElements = document.querySelectorAll('a, button, .btn, .filter-btn, .project-card, input, textarea, .photo-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                follower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                follower.classList.remove('hover');
            });
        });
    }

    // ====== 6. Mobile Menu Logic ======
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    }

    if(menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(navMenu.classList.contains('active')) toggleMenu();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // ====== 7. Typing Animation ======
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.typing-cursor');

    const textArray = ["Web Developer", "Python Programmer", "Photographer", "Graphic Designer"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if(typedTextSpan) {
        setTimeout(type, newTextDelay + 250);
    }

    // ====== 8. Header Scroll Effect ======
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ====== 9. Enhanced Dark Mode Toggle with Smooth Transition ======
    const themeSwitch = document.querySelector('.theme-switch');
    const themeIcon = themeSwitch ? themeSwitch.querySelector('i') : null;
    
    // Load Theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if(themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    if(themeSwitch) {
        themeSwitch.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            
            // Save to LocalStorage
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            // Icon Switch with Animation
            if(themeIcon) {
                themeIcon.classList.toggle('fa-moon');
                themeIcon.classList.toggle('fa-sun');
            }

            // Recreate particles with new theme colors
            const particlesContainer = document.getElementById('particles');
            particlesContainer.innerHTML = '';
            createParticles();
        });
    }

    // ====== 10. Skill Bar Animation (Intersection Observer) ======
    const skillSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.skill-level');

    if(skillSection && progressBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width + '%';
                    });
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillObserver.observe(skillSection);
    }

    // ====== 11. Advanced Project Filtering with Smooth Animation ======
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class
            filterButtons.forEach(button => button.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ====== 12. Enhanced 3D Tilt Effect for Project Cards ======
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation based on mouse position
            const xRotation = -((y - rect.height/2) / 20);
            const yRotation = (x - rect.width/2) / 20;

            card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // ====== 13. Photo Gallery Lightbox Effect ======
    const photoItems = document.querySelectorAll('.photo-item:not(.album-card)'); // Exclude album cards
    
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img').src;
            const title = this.querySelector('.photo-overlay h3').textContent;
            
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close-lightbox">&times;</span>
                    <img src="${img}" alt="${title}">
                    <h3>${title}</h3>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Add styles dynamically
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.95);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            `;
            
            const lightboxContent = lightbox.querySelector('.lightbox-content');
            lightboxContent.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                text-align: center;
            `;
            
            const lightboxImg = lightbox.querySelector('img');
            lightboxImg.style.cssText = `
                max-width: 100%;
                max-height: 80vh;
                border-radius: 12px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            `;
            
            const lightboxTitle = lightbox.querySelector('h3');
            lightboxTitle.style.cssText = `
                color: white;
                margin-top: 20px;
                font-size: 1.5rem;
            `;
            
            const closeBtn = lightbox.querySelector('.close-lightbox');
            closeBtn.style.cssText = `
                position: absolute;
                top: 20px;
                right: 40px;
                font-size: 3rem;
                color: white;
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            
            // Close lightbox
            closeBtn.addEventListener('click', () => {
                lightbox.remove();
                document.body.style.overflow = 'auto';
            });
            
            lightbox.addEventListener('click', (e) => {
                if(e.target === lightbox) {
                    lightbox.remove();
                    document.body.style.overflow = 'auto';
                }
            });
        });
    });

    // ====== 14. Contact Form Handling with Animation ======
    const contactForm = document.querySelector('form[action*="web3forms"]');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.style.opacity = '0.7';
            btn.disabled = true;
            
            // Submit form via fetch
            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm)
            })
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    btn.innerText = '✓ Message Sent!';
                    btn.style.backgroundColor = '#2ecc71';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.backgroundColor = '';
                        btn.style.opacity = '1';
                        btn.disabled = false;
                    }, 3000);
                } else {
                    btn.innerText = '✗ Failed. Try Again';
                    btn.style.backgroundColor = '#e74c3c';
                    
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.backgroundColor = '';
                        btn.style.opacity = '1';
                        btn.disabled = false;
                    }, 3000);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                btn.innerText = '✗ Error Occurred';
                btn.style.backgroundColor = '#e74c3c';
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.opacity = '1';
                    btn.disabled = false;
                }, 3000);
            });
        });
    }

    // ====== 15. Active Navigation Link on Scroll ======
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // ====== 16. Smooth Scroll for All Links ======
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ====== 17. Counter Animation for Stats (if you add stats section later) ======
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if(start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // ====== 18. Reveal Elements on Scroll (Additional Animation) ======
    const revealElements = document.querySelectorAll('.service-card, .project-card, .photo-item');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        revealObserver.observe(el);
    });

    // ====== 19. Easter Egg: Konami Code ======
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if(konamiCode.join('') === konamiPattern.join('')) {
            // Easter egg activated!
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
        }
    });

    // ====== 20. Performance Optimization: Lazy Loading Images ======
    if('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    console.log("%c🚀 Vishwa Portfolio: Loaded Successfully!", "color: #4a6cf7; font-size: 16px; font-weight: bold;");
    console.log("%c💼 Developed by Vishwa Mihiranga", "color: #f75f6c; font-size: 12px;");
});