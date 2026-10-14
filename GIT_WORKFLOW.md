# Git Workflow

## Branches

- **`main`**: production. Deploys on every push, so it only changes when a release is ready.
- **`develop`**: integration branch. Always holds the latest working state.
- **`feat/*`, `fix/*`, `chore/*`**: short-lived branches created from `develop` and merged back into it.

## Process

1. Branch from `develop`.
2. Commit and push your work.
3. Open a PR into `develop` and squash merge it.
4. Delete the branch.
5. When `develop` is ready to ship, merge it into `main`.

## Commands

**Start a branch**

```bash
git switch develop
git pull
git switch -c feat/<name>
git push -u origin feat/<name>
```

**Open a pull request**

```bash
git push
gh pr create --base develop --title "feat(scope): summary" --body "What and why"
```

Always set `--base develop`, since `gh` otherwise targets the default branch. In the GitHub UI, change the base branch from `main` to `develop` before creating the PR. Then squash and merge.

**Keep a branch up to date with `develop`**

```bash
git fetch
git merge origin/develop
```

**Clean up after a PR is merged**

```bash
git switch develop
git pull
git branch -D feat/<name>    # -D because squash merges aren't detected as merged
```

**Release to `main`**

```bash
git switch main
git pull
git merge --no-ff develop
git push
```

## Conventions

- **Branch names:** `type/short-description`, e.g. `feat/…`, `fix/…`, `chore/…`.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/), e.g. `feat(scope): summary`. The PR title becomes the squashed commit message, so use the same format.
- **Merge styles:** squash for feature branches into `develop`, merge commit for `develop` into `main`. Never squash `develop` into `main`, since the branches' histories would diverge.
- **PR base:** feature PRs target `develop`. Only `develop` targets `main`.
