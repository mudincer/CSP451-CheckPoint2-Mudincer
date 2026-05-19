# Collaboration Workflow Report

## 1) Issues Created
List the 3 issues you created (one per feature) and what each issue requested.
answer >>> I created 3 issue for project One issue was for user authentication feature One issue was for database connection feature and last issue was for api endpoint feature Authentication issue requested better login validation and auth service Database issue requested configurable database module using process.env variables api issue requested get and post endpoint with validation and route updates

## 2) PR Summary (3 PRs)
For each PR:
- PR title
- linked issue
- key changes
- screenshots included? (Y/N)
answer1 >>> pr 1 title was Feature/user authentication This pr added better login validation auth service and debug logging Linked issue was authentication feature issue I included screenshots for pr and merge process
answer2 >>> pr 2 title was Feature/database connection This pr added configurable database module database helper and README documentation Linked issue was database connection feature issue I also included screenshots for merge conflict and resolved version
answer3 >>> pr 3 title was Feature/api endpoints This pr added new API routes GET and POST endpoints request validation and debug logging Linked issue was api endpoint feature issue Screenshots was included for pr workflow and merge history

## 3) Self-Review Evidence
GitHub does not allow you to formally Approve or Request changes on your own PR,
so all reviews on this checkpoint are comment-based. Explain:
- at least 2 self-review comments per PR (what was said and why)
- which PR had a critical self-review comment that required a follow-up commit,
  and how you addressed it
- how you ensured quality before merging (CI status checks, manual testing, etc.)
answer >>> I used comment based self review because GitHub does not allow approve own pr I added comments checking validation logic database status helper and endpoint responses I also checked commit messages and project structure before merge ın authentication pr I added comment about improving validation and another comment about checking debug logs In database pr I added comment about README conflict and database config setup In api pr I added comment about endpoint validation and testing api response the database pr had critical self review comment because README conflict happened after merging latest main I fixed this by manually resolving conflict and creating follow-up commit called fix(conflict): resolve README merge conflict before merging prs I always run npm test npm run lint and npm run format I also used npm run dev and manually checked localhost routes and login form working correctly

## 4) Merge Strategy
Confirm you used **Squash and merge** and explain one benefit (clean history, easier rollback, etc.).
answer >>> I used squash and merge strategy for keeping cleaner Git history It helps project look more organized and easier for review and tracking changes I think squash merge also helps easier rollback if project has problem later
