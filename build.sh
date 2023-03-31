#!/bin/bash


npm run build

current_time=$(date "+%Y-%m-%d_%H:%M:%S")
echo "Compress to zip with name: $current_time"

zip -r $current_time.zip ./build

rm -rf ./build



