package animals;
import parent.animal;



public class Reptile extends animal {
	
	private String skin;

	public Reptile() {
		super(); 
		this.skin = "dry skin";
	}
	public Reptile(String skin,int height,int weight,String animalType, String bloodType) {
		super(height,weight,animalType,bloodType);
		this.skin =skin;
	}
	public String getSkin() {
		return skin;
	}
}
	



	