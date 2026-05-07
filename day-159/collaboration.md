Day-159 Learning About GitHub Collaboration
🚀 Today’s Learning

Today’s session was all about learning how collaboration works on GitHub while working in a team project. We understood how multiple developers can work together on the same project, push their code, pull changes, and solve collaboration challenges.

We started by creating a project locally in our system and learned the complete collaboration workflow using Git and GitHub with simple HTML and CSS code.

👨‍💻 Team Members

In this setup, there were 3 developers:

Vishu
Shree
Omieee

All three developers worked together through GitHub collaboration.

📁 Project Setup
First, Vishu created a local folder named collaboration.
Then the folder was opened in VS Code.
A new GitHub repository was created.
Vishu created a basic HTML file and added a button with:
Skyblue background color
Text: "Hello"

At this stage, the UI existed only on Vishu’s local system.

🤝 Adding Collaborators

Since Vishu didn’t want to work alone, she decided to collaborate with teammates.

Steps:
Open GitHub repository
Go to Settings
Click on Collaborators
Add teammates (Shree and Omieee)
GitHub sends invitation through:
Gmail
GitHub notifications

After accepting the invitation:

Shree and Omieee cloned the same repository using:

Now the same project code was available in all three local systems.

🔄 Collaboration Workflow
👩‍💻 Shree’s Changes
Shree changed the button color from skyblue to red.
Then Shree pushed the changes to GitHub.

Now:

Updated code existed on GitHub
But not in Vishu’s and Omieee’s local folders

To get the latest changes, they used:

This command fetches the latest changes from GitHub into the local repository.

👨‍💻 Omieee’s Changes

At first, Omieee still had the old code because he had not pulled the latest changes.

So Omieee ran:

Then Omieee made new changes on the same button and pushed the updated code to GitHub.

Again:

Vishu and Shree did not have the latest code
So both used:

to sync their local repositories.

⚠️ Conflict & Push Error Learning

Next:

Shree made some changes and pushed them to GitHub.
At the same time, Vishu also made changes on the same code and committed them locally.

Now when Vishu tried to push the code without pulling the latest changes, GitHub showed an error because the remote repository already contained newer updates.

Error Situation:

Git prevents pushing because:

GitHub repository has changes
Those changes are not available in the local system
Solution:

Before pushing, Vishu needed to run:

This updates the local repository with the latest GitHub changes.

After resolving conflicts (if any), Vishu could successfully push the code.

📚 What I Learned Today
How GitHub collaboration works in teams
How to add collaborators in a repository
How multiple developers work on the same project
Difference between local repository and GitHub repository
Importance of:
git push
git pull
git clone
How synchronization works between team members
Why push conflicts happen
How to solve “failed to push” errors
🛠 Commands Used
✨ Conclusion

Today’s session helped me understand real-world GitHub collaboration and teamwork workflow. We learned how developers work together on one project, manage code updates, sync repositories, and handle conflicts while pushing code. This session gave practical experience of team collaboration used in real software development projects.