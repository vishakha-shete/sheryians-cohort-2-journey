# day-159 learning about a github collaboration 

- firstlly in my system i create a project files 
- todays session is all about collaboration we are learning in team how we can collaborate and push our code and make one working system 
- there is two person in team and we collaborate with them with simple code for understanding only html, css in which we are making some changes and whenever we are working on one project on githun what challenges we phase during this we are seeing it in todays session 
- whenever we are starting a project that time we have to create one repo on github 
- and lets start with a local folder 
- we are creating a folder name collaboration and open it in vs code 
- in this setup we have three persons 
1st - vishu
2nd - shree
3rd - omieee 
- this are thre developers working through github 
firstlly

vishu - created a html file write basic code and gave a color to the button skyblue so the ankur user has a skyblue color button and in which she write hello 
- and this ui exist only on vishus system but vishu dont want to work alone she wants to work with teammates 
- so for that i push this code on github 
- so for making changes in same repo vishu have to add shree and omiee as a collaborartor in her repo
- for that on github click on settings then collaboration then add teammates with their name and the invitation of collaboration is sent on gmail and also on github 
- then the omiee and shree accept the invitation 
- then they both git clone the same repo
- then same code gose into their local folder 

shree - make changes in button and change the color of button to red and push the code to github and the code is exist on github
- but the code is not exist on vishu and aryant local folder
- for that we have to give command git pull origin main
- this command can take a changes to youre reposetory which awailable on github but not in our local folder 
- but in omiees local folder their is only first commit code is running omiee dont pull the changes so he also need to run git pull origin main he runs command 
- now omiee making changes on same button and pushing it to the github but this changes is not available in vishus and shrees folder 
- then again both make git pull and the code is available
- and next time shree making some changes on same thing and push it to the github 
- and same time vishu also making some changes on same code and make commit
and same time before pulling if i try to make a commit then github gives a error failes to push because in github there are some changes which not availabel in your system are present then 
- if now vishu run a command called git pull origin main then it ask for merge or rebase then now we are using merge here 
- and them i run same command git pull origin main then we show again a error the changes made by shree and vishu is conflicting with each other it gives a auto-merging it shows a waht confict it 
- then accept which is you want to acccept 
- inocomming changes
- current changes 
then make commit then again joining this two we have to commit again and again this commit send to the github it contains all commits then i push commit to github 
- till now we are staying with both changes but we can also do any one chnnge stay in github if we want that 
- then ommiee making somw changes in code next and pshesh it into github 
- and vishu also making some changes now vishu dont know about what omiee push into github now vishu make commit not push into github if vishu try to push on github but it sends an error because omiee code dont pull by vishu  then vishu run pull and try to push it on github but it sends error because omiee also worked on same file so github dont able to take design which code is want to store then u need to fix which changes u want and push into in github and whenever we are merging the commit we have to commit firstlly 
- now we are seeing how in branch seen goes so shree created a new branch called style-features and in thar branch shree make some changes these changes is different and this whole branch feature goes in github 
- vishu firstlly pulling the style feature branch 
- git branch
- git branch style_features
- git checkout style_features 
- git pull origin style_features  

comes a changes with some conflicts beacuse shree and vishu have different changes 
- shree and vishu changes are breaking but i have to tell it that which changes i want so for that 
- i have to merge all so vishu needs to run git checkout main
- git pull origin stylesfeature branch then commiting and pushing code into github 