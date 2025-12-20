# =======================================================
# Ben Nutritionniste - PowerShell Deployment Script
# Simple and reliable Firebase deployment
# =======================================================

Remove-Item -Recurse -Force .\public\*
Copy-Item -Recurse -Force .\index.html .\public\
Copy-Item -Recurse -Force .\css .\public\
Copy-Item -Recurse -Force .\js .\public\
Copy-Item -Recurse -Force .\assets .\public\
firebase deploy --only hosting --force
    