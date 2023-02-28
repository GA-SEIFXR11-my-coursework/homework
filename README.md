### Do your homework

You should put each night's homework in a new folder within the appropriate directory of your homework repo. So, for day two, where you have two tasks ("Calculator" and "Strings"), you might do something like this:

1. Open Terminal/iTerm2/Ubuntu;
2. Go to your local homework repo (eg, `cd ~/Projects/homework-students`);
3. From here, go to the folder matching your name within that repo, and the appropriate week / day (eg, `01-Han-Solo/wk-01/01-Tues`);
4. Create new folders for each of the day's homework tasks: (eg `mkdir calculator` and `mkdir strings`);
5. Create the files necessary to complete the homework in their respective directories;
6. Get to it!

### Submit your homework

You need to do this every time you're submitting homework.

- **Commit your work to your local repository progressively**
  - Make sure you are in the correct folder containing the homework you want to submit.
  - `git add .`
  - `git commit -m "YOUR_COMMIT_MESSAGE_GOES_HERE"`(where `YOUR_COMMIT_MESSAGE_GOES_HERE` is your description of the work you are committing)
- **Push your changes to your forked repository**
  - `git pull upstream master` - merge changes that have been made to this repository into your own local repository (if a weird screen appears on this step, PLEASE SEE THE **IMPORTANT 2** NOTED BELOW).
  - `git push origin master`
- **Once you're finished, submit a pull request for me to accept your homework**
  - Navigate to your forked version of this repository on Github (eg [https://github.com/{YOUR_USERNAME_HERE}/homework-students](https://github.com/{YOUR_USERNAME_HERE}/SEIC57-homework)).
  - Hit the **Pull request** button.
  - Make sure the destination for the pull request is set to this organisation (seifxr11anz/homework-students), not your own or anyone else's.
  * **IMPORTANT:**
    Fill in the pull request description questions (automatically populated with template questions when you create the pull request)
    **If you don't mention anything in the Pull Request comments, we will assume you had no problems at all with it, and you will receive no feedback about your homework.**
    If you want to follow up on any issues you had with the homework, follow up with the IAs during lab/homework time, or message in Slack.
    **Note:** if I haven't yet merged your Pull Request into my main homework repo before it's time to submit the next day's homework, you won't be able to create a new Pull Request. That's okay - for the new homework just add a new comment to the open (existing) Pull Request, featuring the same four points given above to describe your response to it.
  * **IMPORTANT 2:**
    When you make pull request by `git pull upstream master`, git might generate the auto merge message for you. Don't panic! Just type `:wq` (it will weirdly appear on the bottom left of your screen once you start typing) and hit `return` key on your keyboard to accept the message, then you can move on with you life!
