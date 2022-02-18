[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7065635&assignment_repo_type=AssignmentRepo)

## Challenge 1: Create Variables

- Declare an int type variable and name it $intNumber and assign it a value of 1000.
- Declare a char type variable and name it $charName and assign it a value of N.
- Declare a boolean type variable and name it $boolVal and assign it a value of true.
- Declare a float type variable and name it $floatNum and assign it a value of 10.292.
 
Now output these values using the echo function in PHP. The values should be separated by a comma.

#### Output
```bash
1000, N, 1, 10.292
```

---
## Challenge 2: Arithmetic Operators 

Write code to print out the following:

```bash
12 + 7 = 19
12 - 7 = 5
12 * 7 = 84
12 / 7 = 1.7142857142857
12 % 7 = 5
```

---
## Challenge 3: Arithmetic-Assignment Operators

Write a script to reproduce the output below. Manipulate only one variable using only simple arithmetic operators to produce the values given in the statements.

```bash
Value is now 8.
Add 2. Value is now 10.
Subtract 4. Value is now 6.
Multiply by 5. Value is now 30.
Divide by 3. Value is now 10.
Increment value by one. Value is now 11.
Decrement value by one. Value is now 10.
```

---
## Challenge 4: If-Else Statement

Write a script that gets the current month and print a response, depending on whether it's December or not:

#### Sample output if it's December:
```bash
It's December, cold, gonna stay home, be a potato couch.
```
#### Sample output if not December:
```bash
Not December, but still nope! Stay home and be a NEETo!
```

<sub><sub>Hint: the function to get the current month is 'date('F', time())' for the month's full name.</sub></sub>

---
## Challenge 5: Associative Array

Using this list of cities:

```
Tokyo, Japan; Mexico City, Mexico; New York City, USA; Mumbai, India; Seoul, Korea; Shanghai, China; Lagos, Nigeria; Buenos Aires, Argentina; Cairo, Egypt; London, England.
```

Create an associative array using the countries as keys and the cities as values.

Once you've created an associative array, use this array to create a dropdown select element and display the options from the array created.


#### Format
```bash
<html xmlns="http://www.w3.org/1999/xhtml"  xml:lang="en" lang="en">
<head>
    <meta http-equiv="content-type" content="text/html;charset=iso-8859-1" />
    <title>Associative Array - Cities</title>
</head>
 
<body>
    <form>
    <p>Please choose a city:</p>
    <select name="city">
    
    <!-- dropdown goes here... -->

    </select>
    </form>
 
</body>
</html>
```
