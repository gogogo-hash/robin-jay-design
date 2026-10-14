# Git Workflow

How branches, commits and releases are organized in this repo.

## Why this exists

`main` deploys to GitHub Pages on every push (see `.github/workflows/deploy.yml`). Half-built client work must not land there, so day-to-day work is integrated into a separate `develop` branch. `main` only changes when a milestone is ready to go live.

## Branch model

| Branch    | Lifespan      | Created from | Merges into | Merge style              |
| --------- | ------------- | ------------ | ----------- | ------------------------ |
| `main`    | permanent     | n/a          | n/a         | n/a                      |
| `develop` | permanent     | `main`       | `main`      | merge commit (`--no-ff`) |
| `feat/*`  | days          | `develop`    | `develop`   | squash                   |
| `fix/*`   | hours to days | `develop`    | `develop`   | squash                   |
| `chore/*` | hours to days | `develop`    | `develop`   | squash                   |

```
main      ●───────────────────────────────●   (only updated when ready to ship)
           \                             /
develop     ●──●────●──────●───────●────●     (always the latest working state)
               \   / \     / \     /
feat/theme      ●─●   ●───●   \   /
feat/layout                    ●─●
feat/content                   ●─●
```

Key rules:

- Never commit directly to `main`.
- Feature branches are short-lived. Merge them back as soon as a piece is usable, even if it's a draft.
- Don't keep a long-lived branch (like a permanent theme branch) and merge it into other branches. Fix problems in a small branch off `develop` instead.
- Don't cherry-pick commits between feature branches. Merge from `develop` so history stays clean.

## Naming

Use `type/short-description`, lowercase, hyphen-separated.

| Prefix   | Use for                       | Example                                    |
| -------- | ----------------------------- | ------------------------------------------ |
| `feat/`  | new functionality or sections | `feat/layout`, `feat/hero`, `feat/contact` |
| `fix/`   | bug fixes and corrections     | `fix/theme-contrast`                       |
| `chore/` | tooling, config, dependencies | `chore/lint-config`                        |
| `docs/`  | documentation only            | `docs/git-workflow`                        |

Planned branches for the portfolio:

- `feat/theme`: Tailwind theme tokens in `src/index.css`
- `feat/layout`: page structure and sections
- `feat/content`: all site content in `src/data/site.ts`
  Split large branches by outcome (for example `feat/hero`, `feat/projects-section`) rather than one giant "all sections" branch.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): summary`.

```
feat(theme): add color tokens
fix(layout): correct mobile padding
chore(lint): enable react hooks rule
docs: add git workflow
```

- Imperative mood ("add", not "added").
- Keep the summary under about 72 characters.
- Because feature branches are squash-merged, the PR title becomes the commit message on `develop`, so write the PR title in this format too.

## One-time setup

Run these once, from a clean working tree.

```bash
# 1. Check your starting state
git status                  # should be clean
git fetch --all --prune
git branch -a

# 2. (Optional) rename create-theme to feat/theme
git switch create-theme
git branch -m create-theme feat/theme
git push -u origin feat/theme
git push origin --delete create-theme

# 3. Create develop from main
git switch main
git pull
git switch -c develop
git push -u origin develop

# 4. Get the theme into develop (via PR)
git push origin feat/theme   # only needed if there are unpushed commits
gh pr create --base develop --head feat/theme \
  --title "feat(theme): add draft Tailwind theme" \
  --body "Initial theme tokens in index.css. Expect follow-up fixes."
```

Without the GitHub CLI, open the PR in the browser and **change the base branch from `main` to `develop`**. Choose **Squash and merge**.

Then clean up:

```bash
git switch develop
git pull
git branch -D feat/theme                 # -D is needed: squash merges aren't detected as "merged"
git push origin --delete feat/theme      # skip if GitHub auto-deleted it
```

```bash
# 5. Create the working branches from develop
git switch develop
git switch -c feat/layout
git push -u origin feat/layout

git switch develop
git switch -c feat/content
git push -u origin feat/content
```

## Day-to-day

### Working on a feature

```bash
git switch feat/layout
# ...edit, then commit often
git add -p
git commit -m "feat(layout): add header and navigation"
git push
```

When a piece is done, open a PR into `develop` and squash merge it.

### Pulling in new changes from `develop`

Do this whenever `develop` has something you need, such as a theme fix or another branch's merged work.

```bash
git switch feat/layout
git fetch
git merge origin/develop
```

Commit or stash your work first so the merge starts clean.

### Fixing a theme problem found mid-layout

```bash
git switch develop
git pull
git switch -c fix/theme-contrast
# edit src/index.css, then:
git commit -am "fix(theme): improve text contrast on dark sections"
git push -u origin fix/theme-contrast
# open a PR into develop and squash merge it, then:
git switch feat/layout
git fetch
git merge origin/develop
```

### Starting a new branch

```bash
git switch -c feat/new-thing develop    # branches from develop regardless of where you are
git push -u origin feat/new-thing
```

## Shipping to `main`

When `develop` is in a state you're happy to publish:

```bash
git switch main
git pull
git merge --no-ff develop -m "release: first client-ready version"
git push                                 # triggers the deploy workflow
```

Or open a PR from `develop` to `main` and choose **Create a merge commit**. **Do not squash** `develop` into `main`: it makes the two branches' histories diverge and causes confusing conflicts on the next release.

## GitHub settings

- **Settings → Branches → Default branch:** set to `develop` so new PRs target it by default. Deployment is unaffected because the workflow only triggers on `main`.
- **Settings → General → Pull Requests:** enable "Automatically delete head branches".
- **Optional:** add a branch protection rule on `main` requiring pull requests.
- **Optional:** add a CI workflow that runs `npm run lint` and `npm run build` on PRs into `develop` and `main`.

## Command cheat sheet

| Goal                                           | Command                                                 |
| ---------------------------------------------- | ------------------------------------------------------- |
| See all branches (local and remote)            | `git branch -a`                                         |
| Refresh remote info without changing anything  | `git fetch --all --prune`                               |
| Switch branch                                  | `git switch <branch>`                                   |
| Create and switch to a branch                  | `git switch -c <new> [<start-point>]`                   |
| Publish a new branch and link it to the remote | `git push -u origin <branch>`                           |
| Push a specific branch from anywhere           | `git push origin <branch>`                              |
| Bring `develop` into your branch               | `git fetch && git merge origin/develop`                 |
| Rename the current branch                      | `git branch -m <new-name>`                              |
| Delete a local branch                          | `git branch -d <branch>` (or `-D` after a squash merge) |
| Delete a remote branch                         | `git push origin --delete <branch>`                     |
| Discard changes to a file                      | `git restore <file>`                                    |

## Notes and gotchas

- **Plain `git push` pushes the branch you're currently on.** Check with `git status` or use `git push origin <branch>` to be explicit.
- **`git branch -d` refuses to delete squash-merged branches** because their original commits aren't in `develop`. Use `-D` once you've confirmed the PR merged.
- **Merge vs rebase:** merging `develop` into a feature branch is the default here because it's simple and safe. Rebase (`git rebase origin/develop`) is fine if the branch is only yours and hasn't been pushed, but never rebase a branch others are using.
- **Opening a PR against the wrong base** is the most common mistake. Feature PRs go into `develop`. Only `develop` goes into `main`.
