## 2024.04.24

# When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN

# const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

# declaration let use when you want to change value, declaration const use when you don't want to change value never again.

# single and double quotes work the same in JavaScript.

#
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed

# I need to  and the space when i concatenation between strings.

#  we can divide up our code into reusable parts called functions.
# It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
# Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
#  The resolve and reject parameters given to the promise argument are used to do this
# match in javascript
n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n
[abc]	Find any of the characters between the brackets	
[0-9]	Find any of the digits between the brackets	
(x|y)	Find any of the alternatives separated with |
^ beginning part, $end part
 Finding all character = _
 
 /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
 ^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input

#24.04.26s
A positive lookahead is used as (?=...) where the ... is the required part that is not matched
A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.

push() method adds elements to the end of an array, and unshift() adds elements to the beginning. 
pop() removes an element from the end of an array, while shift() removes an element from the beginning. 

ndexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

dot notation for property
bracket to name the property --> string will be the property

# constructor basic form
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

# A mixin allows other objects to use a collection of functions.