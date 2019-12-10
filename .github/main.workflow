workflow "Test Stores" {
  resolves = ["Test"]
  on = "push"
}

action "Test" {
  uses = "./.github/workflows/testEslintAndJest.yml"
}

