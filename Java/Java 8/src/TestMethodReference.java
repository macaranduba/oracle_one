import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.function.Function;

//import static java.util.Comparator.*; para poder usar metódos estáticos do Comparator por meio de referência implícita

public class TestMethodReference {

	public static void main(String[] args) {
		List<String> palavrasList = new ArrayList<String>();
		palavrasList.add("Letícia");
		palavrasList.add("José 123");
		palavrasList.add("Zeze 1");
		palavrasList.add("Lele");
		
		palavrasList.sort((s1, s2) -> Integer.compare(s1.length(), s2.length()));
		
//		
		palavrasList.sort(Comparator.comparing(s -> s.length()));		
		palavrasList.sort(Comparator.comparing(String::length)); // method reference

		Comparator<String> comparadorFactory = Comparator.comparing(s -> s.length());
		palavrasList.sort(comparadorFactory);		

		Function<String, Integer> funcao = s -> s.length();
		Comparator<String> comparadorFunction = Comparator.comparing(funcao);
		palavrasList.sort(comparadorFunction);
//

		Function<String, Integer> funcao1 = s -> s.length();
		Function<String, Integer> funcao2 = String::length; 	
		
		System.out.println(palavrasList);
		palavrasList.forEach(System.out::println);
	}

}
