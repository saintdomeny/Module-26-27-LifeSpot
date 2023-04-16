const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateDots();
    clearInterval(slideInterval);//сбрасываем таймер следующего слайда
    slideInterval = setInterval(nextSlide, 2000);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function () {
        showSlide(currentSlide + 1);
    });
}


// Получаем элемент dots
const dots = document.querySelector('.dots');

// Добавляем точки для каждого слайда
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span'); // Создаем новый элемент span для точки
    dot.classList.add('dot'); // Добавляем класс "dot" к элементу
    dot.addEventListener('click', function () {
        showSlide(i); // Добавляем обработчик события на клик мыши для переключения на соответствующий слайд
    });
    dots.appendChild(dot); // Добавляем точку в элемент dots
}

updateDots();
// Обновляем точки при переключении на новый слайд
function updateDots() {
    const activeDot = document.querySelector('.dot.active');
    if (activeDot) {
        activeDot.classList.remove('active');
    }
    const newActiveDot = document.querySelectorAll('.dot')[currentSlide];
    newActiveDot.classList.add('active');
}