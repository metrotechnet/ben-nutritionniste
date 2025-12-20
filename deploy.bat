# =======================================================
# Ben Nutritionniste - PowerShell Deployment Script
# Simple and reliable Firebase deployment
# =======================================================

@REM Remove-Item -Recurse -Force .\public\*
@REM Copy-Item -Recurse -Force .\index.html .\public\
@REM Copy-Item -Recurse -Force .\css .\public\
@REM Copy-Item -Recurse -Force .\js .\public\
@REM Copy-Item -Recurse -Force .\assets .\public\
firebase deploy --only hosting --force
    