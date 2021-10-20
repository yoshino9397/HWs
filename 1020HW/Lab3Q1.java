public class Lab3Q1 {
	public static void main(String[] args) {

		// 配列を定義する
		String[] strArray = { "2", "23", "33", "45", "13", "42", "6", "11", "19", "35" };

		// 存在を確認する要素
		String searchElement = "23";

		// 配列の要素をひとつづつfor文でまわす
		for (String str : strArray) {

			// 配列の要素が、確認したい要素と一致すれば表示
			if (str == (searchElement)) {
				System.out.println("We have " + searchElement + "!");
			} else {
				System.out.println("We don't have " + searchElement + "!");
			}
		}
	}

}
