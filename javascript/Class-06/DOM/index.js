// console.log(window); //* not present in node, exist in browser

// function darkMode(){
//     document.body.style.backgroundColor = '#111111';
//     document.body.style.color = '#ffffff';
// }

// function whiteMode(){
//     document.body.style.backgroundColor = '#ffffff';
//     document.body.style.color = '#000000';
// }

let isDarkMode = true;

function darkMode(){
    if(isDarkMode){
        document.body.style.backgroundColor = '#111111';
        document.body.style.color = '#ffffff';
        darkModeButton.textContent = 'White Mode';
    }
    else{
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        darkModeButton.textContent = 'Dark Mode';
    }

    isDarkMode = !isDarkMode;
}

const darkModeButton = document.getElementById('dark-mode-button');

darkModeButton.addEventListener('click', function(){
    darkMode();
});
