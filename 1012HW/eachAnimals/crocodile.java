package eachAnimals;

import animals.Reptile;

public class crocodile extends Reptile {

  @Override
  public String getEgg() {
    return "Hard-shelled eggs";
  }
  public static void main(String[] args) {
		Reptile crocodile = new Reptile("Hard-shelled eggs","backbone","Dry skin", 300, 100, "Reptile", "unknown");

		System.out.println(crocodile);
	}
}
