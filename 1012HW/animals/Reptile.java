package animals;

import parent.animal;

public class Reptile extends animal {

	private String skin;
	private String bone;
	private String egg;

	public Reptile() {
		super();
		this.skin = "dry skin";
		this.bone = "backbone";
		this.egg = "soft-shelled eggs";
	}

	public Reptile(String egg, String bone, String skin, int height, int weight, String animalType, String bloodType) {
		super();
		this.skin = skin;
		this.bone = bone;
		this.egg = egg;
	}

	public String getSkin() {
		return skin;
	}

	public String getBone() {
		return bone;
	}

	public String getEgg() {
		return egg;
	}
}
