import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.OptionalDouble;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class TestStreams {

	public static void main(String[] args) {
		List<Curso> cursos = new ArrayList<Curso>();
		
		cursos.add(new Curso("C", 45));
		cursos.add(new Curso("Java", 150));
		cursos.add(new Curso("C#", 113));
		cursos.add(new Curso("PHP", 55));
		
		// Comparator.comparing Vs Comparator.comparingInt !!!
		// ordena com method reference
		cursos.sort( Comparator.comparingInt( Curso::getNumeroAlunos ) );

		// ordena com lambda
		cursos.sort( Comparator.comparingInt( curso -> curso.getNumeroAlunos() ) );

		System.out.println("Imprime todos os cursos com Iterable.forEach:");
		cursos.forEach(System.out::print);
		System.out.println("\nImprime o NOME de todos os cursos com Iterable.forEach:");
		cursos.forEach( c -> System.out.println(c.getNome()) );
		System.out.println("\nImprime o nome de todos os cursos com Stream:");
		Stream<String> nomes = cursos.stream().map(Curso::getNome);
		nomes.forEach(System.out::println);
		
		System.out.println("Imprime todos os cursos com menos de 100 alunos:");
		cursos.stream().
			filter(curso -> curso.getAlunos() < 100).
			//forEach(c -> System.out::println));
			forEach(c -> System.out.println(c.getNome()));

		System.out.println("Imprime o número de alunos dos cursos com menos de 100 alunos:");
		cursos.stream().
			filter(curso -> curso.getAlunos() < 100).
			//map(c -> c.getAlunos()).
			map(Curso::getAlunos).
			//forEach(n -> System.out.println(n));
			forEach(System.out::println);

		System.out.println("Imprime o número de alunos dos cursos com menos de 100 alunos:");
		int sum = cursos.stream().
			filter(curso -> curso.getAlunos() >= 100).
			//map(c -> c.getAlunos()).
			mapToInt(Curso::getAlunos).
			//forEach(n -> System.out.println(n));
			sum();
		System.out.println(sum);
		
		System.out.println("cria um Stream<Integer> com a quantidade de alunos dos cursos com + de 50 alunos e em seguida imprime todos eles.");
		cursos.stream()
	   .filter(c -> c.getAlunos() > 50)
	   .map(c -> c.getAlunos())
	   //.forEach(x -> System.out.println(x));
	   .forEach(System.out::println);
		
		
		Map<String, Integer> mapLambda = cursos.stream().
				filter(c -> c.getAlunos() >= 100).
				collect(Collectors.toMap(c -> c.getNome(), c -> c.getAlunos()));
		System.out.println("Mapa com Lambda" + mapLambda); 
		Map<String, Integer> mapMethodReference = cursos.stream().
				filter(c -> c.getAlunos() < 100).
				collect(Collectors.toMap(Curso::getNome, Curso::getAlunos));
		System.out.println("Mapa com Method Reference: " + mapMethodReference); 

		cursos.stream().
			filter(c -> c.getAlunos() < 100).
			collect(Collectors.toMap(Curso::getNome, Curso::getAlunos)).
			forEach((nome, nAlunos) -> System.out.println("O curso " + nome + " tem " + nAlunos + " alunos.") );
		
		// Parallel Streams
		cursos.parallelStream(); // divide o trabalho em threads.
		
		// Optional results
		OptionalDouble media = cursos.stream().mapToInt(Curso::getAlunos).average();
		media.ifPresent(System.out::println);
		System.out.println("Média = " + media);
		
		// Colletors
		List<Curso> cursosFiltrados = cursos.stream()
			   .filter(c -> c.getAlunos() > 50)
			   .collect(Collectors.toList());
		 System.out.println(cursosFiltrados);
}


}
