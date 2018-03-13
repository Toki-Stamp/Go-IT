/**
 * Created by TS on 31.05.2017.
 */
'use strict';
var userInput = prompt('Enter userInput (admin / manager or something else):'), text;
text = (userInput === 'admin') ? 'Hi, admin!' : (userInput === 'manager') ? 'Hello, manager!' :
    (userInput === '') ? 'No login input!' : (userInput === null) ? 'Canceled!' : 'Greetings, ' + userInput + '!';
alert(text);