var $switchThemeBtn;
var observer;
var targets;

document.addEventListener('DOMContentLoaded', () => {
    initSwitchTheme()
    initIntersectionApi();
});

function initSwitchTheme() {
    $switchThemeBtn = document.getElementById('switch-theme');
    $switchThemeBtn.addEventListener('click', _switchTheme);
}

function initIntersectionApi() {

    var options = {
        rootMargin: '0px',
        threshold: [0.1]
    }

    var callback = (entries, observer) => {
        entries.forEach(entry => {
            var $section = document.getElementById(entry.target.id + "-menu-item");
            if ($section && entry.isIntersecting) {
                $section.style.fontWeight = 'bold';
            }

            if ($section && !entry.isIntersecting) {
                $section.style.fontWeight = '100';
            }

        });
    };

    observer = new IntersectionObserver(callback, options);

    targets = document.getElementsByClassName('main-section');
    Array.from(targets).forEach(target => observer.observe(target));
}

function _switchTheme() {
    document.body.classList.toggle("dark");
}