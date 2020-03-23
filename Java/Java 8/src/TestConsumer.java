import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.UnaryOperator;


/**
 * Consumer, Default methods, Collections sort and replaceAll methods.
 * @author Guest user
 *
 */
public class TestConsumer {

	public static void main(String[] args) {
		List<String> palavras = new ArrayList<>();
		palavras.add("alura online");
		palavras.add("casa do código");
		palavras.add("caelum");
		
		Consumer<String> consumidor = new ImprimeNaLinha();
		palavras.forEach(consumidor);
		
		palavras.forEach(palavra -> System.out.println(palavra));
		 palavras.sort( (s1, s2) -> {
			 if(s1 != null) 
				 return s1.compareTo(s2);
			 return s2 == null ? 0 : -1;
		 }); // Collections.sort: exemplo de default method, método de interface para não quebrar implementações legadas
		
		 palavras.replaceAll(new UnaryOperator<String>() {
			@Override
			public String apply(String t) {
				// TODO Auto-generated method stub
				return t + " 1";
			}
		 });
		 palavras.replaceAll( palavra -> palavra + " 3" );
		 
		 System.out.println(palavras);
	}

}

class ImprimeNaLinha implements Consumer<String>{

  @Override
  public void accept(String s) {
      System.out.println(s);
  }
}
