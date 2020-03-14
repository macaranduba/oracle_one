import java.math.BigDecimal;

public class TestaVariaveis {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double valor1 = .1;
		double valor2 = .2;

		System.out.println(valor1 + valor2); // 0.30000000000000004!!!!!

		// float f = 3.14; // Type mismatch: cannot convert from double to float
		float f1 = 3.14f;
		float f2 = (float) 3.14;

		System.out.println(f1 + f2); // 0.300000000000000046.28 !!!!!
		try {
			BigDecimal bg1 = new BigDecimal(.1);
			BigDecimal bg2 = new BigDecimal(.2);
			System.out.println(bg1.add(bg2)); // 0.30000000000000004!!!!!
		} //catch (Exception e) {}
		finally {}
		
		//try {}
		try {}
		catch(Exception ex) {}
		finally {}
	}

}
