const button = document.getElementById('colorButton');

button.addEventListener('click', function() {
    // បង្កើតពណ៌ចៃដន្យ (Random Color)
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
window.onload = function() {
    const button = document.getElementById('colorButton');
    
    if(button) {
        button.addEventListener('click', function() {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            document.body.style.background = randomColor; // ប្តូរមកប្រើ .background វិញដើម្បីឱ្យវា override gradient
        });
    }
};

