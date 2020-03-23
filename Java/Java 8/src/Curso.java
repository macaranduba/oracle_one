import java.util.ArrayList;
import java.util.List;

public class Curso {
	private String nome;
	private int numeroAlunos;
//	List<Aluno> alunos;
	
	public Curso(String nome, int numero) {
		super();
		this.nome = nome;
		this.numeroAlunos = numero;
//		this.alunos = new ArrayList();
	}

	public String getNome() {
		return nome;
	}

	public int getAlunos() {
		return numeroAlunos;
	}
	
//	public void matricula(Aluno a) {
//		alunos.add(a);
//	}
//	
//	public List<Aluno> getAlunos() {
//		return alunos;
//	}
	
	public int getNumeroAlunos() {
		//return alunos.size();
		return numeroAlunos;
	}
	
	@Override
	public String toString() {
		return "[Curso] " + nome + " com " + numeroAlunos + " alunos]";
	}

}
