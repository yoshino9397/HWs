class calculator {
  public static void main(String args[]) {
    int val1 = 0; /* First Number */
    int val2 = 0; /* Second Number */
    String ope; /* operator */
    int result;

    if (args.length != 3) {
      errDisp("Please enter 3 arguments.");
    }

    try {
      val1 = Integer.parseInt(args[0]);
      val2 = Integer.parseInt(args[2]);
    } catch (NumberFormatException e) {
      errDisp("A non-numeric value has been entered.");
    }

    ope = args[1];

    String opeStr[] = { "×", "÷", "＋", "-" };
    boolean errFlag = true;

    for (int i = 0; i < 4; i++) {
      if (ope.equals(opeStr[i])) {
        errFlag = false;
      }
    }

    if (errFlag == true) {
      errDisp("There are four operators.");
    }

    if (ope.equals("×")) {
      result = val1 * val2;
    } else if (ope.equals("＋")) {
      result = val1 + val2;
    } else if (ope.equals("-")) {
      result = val1 - val2;
    } else {
      if (val2 == 0) {
        errDisp("You tried to divide by 0.");
      }

      result = val1 / val2;
    }

    System.out.println("You entered " + val1 + " " + ope + " " + val2 + ".");
    System.out.println("The calculation result is " + result + ".");
  }

  private static void errDisp(String errStr) {
    System.out.println(errStr);
    System.exit(0); /* Exit the program */
  }
}