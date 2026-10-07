---
name: data-layer-hotspots
description: Known recurring data-layer problems in JobContext/JobsDataContext/services/pages (storage key drift, bypassed context, double-merged job lists) and baseline lint
metadata:
  type: project
---

Recurring data-layer anti-patterns seen as of 2026-10-07 (verify still present before citing):

- Pages (PostJob.jsx, MyJobs.jsx) write `globalPostedJobs` / `postedJobs_{id}` localStorage directly, bypassing JobContext. JobContext.postJob/updateJob/deleteJob had no consumers (dead code).
- `fetchAllJobs` (companyService) already merges `globalPostedJobs`; JobContext.getAllJobsSync merges them again -> duplicates in Jobs.jsx.
- Storage key drift: rules table says `jobApplications_{id}`, `savedJobs_{id}`; services write `jobApplications_` and `savedJobIds_`; JobContext fallback reads `appliedJobs_`/`savedJobs_`. `globalApplications` is read but never written anywhere.
- Unguarded `JSON.parse(localStorage...)` is pervasive in services, JobContext and pages.
- Context values not memoized, functions not wrapped in useCallback (JobContext, JobsDataContext).
- JobsDataContext has many leftover `console.log` debug lines.

**Why:** these are pre-existing; future reviews should only flag them when a change touches or copies them.
**How to apply:** check whether a diff adds another direct-localStorage write or another key variant; reference this list instead of re-auditing.

Baseline lint: JobContext.jsx:9 and JobsDataContext.jsx:9 each have `react-refresh/only-export-components` (hook exported beside provider) — pre-existing, not new.
Existing files use 2-space indentation even though the user's preference is tabs (see user auto-memory); don't flag spaces in untouched code.
