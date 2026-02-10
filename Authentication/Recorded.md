<!-- Authentication -->
# what is the need of authentication
# why thw need of authentication

- Authentication : the reqeast came from user is called authentication
- we only have one server but multiple user user request on server request dhould be anything 
- post method / api/post/postid/like
- post /api/post/postid/save

- two user requested on server with same  api 
- we just need to make setup for understanding which user is requeasting
- the all user firstlly register on server user some data sends on server
in data {
    name : 
    email :
    password :
} it send through api through this api name is register api this data is gone on req.body this a first step of all big steps 
- user sends a request to register api 
- server has only a simple two work 
 1) saves user data in database
 2) creating a token using users information
 3) token is like a school id card 
 4) token create a server and it send a token to user 
 ex : if token create a 
 5) after registering if user has a token the user which request sends on server this all request send with the token this is the mainly a rule
 6) cookies is storage which is in the client side
 6) in cookies which token is available it goes with the each requiest
 8) in server those request come those user sends a requiest on the server
 9) server checks the token come along with the requesting 
 like this our authentication system works 