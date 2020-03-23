import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.function.Function;

public class Main {

	public static void main(String[] args) {

		ArrayList<Aula> aulas1 = new ArrayList<>(), aulas2 = new ArrayList<>();
		
		for(int i = 0; i < 1000; i++) {
			int numeroGerado = (int) ( Math.random() * 100000 );
			Aula a = new Aula(numeroGerado); 
			aulas1.add( a );
			aulas2.add( a );
		}
		// Arrays.copyOf(original, newLength), podiamos copiar um array em função do outro.
		// imprimindo os dois arrays 
		System.out.println(aulas1);
		System.out.println(aulas2);
		System.out.println();

		long comecouMillis = System.currentTimeMillis();
		Collections.sort(aulas1);
		long tempoCollectionsSort = System.currentTimeMillis() - comecouMillis;
		System.out.println("Tempo do Collections.sort(aulas) = " + tempoCollectionsSort + "ms.");
		
		comecouMillis = System.currentTimeMillis();
		aulas2.sort(Comparator.comparing(Aula::getTempo));
		long tempoComparatorComparing = System.currentTimeMillis() - comecouMillis;
		System.out.println("Tempo do Comparator.comparing(Aula::getTempo()) = " + tempoComparatorComparing + "ms.");

		// imprimindo os dois arrays ordenados
		System.out.println(aulas1);
		System.out.println(aulas2);
		
//		Function<Aula, Void> f = (Aula) -> { System.out.println(""); 	return null; };
//
//		Iterator<Aula> i = aulas1.iterator();
//		while(i.hasNext()) {
//			f(i.hasNext());
//		}
	}

}

class Aula implements Comparable<Aula> {
	private int tempo;
	
	public Aula(int tempo) {
		this.tempo = tempo;
	}

	public int getTempo() {
		return tempo;
	}
	
	public String toString() {
		return tempo + "";
	}

	@Override
	public int compareTo(Aula o) {
		return Integer.compare(this.tempo, o.getTempo());
	}
}

class Aluno {
	private int numeroMatricula;

	private String nome;
	
	public Aluno(int numeroMatricula, String nome) {
		super();
		this.numeroMatricula = numeroMatricula;
		this.nome = nome;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		result = prime * result + numeroMatricula;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Aluno other = (Aluno) obj;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		if (numeroMatricula != other.numeroMatricula)
			return false;
		return true;
	}
	
}
