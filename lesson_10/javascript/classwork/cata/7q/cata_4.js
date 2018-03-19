/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/complete-the-pattern-number-10-parallelogram */

/* Complete The Pattern #10 - Parallelogram */
/*
 You have to write a function pattern
 which returns the following Pattern
 (See Examples) upto n rows, where n is parameter.

 Rules/Note:

 If the Argument is 0 or a Negative Integer
 then it should return "" i.e. empty string.
 The length of each line = (2n-1).
 Range of n is (-∞,100]

 Examples:

 pattern(5):

     12345
    12345
   12345
  12345
 12345

 pattern(10):

          1234567890
         1234567890
        1234567890
       1234567890
      1234567890
     1234567890
    1234567890
   1234567890
  1234567890
 1234567890

 pattern(15):

               123456789012345
              123456789012345
             123456789012345
            123456789012345
           123456789012345
          123456789012345
         123456789012345
        123456789012345
       123456789012345
      123456789012345
     123456789012345
    123456789012345
   123456789012345
  123456789012345
 123456789012345

 pattern(20):

                    12345678901234567890
                   12345678901234567890
                  12345678901234567890
                 12345678901234567890
                12345678901234567890
               12345678901234567890
              12345678901234567890
             12345678901234567890
            12345678901234567890
           12345678901234567890
          12345678901234567890
         12345678901234567890
        12345678901234567890
       12345678901234567890
      12345678901234567890
     12345678901234567890
    12345678901234567890
   12345678901234567890
  12345678901234567890
 12345678901234567890

*/