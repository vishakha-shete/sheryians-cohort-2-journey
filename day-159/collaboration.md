Day-159 Learning About GitHub Collaboration & Merge Conflicts
🚀 Today’s Session

Today’s session was focused on understanding how GitHub collaboration works in real-world team projects. We learned how multiple developers work on the same repository, how conflicts happen, how to solve merge conflicts, and how branches work in GitHub.

👨‍💻 Team Members

There were 3 developers in the project:

Vishu
Shree
Omieee

All team members collaborated on the same GitHub repository.

📁 Initial Project Setup
Vishu created a local project folder called collaboration
Opened it in VS Code
Created a basic HTML and CSS project
Added a button with:
Skyblue color
Text "Hello"

After creating the project:

Vishu pushed the code to GitHub
Added Shree and Omieee as collaborators

They accepted the invitation and cloned the repository into their systems.

git clone <repo-link>
🔄 Working Together on Same Repository
👩‍💻 Shree’s Changes

Shree:

Changed the button color to red
Pushed the updated code to GitHub

Now:

Changes existed on GitHub
But not on Vishu’s and Omieee’s local systems

To get the updated code:

git pull origin main

This command brings the latest GitHub changes into the local repository.

⚠️ Push Error Before Pulling

Now Vishu also made some changes locally and committed them.

But before pulling the latest changes from GitHub, Vishu tried to push the code.

GitHub showed an error:

failed to push some refs

This happened because:

GitHub already had new changes
Those changes were not available in Vishu’s local system
🔀 Merge Conflict Learning

To solve this issue, Vishu ran:

git pull origin main

Git then asked for:

Merge
or
Rebase

In today’s session, we used Merge.

But after pulling:

Git showed an Auto-Merging Conflict Error

Because:

Shree and Vishu both changed the same code

Git was unable to decide which code should stay.

🛠 Conflict Resolution

Git showed conflict options like:

Incoming Changes
Current Changes

Now we manually selected:

Which changes to keep
Or combined both changes together

After resolving the conflict:

We saved the file
Added the changes
Committed again
git add .
git commit -m "resolved merge conflict"

Then pushed the code:

git push origin main

This push contained:

Previous commits
Merge commit
Conflict resolution changes
📌 Important Learning
We can keep:
Both changes
Only current changes
Only incoming changes

Git allows developers to manually decide what should remain in the final code.

👨‍💻 Another Conflict Example

Next:

Omieee pushed new changes to GitHub
Vishu also made changes locally

But Vishu did not know about Omieee’s latest push.

Vishu:

Made a commit
Tried to push

Again GitHub showed an error because:

Omieee’s changes were not pulled into Vishu’s local repository

So Vishu ran:

git pull origin main

Again Git found conflicts because:

Both worked on the same file

Git could not decide which design/code to store.

So:

Vishu manually fixed the conflict
Selected required changes
Then committed again
git add .
git commit -m "merge conflicts resolved"

Finally pushed to GitHub.

🌿 Learning About Branches

Today we also learned how branching works in GitHub.

👩‍💻 Shree Created a New Branch

Shree created a new branch called:

style_features

This branch contained:

Different UI/style changes
Independent feature work
🌱 Branch Commands Learned
Check Existing Branches
git branch
Create New Branch
git branch style_features
Switch Branch
git checkout style_features
Pull Branch Changes
git pull origin style_features
⚠️ Branch Merge Conflicts

When Vishu pulled the style_features branch:

Conflicts appeared again

Because:

Vishu and Shree had different code changes

Git showed merge conflicts.

Now Vishu needed to:

Decide which changes to keep
Merge both properly
🔀 Merging Branch into Main

To merge the branch into main:

Switch to Main Branch
git checkout main
Pull Branch Changes into Main
git pull origin style_features

After resolving conflicts:

Add files
Commit changes
Push to GitHub
git add .
git commit -m "merged style_features branch"
git push origin main
📚 What I Learned Today
Real-world GitHub collaboration workflow
Why push errors happen
Difference between local and remote repository
How merge conflicts occur
How to resolve merge conflicts manually
Meaning of:
Incoming changes
Current changes
Importance of pulling before pushing
How Git branches work
How to merge branches into main
Why merge commits are needed
🛠 Git Commands Used
git clone <repo-link>
git pull origin main
git push origin main
git add .
git commit -m "message"
git branch
git branch style_features
git checkout style_features
git checkout main
git pull origin style_features
✨ Conclusion

Today’s session gave practical knowledge about team collaboration using GitHub. We learned how developers work together on the same project, handle conflicts, merge branches, and synchronize code changes properly. This was a very useful session to understand real software development workflows used in companies and team projects.