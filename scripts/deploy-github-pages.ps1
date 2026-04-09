<#
.SYNOPSIS
  Build the Vite app for GitHub Project Pages and push /dist to the gh-pages branch.

.DESCRIPTION
  Sets GITHUB_PAGES_BASE so asset URLs resolve under https://<user>.github.io/<repo>/.
  Requires: Node.js, npm, git, and a remote named "origin" pointing at the GitHub repository.

.PARAMETER RepositoryName
  Repository segment in the GitHub Pages URL (default: prototype1).

.EXAMPLE
  .\scripts\deploy-github-pages.ps1
  .\scripts\deploy-github-pages.ps1 -RepositoryName "my-app"
#>
param(
    [Parameter(HelpMessage = "GitHub repository name (path segment after github.io/)")]
    [string]$RepositoryName = "prototype1"
)

$ErrorActionPreference = "Stop"

function Test-CommandExists {
    param([string]$Name)
    return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

if (-not (Test-CommandExists "git")) {
    Write-Error "git is required but was not found in PATH."
}
if (-not (Test-CommandExists "npm")) {
    Write-Error "npm is required but was not found in PATH."
}

$base = "/$RepositoryName/".Replace("//", "/")
$env:GITHUB_PAGES_BASE = $base
Write-Host "GITHUB_PAGES_BASE=$base" -ForegroundColor Cyan

Push-Location $PSScriptRoot\..
try {
    npm run build
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

    npx gh-pages -d dist -m "Deploy GitHub Pages"
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}
finally {
    Pop-Location
}

Write-Host "Done. In the GitHub repo: Settings -> Pages -> Build: Deploy from branch -> gh-pages / root." -ForegroundColor Green
