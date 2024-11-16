// تشغيل الصوت عند التمرير على الروابط
function playSound() {
    const audio = document.getElementById("audio");
    audio.play();
}

// إضافة حدث "mouseover" لتشغيل الصوت عند المرور بالماوس على الروابط
const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
link.addEventListener("mouseover", playSound);
});

// دالة لتشغيل الصوت
function playSound() {
const audio = document.getElementById("audio");
audio.play();
}
// عند الضغط على أي رابط، إضافة الكلاس "active" لتطبيق التأثيرات
document.getElementById("home-link").addEventListener("click", function () {
removeActiveClass();
this.classList.add("active");
});

document.getElementById("experience-link").addEventListener("click", function () {
removeActiveClass();
this.classList.add("active");
});

document.getElementById("projects-link").addEventListener("click", function () {
removeActiveClass();
this.classList.add("active");
});

document.getElementById("contact-link").addEventListener("click", function () {
removeActiveClass();
this.classList.add("active");
});

// دالة لإزالة الكلاس "active" من كل الروابط
function removeActiveClass() {
const links = document.querySelectorAll(".sidebar a");
links.forEach(link => {
link.classList.remove("active");
});
}

let audio = document.getElementById("audio");
let audioPlayed = false;

function playSound() {
if (!audioPlayed) {
audio.play(); // تشغيل الصوت أول مرة بعد التفاعل مع الصفحة
audioPlayed = true; // بعد ما الصوت يشتغل، نخلي المتغير يقول إنه تم التشغيل
}
audio.currentTime = 0; // إعادة الصوت للبداية
audio.play(); // تشغيل الصوت
}

function stopSound() {
audio.pause(); // إيقاف الصوت عند الخروج من الرابط
}

document.body.addEventListener("click", function() {
audioPlayed = true; // السماح بتشغيل الصوت بعد أول click
});
