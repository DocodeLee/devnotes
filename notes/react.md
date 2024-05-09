<!-- I realized that useState get array
The useState hook needs to return two values: the current state and a function to change it. However, Javascript doesn't have any native way for functions to return several values, it can return only one value. But we can still fake multiple return values by returning a single value containing all the values we want to return. In the case of useState, returning an array of length 2 is essentially the same as returning two values. -->

<!-- Props
If data is on the other component use props to connect them
it makes your code more clear -->
<!-- https://www.freecodecamp.org/news/how-to-use-props-in-react/ -->