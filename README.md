# NightWatch JS
E2E Test Script for DemoBlaze (thirdTest.js) and DuckCreek (fourthTest.js) with NightWatchJs

## Instructions

### Exceute the entire Test source folder
```ruby
./node_modules/.bin/nightwatch
```

### Execute the particular Test.js
```ruby
./node_modules/.bin/nightwatch --test ./test/fourthTest.js
```

### Execute the particular test steps in Test.js
```ruby
./node_modules/.bin/nightwatch --test ./test/fourthTest.js --testcase "Careers"
```

## NightWatchJS Skeleton
Below is the tech stack that should be followed for nightWatchJS
```ruby
nightwatch-skeleton/
| -- custom_commands/
| -- ci/
     | -- functional-test.Jenkinsfile
| -- tests/ 
    | -- functional-tests/
    | -- visual-tests/
| -- nightwatch.json
| -- package.json
| -- README.md
| -- gitignore         
```
