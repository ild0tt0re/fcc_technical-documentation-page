var $switchThemeBtn;

document.addEventListener('DOMContentLoaded', () => {
    $switchThemeBtn = document.getElementById('switch-theme');
    $switchThemeBtn.addEventListener('click', switchTheme);
});

function switchTheme() {
    document.body.classList.toggle("dark");
}