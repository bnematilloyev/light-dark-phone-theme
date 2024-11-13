let first_phone = document.getElementById('first-phone');
let second_phone = document.getElementById('second-phone');

let sun_moon = document.getElementById('sun-moon');

let phones = [first_phone, second_phone];

let light_circle = document.getElementById('light_switch_circle');
let dark_circle = document.getElementById('dark_switch_circle');

let mode_text1 = document.getElementById('mode-text1');
let mode_text2 = document.getElementById('mode-text2');


const theme_mode = {
    "dark": "light",
    "light": "dark",
};

function darkLight(index) {
    const current_phone = phones[index - 1];
    
    const current_theme_mode = this.getAttribute('data-theme');
    const theme = theme_mode[current_theme_mode];
    
    current_phone.classList.remove("light", "dark");
    current_phone.classList.add(theme);
    
    this.setAttribute("data-theme", theme);

    if (index == 1){
        mode_text1.innerText = theme.toUpperCase();
    }else{
        mode_text2.innerText = theme.toUpperCase();
        if (sun_moon.classList.contains("fa-moon")) {
            sun_moon.classList.replace("fa-moon", "fa-sun");
        } else {
            sun_moon.classList.replace("fa-sun", "fa-moon");
        }
    }
}

light_circle.addEventListener('click', function() {
    darkLight.call(light_circle, 1);
});

dark_circle.addEventListener('click', function() {
    darkLight.call(dark_circle, 2);
});
