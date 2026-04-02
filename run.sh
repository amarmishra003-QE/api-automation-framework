#!/bin/bash
echo "Running API tests..."
npx newman run collection.json -e environment.json