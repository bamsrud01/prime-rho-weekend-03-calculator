# Weekend Project 03 - calculator

This project uses the client-server relationship to create a calculator application.  All operations take place in the server, while the the client handles the selection of inputs and the display of the result.

## Features

- All operations are handled in separate routers in the server.
- The calculator is styled using Bootstrap.
- The logic of the calculator allows decimals to be used, and limits them to only one per number.
- The calculator will automatically clear the calculator if a number is pressed while the display is showing the result of a previous calculation.
- The calculator will only allow one operation per calculation.
- If only one number is entered, the program will instruct the user to enter a second number.

## Issues

Currently, the calculator has a few issues.  These may be addressed in the future:

- When the program is cleared, the result remains stored in the router's result variable.  This is not a major issue, as it will not be retrieved until after a request has been made to the router, and a new value is assigned, but it may be preferable to clear this value as well.
- The logic can only handle one operation at a time.  For this reason, input is deactivated for a second operator.
- If the input or result string is too long, it will not fit into the display field, and instead be shown below the field, pushing all buttons down.
- It is possible to enter a decimal point alone for the second number, or neglect to enter a second number entirely, both of which will result in an answer of 'NaN'.
- Currently, Bootstrap only styles the page for large and medium-sized displays.  It is distorted on a mobile device.

## Installation

- Requires Node, Express, and NPM
- Run npm install and npm start in the project directory
- Go to http://localhost:3000 to run the project
- Make sure to close the server using Control+C before closing the terminal!

## Author
- Barrett Amsrud
- October 9th, 2016
