# Conflict Resolution Report (≈300 words)

## 1) Conflict Scenario
Describe:
- which file conflicted
- which branches were involved
- what each branch changed
answer >>> the conflict was in README.md I had two branch One was feature/database-connection and another was featur api-endpoints Both branch changed same README area and Git got confused little bit One branch add database information and another branch add API endpoint information I put my database name as mudincercheckpont2 because easier for me understand project When I merge latest main conflict happened because same lines changed and Git cannot merge automaticly I was little confused first because first time I see this type conflict in real project


## 2) What You Saw
Describe the conflict markers and include your screenshot reference.
answer >>> I saw conflict lines like << head === > inside readme file VS Code also show merge conflict warning and options I take screenshot for this conflict and another screenshot after fixing file I also saw colors in VS Code showing current change and incoming change This help me understand what lines are conflicting and which branch changed what part


## 3) Resolution Strategy
Explain:
- what you kept vs removed (and why)
- how you verified your final version works (run app/tests)
answer >>> I checked both branch changes and keep database part and api part together because both needed I removed only duplicate lines and Git conflict markers After this I run npm test npm run lint and npm run format Everything passed and app worked normal after merge I also run npm run dev and checked localhost server open correctly and API routes still working normal after conflict resolution


## 4) Prevention Methods
Discuss 2–4 prevention methods, such as:
- smaller PRs
- communicating before refactors
- avoiding editing the same lines
- using feature flags
- rebasing/merging from main frequently
answer >>> smaller PR can help avoid conflict Also team members should communicate before changing same file Pull latest main more often also help good Another thing is avoid editing same lines if possible This assignment help me understand merge conflict more better Before this checkpoint I only know basic git commands but now I understand merge logic conflict markers and pull request workflow much better and also this checkpoint teach me how real team workflow works in GitHub and how developers solve conflict together in software projects

