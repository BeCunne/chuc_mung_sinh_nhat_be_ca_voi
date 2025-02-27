document.addEventListener("DOMContentLoaded", () => {
    let birthdayText = document.getElementById("happyBirthday");

    let words = ['H', 'a', 'p', 'p', 'y', ' ', 'B', 'i', 'r', 't', 'h', 'd', 'a', 'y', '!'];
    let index = 0;

    function typeWord() {
        if (index < words.length) {
            birthdayText.innerHTML += words[index];
            index++;
            setTimeout(typeWord, 200); // Điều chỉnh tốc độ xuất chữ
        }
    }

    typeWord(); // Bắt đầu hiệu ứng chữ động
});
