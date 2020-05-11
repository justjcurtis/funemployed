#!/bin/bashb
# bash -i ./updateData.sh
shopt -s expand_aliases;

lcnrd -f data/raw/jobs.txt -d -bl -l -rf;
sort data/raw/jobs.txt -o data/raw/jobs.txt

lcnrd -f data/raw/traits.txt -d -bl -l -rf;
sort data/raw/traits.txt -o data/raw/traits.txt

awk '
    BEGIN {
        FS=";"
        print "const jobs = ["
    }
    NR>1 {
        print "    \"" code "\","
    }
    {
        code = $1
        description = $2
    }
    END {
        print "    \"" code "\","
        print "]"
    }
    ' data/raw/jobs.txt > data/jobs.js

awk '
    BEGIN {
        FS=";"
        print "const traits = ["
    }
    NR>1 {
        print "    \"" code "\","
    }
    {
        code = $1
        description = $2
    }
    END {
        print "    \"" code "\","
        print "]"
    }
    ' data/raw/traits.txt > data/traits.js

