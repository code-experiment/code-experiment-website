# Code Experiment Meetup

> This is the repo for the Code Experiment Meetup's website.  We look forward to working with you at our weekly meetup!

> **Table of contents:**
- [Help Us Out And Contribute](#Would-you-like-to-help-make-this-site-better)
- [Git Workflow For Active Contributors](#Git-workflow-for-users-on-contributors-list)


# Would you like to help make this site better?

- Fork this repository
- Clone the repository
- Create a branch
- Make necessary changes and commit those changes
- Push changes to GitHub
- Submit a pull request

> A team member will review your changes, please keep an eye out for any requested changes during this review.  Once all the code is working and they like the changes, they will merge it into the repo.  Thank you for the help!

[Back To Top](#Code-experiment-meetup)


# Git Workflow For Users On Contributors List

# Git Workflow For Feature Branches

> Please follow these steps each day you sit down to code.

### Find Something To Do

- Head over to the Glo board and find something off the TODO section.
- Head over to the Issues section.

### You Found Something To Do

- Let the team know what you decided to work on.
- Hop over to the glo board for either issues or website todos.
- Assign yourself to that task.
- Drag that task to In Progress.

### Pull The Latest Code

- Make sure you don't have any random changes and pull the latest code.
```
$ git status
$ git checkout development
$ git pull
```

### Create your feature branch

- Please create a new branch for your new task.

```
$ git checkout -b card-name
OR
$ git checkout -b issue#number
```
> Examples:
```
$ git checkout -b COD-10
OR
$ git checkout -b issue#5
```

### CODE!

- Your free to code.  We appreciate your help.
- Don't be scared to commit as much as you want during your feature branch.

### You Finished your new changes

- Make sure you have working code!
- Check to make sure you don't have any last minute commits and then push it to github.
```
$ git status
$ git push origin branch-name
```

> Example Push.
```
$ git status
$ git push origin COD-10
```

### Pull Request

- Hop onto github and click compare & pull request.
- While on the Open a pull request page, change the title.
  - Please add your branch name in brackets to the title
  > Example: [COD-10] Some title name
- Add any extra comments in the description field
- Click create pull request
- Go back to the Glo board and assign that pull request to your card
- Please let the team know you have created the pull request.
- Your code will go through a review before being merged.
  - If all the code checks off it will be merged in.
  - If there is some changes that we request, you will be notified.  Please make requested changes, once your code has passed the review it will be merged in.

> YOU DID IT!!!! Thank you!

# Git Workflow For Reviews
- Found a pull request
- Click add a review
  - Add any comments to things that need changed/updated if any
- If you are finished reviewing the file follow these steps
  - Click submit to review and it will have a drop down
  - If there are changes to be made click submit changes request
    - After the correct changes were made click resolved conversation on each correct change
    - If all changes were made correctly click Submit Review
    - Click Submit and Merge
  - If no changes click submit and merge
> All done!


[Back To Top](#Code-experiment-meetup)
