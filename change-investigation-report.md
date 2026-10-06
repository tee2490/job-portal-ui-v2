# 🔎 Change Investigation Report

**Target**: `src/components/Footer.jsx:198-214` (the file has 213 lines, so the range checked was 198-213: the copyright/tagline block, the closing tags and `export default Footer`)
**Investigation Date**: 2026-10-06
**Repository**: https://github.com/tee2490/job-portal-ui-v2.git
**Branch**: master

---

## 📋 Investigation Summary

| Detail                  | Value                                                        |
| ----------------------- | ------------------------------------------------------------ |
| File(s) Analyzed        | `src/components/Footer.jsx`                                  |
| Lines Investigated      | 198-213 (16 lines)                                           |
| Total Commits on File   | 5                                                            |
| Commits on Target Lines | 1 (`6b84f16`, initial commit)                                |
| Unique Authors          | 1                                                            |
| File Age (First Commit) | 2026-10-03                                                   |
| Last Modified (file)    | 2026-10-05 by tee2490 (`17bb92b`)                            |
| Last Modified (range)   | 2026-10-03 by tee2490 (`6b84f16`)                            |

---

## 👥 Author Breakdown

| #   | Author  | Email                                         | Commits | Lines Owned (file) | Lines Owned (range) | First Contribution | Last Contribution |
| --- | ------- | --------------------------------------------- | ------- | ------------------ | ------------------- | ------------------ | ----------------- |
| 1   | tee2490 | 44152787+tee2490@users.noreply.github.com     | 5       | 213 (100%)         | 16 (100%)           | 2026-10-03         | 2026-10-05        |

Co-author trailers in the file's commits: `Claude Opus 5.5` (6b84f16, cd78021, cc22a8e, 8e86f53), and `claude[bot]` plus `Claude Sonnet 5.5` (17bb92b).

**Primary Owner**: tee2490
**Most Recent Contributor**: tee2490 (2026-10-05, `17bb92b`)
**CODEOWNERS**: Not configured (`.github/CODEOWNERS` does not exist)

---

## 📅 Change Timeline

`git log -L 198,213` shows that only one commit has touched the target lines. The other four commits changed different parts of the file (the policy and contact links above this block). Their added lines pushed the block down from its original position at lines 164-179 to 198-213, but its content did not change.

### 6b84f16 — 2026-10-03 14:28:28 +0700 *(only commit touching the target lines)*

- **Author**: tee2490 <44152787+tee2490@users.noreply.github.com>
- **Message**: Initial commit: job portal React UI
- **Body**: Co-Authored-By: Claude Opus 5.5
- **Ticket References**: None found
- **Lines Changed**: +179 / -0 (whole file created)
- **What Changed**:
  > Initial scaffold. Created the footer's bottom-right block with the "© 2026 JobPortal. All rights reserved." notice, the "Made with ❤️ for job seekers worldwide" tagline, the closing JSX and the default export. It hasn't been modified since.

### Other commits on the file (did not touch the target lines)

| Commit    | Date             | Message                                                       | +/-     | Tickets          |
| --------- | ---------------- | ------------------------------------------------------------- | ------- | ---------------- |
| `17bb92b` | 2026-10-05 11:23 | feat: add hover help tooltip to footer contact us link (#15)  | +12/-7  | #15              |
| `8e86f53` | 2026-10-05 09:37 | fix: show tooltip on footer terms of service link (#11)       | +12/-4  | #11, closes #5   |
| `cc22a8e` | 2026-10-05 09:30 | fix: show tooltip on footer privacy policy link (#12)         | +16/-4  | #12, closes #10  |
| `cd78021` | 2026-10-04 14:32 | fix: show tooltip on footer cookie policy link (#4)           | +13/-4  | #4, closes #3    |

---

## 🔬 Line-by-Line Blame (Current State)

| Line | Code (truncated)                                  | Author  | Date       | Commit Message                      |
| ---- | ------------------------------------------------- | ------- | ---------- | ----------------------------------- |
| 198  | `<div className="text-center md:text-right">`     | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 199  | `<div className="text-gray-400 text-sm mb-2">`    | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 200  | `© 2026 JobPortal. All rights reserved.`          | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 201  | `</div>`                                          | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 202  | `<div className="text-xs text-gray-500">`         | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 203  | `Made with ❤️ for job seekers worldwide`           | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 204  | `</div>`                                          | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 205  | `</div>`                                          | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 206  | `</div>`                                          | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 207  | `</div>`                                          | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 208  | `</div>`                                          | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 209  | `</footer>`                                       | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 210  | `);`                                              | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 211  | `};`                                              | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 212  | *(blank)*                                         | tee2490 | 2026-10-03 | Initial commit: job portal React UI |
| 213  | `export default Footer;`                          | tee2490 | 2026-10-03 | Initial commit: job portal React UI |

---

## 🎫 Linked Tickets & References

None of the commits on the target lines reference a ticket. The tickets below come from the other commits on the same file:

| Ticket ID      | Commit    | Author  | Date       | Commit Subject                                               |
| -------------- | --------- | ------- | ---------- | ------------------------------------------------------------ |
| #15            | `17bb92b` | tee2490 | 2026-10-05 | feat: add hover help tooltip to footer contact us link       |
| #11, #5        | `8e86f53` | tee2490 | 2026-10-05 | fix: show tooltip on footer terms of service link            |
| #12, #10       | `cc22a8e` | tee2490 | 2026-10-05 | fix: show tooltip on footer privacy policy link              |
| #4, #3         | `cd78021` | tee2490 | 2026-10-04 | fix: show tooltip on footer cookie policy link               |

---

## 💡 Insights

- **Churn Assessment**: The target lines have had no changes since they were created. The file as a whole is busy: 4 changes in 2 days (Oct 4-5), all of them to the policy and contact links above this block.
- **Bus Factor**: 1 author owns 100% of the file. Normally that's a bus-factor flag, but this is a single-developer learning repo, so the risk is expected.
- **Stale Code Risk**: The code is only 3 days old, so it isn't stale. One thing to watch: the year `2026` is hard-coded on line 200, so the notice will be out of date from January 2027. Consider `new Date().getFullYear()`.
- **Review Gaps**: The only commit on the target lines (the initial commit) has no ticket, which is normal for a scaffold commit. Every later change to the file references a PR or issue number.
- **Convention note**: Line 213 uses `export default Footer`, but `.claude/rules/coding-standards.md` prefers named exports for components.
