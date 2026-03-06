class day 112

- blackbox programming we know about what is function and and what the function is doing but we dont need to understand what exactlly it working and doing if ur go to know this all things then lot of your time gone in that
development thats why we are following backbox function  how it is doing we dont need to understand that

faceexpression.jsx is mainlly used for giving us a ui 
we are removing the init and detect in different folder we are creating in expression folder utils folder and in utils folder we are creating the util.js file where we are moving this code 



init function gives a initial setup to us and detect function detect the expression of face in this two function theire are three 

token blacklisting 
user sends a request of register and send data with username password email then server saves a details in database and  creates a token for the user. and sends in response to user this token server sends a request that your acount is created... so lets say token has name xyz in this token xyz user details is present 
then user has token 
  if in your server user sends a request and with user need to have token then server checks the token and then server understand that in this token xyz user details are present so server understand the request is arrived from the xyz user in server lot of request come but how server understand which request arrived from which user server reeds a token from the cookies and see which user details are available and those user who has a details in cookies server understad quickllly from which user this request comming and yes like this our authentication system works 


  when user sends a logout request on your server then server clears a token from client side 

  cookie storage is special but server can read all the data fro cookies and also update the data of cookies if in storage they want to save details update and delete server has this power 

but this is not valid it creates more problems like 
- user sends a logout request to server and server clears the token from user but imagin we have one another user has a name with n user n user uses and copy the xyz user tokens how copy dont know how he copy the another user token we only know the n user copy another user token we only know that n user copy the token now 
the xyz user clears a token 
bt here the n user he is sending request on the server the original user allready logout if now n user sends a request on server to transfer a 10k amount from user 
and to abc account when server reads a request with a token details then server understand this token is xyz user token 
how server knows which request come from which user 
- server identify the token firstlly understand which user details is present im the token and then he understands the user request is comming from xyz user 
when the request arrived to the server from n user with xyz users token details server understand the user is xuz user requesting on server the transfering amount debited from xyz user acount now u understand if ur only clearing the token any other user can copy your token and with that token sends a request on server

 now the  setuation is n user copy the xyz users token and dont know how 
 - but this time we are changing some things lets understand this time when the xyz user logout then we are performing the token blacklisting it means we in server side maintaining the blacklist and this blacklist meaning is this time the xyz user logout and in logout time token is also sending with logout request server this time clear the token from client side but  before is saves token in blacklist then server clear client side token 

 then now if n user sends a request on server with xyz token to transfer 10k amount from acount with this request token also sending then again server identified the token then server understand ok the token is xyz users token server understand the request from xyz user but this time server checks one more thing this token arrived is this token avilable in my blacklist then server understand this token is in blacklist server dont do anything it sends a status code 401 to the  n user - 401 means unautherized why sends unautherized because token is allready present in blacklist 

1) npm init -y 

2) for setting a express setup and uthentication we need to install some packages express mongoose dotenv cookie-parser bcryptjs jsonwebtoken 

userSchema.pre("save",function (next)){
    if (!this.ismodified("password")){
        return next();
    }
}

# Task :
userSchema.pre("save",function (next){})
userSchema.post("save",function (next){})


why we not use redis AS A PRIMARY DATABASE 
==> it is costly => and uses a ram 
==> query ni kr sakata => key value pair me store krta hai aur value string type me hoti hain
==> we are using redis frequentlly for seeing which user login 


MONGODB => mongo db stores a data in bson format 
