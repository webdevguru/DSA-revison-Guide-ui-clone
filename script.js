<script>
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
                dots[i].classList.toggle('bg-gray-700', i === index);
                dots[i].classList.toggle('bg-gray-400', i !== index);
            });
            currentSlide = index;
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 3000); // Change slide every 3 seconds
    </script>