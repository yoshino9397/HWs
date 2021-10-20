// import java.util.ArrayList;
// import java.util.Collections;

// public class Lab3Q3 {
//   public static void main(String args[]) {
//     ArrayList<String> myList = new ArrayList<String>();
//     myList.add("Toyota");
//     myList.add("Volkswagen");
//     myList.add("Porsche");
//     myList.add("Ferrari");
//     myList.add("Mercedes-Benz");
//     myList.add("Audi");
//     myList.add("BMW");
//     myList.add("Rolls-Royce");
//     Collections.sort(myList);
//     System.out.println("Car model\n" + myList);
//   }

// }



import java.util.Collections;

public class Lab3Q3 {
  public static void main(String args[]) {
    Car[] arr;
    arr = new Car[3];
    arr[0] = new Car(1700, "Volkswagen", "German");
    arr[1] = new Car(1800, "Porsche", "German");
    arr[2] = new Car(1900, "BMW", "UK");
    arr[3] = new Car(2000, "Toyota", "Japan");
    arr[4] = new Car(2100, "Audi", "Italy");

    arr[0].display();
    arr[1].display();
    arr[2].display();
    arr[3].display();
    arr[4].display();
    // Collections.sort(arr);
  }
}

class Car {

  public int year;
  public String model;
  public String make;

  Car(int year, String model, String make) {
    this.year = year;
    this.model = model;
    this.make = make;
  }

  public void display() {
    System.out.println(model + "was made in" + make + "in" + year);
    System.out.println();
  }
}
