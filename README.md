# _Beep Boop_
#### _Beep Boop a Number, 04.10.2019_
#### By _**Andrew Philpott**_
## Description
_The purpose of this application is to take a number and a name from the user and output a string counting from 0 to the number provided with exceptions outlined in the specs below. The users name input will be shown in select outputs_
* _Spec: The program returns a range of numbers from 0 to the users inputted number._
    * Input: "5"
    * Output: "0, 1, 2, 3, 4, 5"
* _Spec: The program returns "Beep" for a number that contains the number 1 in its digits._
    * Input: "1"
    * Output: "Beep"
* _Spec: The program returns "Boop" for a number that contains the number 2 in its digits._
    * Input: "2"
    * Output: "Boop"
* _Spec: The program returns "I'm sorry, Dave. I'm afraid I can't do that." for a number that contains the number 3 in its digits._
    * Input: "3"
    * Output: "I'm sorry, Dave. I'm afraid I can't do that."
* _Spec: The program returns "I'm sorry, Dave. I'm afraid I can't do that." for a number that contains both 3 and 1 in its digits._
    * Input: "13"
    * Output: "I'm sorry, Dave. I'm afraid I can't do that."
* _Spec: The program returns "Boop" for a number that contains both 2 and 1 in its digits._
    * Input: "12"
    * Output: "Boop"
* _Spec: The program returns "I'm sorry, {user provided name}. I'm afraid I can't do that." for a number that contains 3 in its digits and is divisible by 3._
    * Input: "3" and "Andrew"
    * Output: "I'm sorry, Andrew. I'm afraid I can't do that."
* _Spec: The program outputs an error message in red "Please enter a name" under the name input for when the input is left blank._
    * Input: ""
    * Output: "Please enter a name."
* _Spec: The program outputs an error message in red "Please enter a number" under the number input for when the input is left blank._
    * Input: ""
    * Output: "<span style="color:red">Please enter a number.</span>"
* _Spec: The program reverses and outputs to the user the transformed sequence based off the number provided._
    * Input: "5" "Andrew" "checked"
    * Output: "5, 4, I'm sorry Andrew. I'm afraid I can't do that., Boop, Beep, 0"
* _Spec: The program adds the color blue to "Beep" text after submitting a name and number._
    * Input: "1"
    * Output: "0, <span style="color:blue">Beep</span>"
* _Spec: The program adds the color red to "Boop" text after submitting a name and number._
    * Input: "2"
    * Output: "0, Beep, <span style="color:red">Boop</span>"

## Setup/Installation Requirements
_Clone this repository._

_Open index.html with a web browser._

## Support and contact details
_Issues or concerns? Contact me at andrewphilpott92@gmail.com. I will try to get back to you as soon as I am able._

## Technologies Used
_HTML_<br>
_CSS_<br>
_Bootstrap_<br>
_Javascript_<br>
_JQuery_

### License
Copyright (c) 2019 **_Andrew Philpott_**

*This software is licensed under the MIT license.*
