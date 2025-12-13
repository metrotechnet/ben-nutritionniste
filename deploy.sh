#!/bin/bash
# =======================================================
# Ben Nutritionniste - Deployment Script
# Simple and reliable Firebase deployment
# =======================================================

echo ""
echo "========================================"
echo "  Ben Nutritionniste - Deployment"
echo "========================================"
echo ""

# Check if we're in the right directory
if [ ! -f "firebase.json" ]; then
    echo "ERROR: firebase.json not found. Make sure you're in the project directory."
    exit 1
fi

# Display current project status
echo "Checking project status..."
echo ""

# Deploy to Firebase
echo "Starting Firebase deployment..."
echo ""
firebase deploy --only hosting

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "  Deployment Successful!"
    echo "========================================"
    echo ""
    echo "Your site is live at:"
    echo "https://ben-nutritionniste.web.app"
    echo ""
    echo "Project Console:"
    echo "https://console.firebase.google.com/project/ben-nutritionniste/overview"
    echo ""
else
    echo ""
    echo "ERROR: Deployment failed!"
    echo "Please check your Firebase configuration."
    exit 1
fi