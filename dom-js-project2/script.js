var arr = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
        img: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Chennai_Super_Kings_Logo.png'
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black',
        img: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Royal_Challengers_Bangalore_Logo.png'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold',
        img: 'https://upload.wikimedia.org/wikipedia/en/2/25/Mumbai_Indians_Logo.png'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold',
        img: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Kolkata_Knight_Riders_Logo.png'
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'black',
        img: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sunrisers_Hyderabad.png'
    },
    {
        team: 'PBKS',
        primary: 'crimson',
        secondary: 'silver',
        img: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.png'
    },
]

var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var main = document.querySelector('main');
var img = document.querySelector('#teamLogo');

btn.addEventListener('click', function() {
    var winner = arr[Math.floor(Math.random() * arr.length)];

    h1.innerHTML = winner.team;
    h1.style.backgroundColor = winner.secondary;

    main.style.backgroundColor = winner.primary;

    img.src = winner.img;
});
