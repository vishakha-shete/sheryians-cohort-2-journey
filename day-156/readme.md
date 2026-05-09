- in todays class we are going to learn about Helmet
- we are leraning development related topic but it is related to sequerity how we can secure our website the solution for this is helmet 
- before that we are going to learn about attacks 
- the cross size scripting (xss)
  - we have one browser we have a url called bank.com open in our google tab 
  - user login with username password i cookies tokens are saving 
  - with each request our cookie data is send on a server 
  - suppose browser sends a request on your bank server and it tells / transaction/accountID?amount=1000 normal user work with this
  - but attackers added a script in ur website if yuor server does not have privacy then this script runs in ur website and sends a script on server like transfer amount 
  - this are cross-site scripting for stoppind this we have helment middleware for saved this 

  clickjacking
  - it is another attacker
  - in this attacker drives user into theire website 
  - attacker crates your website Iframe there is a one button called complete transaction the attacker make i frame website opacity zero place this iframe in your website you thought your clicking on different button but actally ita clicking a different one this attack is known as clickjacking 

  whenever we are using helmet then it not able to create any iframe of ur website then attackers attacks failes 

  cross-origin embedding 
  - in which attacker it imbeild script with src url in website 
  - any another attacker comes in your website and imbeild the script 
  - helmet js stop this the domain of content is restricted 

  cross-origin data theft
  - it is not attack it is to commit theft
  - lets understand this properlly
  - my server is running http://axisbank.com
  - there is another server http://hdfcbank.com
  - the hdfc bank ask for a pdf to axis and 
  - hdfc bank shows on their frontend 
  - whenever the hdfc bank costomer opens their website it holds a resorse which hosted by axis bank but using on hdfc website 
  - here is Steal happening 
  - for come out from this also we are using helmet.js 

  howw??
  - helmet js tels to the browser which is youre domain and that domain which resorce your using those are different 


  ROGUE FEATURE ACCESS
  - leaking happens through rogue feature access 
  - pictures leaking 
  - web cam turn on automatically  
  - attacker imbeild a script on website 
  <script>
    access camera
    access microphone 
    access jiolocation
  </script>
  access all this and send it to the perticular location 
  - if attacker finds anything then it calls as a blackmailling this feature is known as  ROGUE FEATURE ACCESS
- this attack also stop HELMET

howw???
- we are setting helmet on server with the help of this we telles to the website never allow device permission
- if attacker imbeilde script on our website it faileds with error our website dont gives a permission to any user and attacker for access 

lets understand :

sanatization for xss 
- express-validator
- express mongo sanitize
- perfect express sanitize

their are two protocalls we have http / https
- http protocall has plain text data format
- https protocall this data is dont read by anyone 

SSL/STRIPPING/MAIN IN THE MIDDLEWARE 
= user and sever communicate with each other verry well 
- the communication in on https data is tensfering in increapt form 
- in ssl strippig attacker comes in middle it convised the user communicate in http if user using http protocall then attacker is intercepting with them and then attacker has each response details 
- attacker reads it because data is transferring in http protocal it is in text format 
- for solving this also we are used helmet
- helmet forced to the user only used a https protocall 

helmet js helps us prevent for like this 15 attacks
- how to use helmet js