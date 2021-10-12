package animals;
import parent.animal;

public class Birds extends animal{
  private String feather;
  private String fly;

  public Birds() {
    super();
    this.feather = "with feathers";
    this.fly = "Can fly";

  }

  public Birds(String fly, String feather, int height, int weight, String animalType, String bloodType) {
    super();
    this.feather = feather;
    this.fly = fly;

  }

  public String getfeather() {
    return feather;
  }

  public String getfly() {
    return fly;
  }

}
