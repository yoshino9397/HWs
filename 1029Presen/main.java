class calculator {
  public static void main(String[] args) {
    double inputnum1 = 0;
    double inputnum2 = 0;
    String inputstr;
    char operand;
    while (true) {
      try {
        System.out.println("Please put a number in num1");
        inputstr = new java.util.Scanner(System.in).nextLine();
        if (inputstr.equals("C")) {
          System.out.println("Clear");
          /// ----Reset----///
          continue;
        } else if (checkNum(inputstr)) {
          inputnum1 = Double.parseDouble(inputstr);
        } else {
          System.out.println("Please enter a number");
          continue;
        }
        System.out.println("");
        System.out.println("Please enter one of the operators(+ - * /)");
        inputstr = new java.util.Scanner(System.in).nextLine();
        /// Use the first character of the input character as the operator
        operand = inputstr.charAt(0);
        if (inputstr.equals("C")) {
          System.out.println("Clear");
          continue;
        } else if (checkOpe(operand) == false) {
          System.out.println("Please enter the operator");
          continue;
        }
        System.out.println("");
        System.out.println("Please put a number in num2");
        inputstr = new java.util.Scanner(System.in).nextLine();
        if (inputstr.equals("C")) {
          System.out.println("Clear");
          continue;
        } else if (checkNum(inputstr)) {
          inputnum2 = Double.parseDouble(inputstr);
        } else {
          System.out.println("Please enter a number");
          continue;
        }
        System.out.println("");
        displayAnswer(inputnum1, inputnum2, operand);
        break;
      } catch (Exception e) {
        System.out.println("Exception occured!");
      }
    }
  }

  /// Perform four arithmetic operations and display the result
  static void displayAnswer(double number1, double number2, char inope) {
    double answer = 0;
    switch (inope) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    /// Case in inope ='/'
    default:
      if (number2 == 0) {
        System.out.println("Cannot be calculated due to division by 0");
        // Terminate the program
        System.exit(0);
      } else {
        answer = number1 / number2;
      }
    }
    System.out.println("Result:" + answer);
  }

  /// Check if the input character is a number
  static boolean checkNum(String checknum) {
    boolean result = true;
    /// Check from the beginning character by character
    for (int i = 0; i < checknum.length(); i++) {
      /// Determine the first character with the Character.isDigit method
      if (Character.isDigit(checknum.charAt(i))) {
        continue;
      } else {
        /// If it is not a number, set the verification result to false
        result = false;
        break;
      }
    }
    return result;
  }

  /// Check if the input character is an operator
  static boolean checkOpe(char operand) {
    if ("+-*/".indexOf(operand) == -1) {
      return false;
    }
    return true;
  }
}