// # Day 60 — Exercises

// ## Exercise 1 — Very Easy (Warming up)
// Task (Hindi): Ek function banao `afterDelay`

// Requirements:
//  Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”
// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai
// ---

function afterDelay(time , cb){
    setTimeout(() => {
        cb("Callback executed");

    }, 3000);
}
afterDelay("3000",function(details){
    console.log(details);

});


// ## Exercise 2 — Intermediate (Data flow)
// **Task (Hindi):** Ek function banao `getUser`
// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`
// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`
// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de
// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho
//**Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai 
// - Callback chaining practice


// Example-1
function getElement(username,cb){
    console.log("getting details");
    setTimeout(() => {
        cb({id:56,username:"vishakha"});
    }, 3000);
}

function getuserEposts(userid,cb){
    console.log("getting posts");
    setTimeout(() => {
        cb(["vishu","nishu","golu"])
    }, 2000);  
}


getElement("3000",function(data){
    getuserEposts(data.id,function(){
        console.log(data.username,data);

    });
})  




// Example-2

function getUser(username,cb){
    setTimeout(() => {
        cb({id:1,username:"vishakha"});
    }, 1000);
}

function getUserposts(id,cb){
    setTimeout(() => {
        cb(["hello,good,fine"]);
    }, 2000);
}

getUser("vishakha",function(user){
    getUserposts(user.id, function(allposts){
        console.log(user.username,allposts);

    });

});






// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)
// **Task (Hindi):** Teen functions banao:
// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loadedDashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai
// ### Notes
// - Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await.

function loginUser(username,cb){
    console.log("logging user...!");
    setTimeout(() => {
        cb({id:24,username:"vishakha"});
    }, 1000);

}
function fetchPermissions(userId,cb){
    console.log("fetchPermissions user...!");
    setTimeout(() => {
        cb(["visha" ,"goldie","ropa"]);
    }, 1000);
    
}
function loadDashboard(permissions,cb){
    console.log("loadDashboard user...!");
    setTimeout(() => {
        cb("Dashboard loadedDashboard loaded");
    }, 1000);
}

loginUser("sakshi",function(userdata){
    fetchPermissions(userdata.id,function(permissions){
        loadDashboard(permissions,function(){
            console.log("dashboard loaded");
        });
    });
});
