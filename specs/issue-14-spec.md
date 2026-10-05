# Technical Specification — Issue #14

> **Status note:** Issue #14 is **CLOSED**. The fix is already on `master` in commit
> `17bb92b` ("feat: add hover help tooltip to footer contact us link (#15)").
> This spec records the root cause and the shipped solution, and lists the
> verification steps that are still open.

## 1. Issue Overview

| Field       | Value |
| ----------- | ----- |
| Title       | Inside the footer, when user hovers on "Contact Us" not text being displayed |
| Description | The footer "Contact Us" link shows no help text on hover. It leads to the Contact page, where users message the admin about a problem. Help text should appear on hover. |
| Labels      | None |
| Milestone   | None |
| State       | Closed (fixed by PR #15) |
| Priority    | Low (UX polish; nothing is broken) |

**Discussion:** The owner asked `@claude` to fix the issue. The bot pushed branch
`claude/issue-14-20261005-0413`, which was merged as PR #15. The bot said it
**did not run `npm run lint`** and **did not check the tooltip in a browser**.

## 2. Problem Analysis

- `src/components/Footer.jsx` has a bottom row of legal links: Privacy Policy, Terms of Service, Cookie Policy and Contact Us.
- The first three were already wrapped in the shared `Tooltip` component (`src/components/Tooltip.jsx`). Earlier fixes, such as `8e86f53` for Terms of Service, added those wrappers.
- Before `17bb92b`, the "Contact Us" `<Link to="/contact">` had no `Tooltip` wrapper and no `title` attribute, so hovering it showed nothing.
- Root cause: the Contact Us link was left out of the tooltip pattern its sibling links use. This was not a bug in `Tooltip`.

## 3. Proposed Solution (as implemented)

- Add a module-level constant `CONTACT_US_TEXT` in `Footer.jsx` to hold the help text, as the other links do with `*_TEXT` constants.
- Wrap the existing `<Link to="/contact">` in `<Tooltip title="Contact Us" content={CONTACT_US_TEXT}>`.
- Add `focus:text-white focus:outline-none` and `group-focus:opacity-100` to the link so keyboard focus looks the same as hover, matching the sibling links.
- No change to routing, contexts or `Tooltip` itself.

**Trade-offs:** reusing `Tooltip` keeps the styling consistent. It also brings accessibility for free: `aria-describedby`, `role="tooltip"` and showing on focus. The CSS-only approach means touch devices have no hover, but a tap goes straight to `/contact`, which is acceptable.

## 4. Step-by-Step Implementation

1. **Add help text constant.** Done: `CONTACT_US_TEXT` at `src/components/Footer.jsx:13`.
2. **Wrap the link in Tooltip.** Done: `src/components/Footer.jsx:188-196`.
3. **Match focus styling.** Done: the same focus classes as the sibling links.
4. **Run lint.** Still open: `npm run lint` was never run on the change.
5. **Visual check.** Still open: check placement in a browser (see §5).

## 5. Verification Strategy

### Unit Tests

The project has no test runner configured, so no unit tests apply. If one is added later:
- Render `Footer` → an element with `role="tooltip"` contains the text "Contact Us" and `CONTACT_US_TEXT`.
- The Contact Us link has an `aria-describedby` that matches the tooltip's `id`.

### Integration Tests

- Click "Contact Us" → the router goes to `/contact` and renders `Contact`.

### Manual Checks

- Hover "Contact Us" on desktop (≥ md) → the tooltip fades in above the link with the title and help text.
- Tab to "Contact Us" with the keyboard → the tooltip appears (focus-within), and the link gets the highlight.
- Narrow viewport (< sm, 375px) → the tooltip (`w-64`, centered) is not clipped at the screen edge. If it is, set `align="start"`, which is already supported.
- Dark/light theme → the footer is always dark, so the tooltip should look the same in both.
- `npm run lint` → no new warnings.

## 6. Files to Modify

| File Path | Nature of Change |
| --------- | ---------------- |
| `src/components/Footer.jsx` | Already changed in `17bb92b`. Change it again only if the mobile check shows clipping (add `align="start"`). |

## 7. New Files to Create

| File Path | Purpose |
| --------- | ------- |
| — | None needed |

## 8. Existing Utilities to Leverage

| Utility | Benefit |
| ------- | ------- |
| `Tooltip` (`src/components/Tooltip.jsx`) | Shows on hover and focus, uses ARIA wiring (`useId` + `aria-describedby`), has an `align` prop, and matches the footer styling |
| `*_TEXT` constants pattern in `Footer.jsx` | Keeps long copy out of the JSX, the same way the sibling links do |

## 9. Acceptance Criteria

- [x] Hovering "Contact Us" in the footer shows help text that explains it opens the Contact page to message the admin.
- [x] The tooltip also appears on keyboard focus.
- [x] The link still goes to `/contact`.
- [ ] `npm run lint` passes.
- [ ] The tooltip has been checked visually on desktop and mobile widths, and it is not clipped.
- [ ] No regressions in the other footer tooltips.

## 10. Out of Scope

- Redesigning `Tooltip` or adding tap-to-show behaviour for touch devices.
- Adding tooltips to other footer links (Quick Links, social icons).
- Changes to the Contact page or the admin contact-messages flow.
- Setting up a test framework.
