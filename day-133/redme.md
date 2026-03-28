## Linting & settings

* you need to create neet and clean folder structure

- firstlly setting up lint and vs code settings

* logging & observability
add log lines where things can fail ( not entire codbase : be strategic)
- log involved in catched error 

* Git is your save-game
- commit early, commit often 

             Branching Model 
main(protected)/DEvelop(testing)--> feature/*branches-->pr--->review-->merge             
                    |
                    |
|-------------------|--------------------|
GitFlow-Life                   trunk-Based develpment 
(Main/develop branches)           dekhake merge kiya jata hain


* pull Request etiquette
- short summary what changes screenshots, tests added, reviewers requested

* Review checklist(my way)
runs locally? tests exist? no console.logs? proper commit message? edge cases handled?

* conflict handlling
rebase or merge- keep history readable. (High-level only)

* Testing & Quality Assurance
Testing isnt optiona its your reputation insurance policy
 - Unit Tests
 test a single function in isolation (example: sum[1,2]===3)
- Integration Tests
  test modules together(eg. user Login and Product Search).

*  End-to-End(E2E)
- test the full (login-->buy-->confirm). uses browser automation sometimes

* Test-Driven Development(TDD)
Techmique Where you Write automated, failling tests before writing the actual code

* Deployement & Maintenance
- CI/CD monitoring scaling 

CICD PIPELINE
1) COMMIT TO REPO
2) CI RUNS(lint. unit tests)
3) Build artifact
4) cd deploys to staging 
5) Manual approval
6) Deploy to production

* Monitoring
Logs(what happened), Metrics ( how many users, succcess rates),
traces (where time is spent)

* SCALLING STRATEGIES
- Vertical scaling = bigger machine(Quick but limited)
- Horizontal scalling = more instances behind load balancer(more reliable)
- coaching (Redis/cDN)to reduce load.
- RAte-limiting & graceful degreadation for heavy load

Key Mistakes Avoid
- Over engineering
  over-engineering is buying a helicopter to commute to college - cool, but impractical
- dont stuvk in over engineering 
Under-engineering
ship totally fragile quick-hack with no tests or logs 


Ignoring Documentation
- read documentation 
- write documentation
Write Readme, API Contracts, setup steps, Make onboarding 5-min not 5days