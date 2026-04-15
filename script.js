const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
let current = 0;

nextBtn.addEventListener('click', () => {
    steps[current].classList.remove('active');
    current = (current + 1) % steps.length;
    steps[current].classList.add('active');

    // تحديث شريط التقدم
    progress.style.width = ((current + 1) / steps.length * 100) + '%';
    
    // تغيير نص الزرار
    nextBtn.innerText = current === steps.length - 1 ? "العودة للبداية" : "الـتـالي";
});
