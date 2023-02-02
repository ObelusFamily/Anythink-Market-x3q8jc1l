#!/bin/bash

file="$1"

grep -i "@amazon.com" "$file" | awk -F, '{print $3, $2}' > output_names.txt
