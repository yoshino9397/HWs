package eachAnimals;

import animals.Fish;

public class eel extends Fish {
  private String character;

  public eel() {
    super();
    this.character = "Release electric charge";
  }

  public eel(String character, String gill, String place, int height, int weight, String animalType, String bloodType) {
    super();
    this.character = character;
  }
  public String getChara() {
    return character;
  }
  public static void main(String[] args) {
		Fish eel = new Fish("It releases electric charge","They have gills", 70, 30, "Fish", "unknown");

		System.out.println(eel);
	}
}