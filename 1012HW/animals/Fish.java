package animals;

import parent.animal;

public class Fish extends animal {
  private String place;
  private String gill;

  public Fish() {
    super();
    this.place = "live in water";
    this.gill = "has gill";

  }

  public Fish(String gill, String place, int height, int weight, String animalType, String bloodType) {
    super();
    this.place = place;
    this.gill = gill;

  }

  public String getplace() {
    return place;
  }

  public String getgill() {
    return gill;
  }

}
