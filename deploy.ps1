# =======================================================
# Ben Nutritionniste - PowerShell Deployment Script
# Simple and reliable Firebase deployment
# =======================================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Ben Nutritionniste - Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "firebase.json")) {
    Write-Host "ERROR: firebase.json not found. Make sure you're in the project directory." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Display current project status
Write-Host "Checking project status..." -ForegroundColor Yellow
Write-Host ""

try {
    # Clear browser cache headers and add timestamp
    Write-Host "Preparing deployment with cache-busting..." -ForegroundColor Yellow
    $timestamp = Get-Date -Format "yyyyMMddHHmmss"
    Write-Host "Deployment timestamp: $timestamp" -ForegroundColor Cyan
    Write-Host ""
    
    # Deploy to Firebase
    Write-Host "Starting Firebase deployment..." -ForegroundColor Green
    Write-Host ""
    
    # À exécuter dans le dossier racine de ton projet
    Remove-Item -Recurse -Force .\public\*
    Copy-Item -Recurse -Force .\index.html .\public\
    Copy-Item -Recurse -Force .\css .\public\
    Copy-Item -Recurse -Force .\js .\public\
    Copy-Item -Recurse -Force .\assets .\public\
    firebase deploy --only hosting --force
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "  Deployment Successful!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Your site is live at:" -ForegroundColor White
        Write-Host "https://ben-nutritionniste.web.app" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Project Console:" -ForegroundColor White
        Write-Host "https://console.firebase.google.com/project/ben-nutritionniste/overview" -ForegroundColor Cyan
        Write-Host ""
    } else {
        Write-Host ""
        Write-Host "ERROR: Deployment failed!" -ForegroundColor Red
        Write-Host "Please check your Firebase configuration." -ForegroundColor Yellow
        Read-Host "Press Enter to exit"
        exit 1
    }
}
catch {
    Write-Host ""
    Write-Host "ERROR: An exception occurred during deployment!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Read-Host "Press Enter to exit"