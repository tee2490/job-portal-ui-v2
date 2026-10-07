# Auth / login notes

- Demo users live in `DUMMY_USERS` inside `src/context/AuthContext.jsx` (NOT in `src/data/mockData.js`, which has no passwords).
  employer@company.com/employer123, hr@startup.com/hr123, jobseeker@email.com/jobseeker123,
  candidate@email.com/candidate123, admin@portal.com/admin123.
- `login()` matches against `[...DUMMY_USERS, ...localStorage.registeredUsers]` with plain `===` on email + password (no trim, no lowercasing, no hashing). `userType` arg is ignored.
- localStorage keys: `registeredUsers` (written by register(), read by login()), `jobPortalUser` + `authToken` (session).
- 2026-10: "Invalid email or password" for every correct login = comparison flipped to `u.password !== password` (AuthContext.jsx ~line 180, uncommitted edit). Side effect: wrong passwords log in. First check `git diff src/context/AuthContext.jsx` for this kind of operator flip.
- Baseline `npm run lint` already has ~30 pre-existing errors (unused vars), so lint is not a useful regression signal here; build passes.
