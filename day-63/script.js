//scenario 1: weather Dashboard with Error Handling

//Build a small Weather dashboard that fetches current weather data from any public weather api (such as openweathermap).
//yo must make the api (such as openWeatherMap).
//you must make the API request asynchronous Using fetch with async/await.

// //if the api request fails (for example,due to an invalid city name),you must handle the error using try/catch.
// //Additionally,creat and throw custom errors based on weather conditions.
// //for example:
// //if the temperature is extreamly high or extreamly low,throw error and handle it properly in your code.


// // API: api is url we find data in it

// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

//using fetch
// function getWeather(city) {
//     let apikey = `d2eefdbd406e7f8b38f38fe41d0ead25`;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
//     .then((raw) => raw.json())
//     .then((result)=>{
//         console.log(result);
//     });
// }

// getWeather("Akola")

//using async and await 
async function getWeather(city) {
    try {
        let apikey = `d2eefdbd406e7f8b38f38fe41d0ead25`;
        let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        if (!raw.ok) {
            throw new Error("city not found, try something diferent");
        }
        let real = await raw.json();
        if (real.main.temp < 0) {
            console.warn(`too cold out there.... ${real.main.temp}c`);
        } else if (real.main.temp > 40) {
            console.warn(`too hot out there.... ${real.main.temp}c`);
        } else {
            console.log(real);
        }
    }
    catch (err) {
        console.log(err.message);
    }

}

getWeather('london');


const users = [
    "akash@gmail.com",
    "vishya@gmail.com",
    "anubhav@gmail.com"
];

function sendEmail(email) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 5);

        setTimeout(() => {
            let probability = Math.floor(Math.random() * 10);

            if (probability <= 5) resolve("Email successfully sent.");
            else reject("Email not send...");

        }, time * 1000);
    })
}


async function sendEmails(userlist){
  let allresponses = userlist.map(function(email){
       return sendEmail(email)
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    });
   let ans = await Promise.all(allresponses);

   ans.forEach(function(status){
    console.log(status);

   });
}
sendEmail(users);