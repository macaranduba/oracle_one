import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.Period;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class Dates {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		LocalDate nowLD = LocalDate.now();
		System.out.println("LocalDate = " + nowLD);
		LocalDate mesesAtrasLD = nowLD.minusMonths(12);
		System.out.println("LocalDate de 12 meses atrás: " + mesesAtrasLD);
		Period p = Period.between(nowLD, mesesAtrasLD);
		System.out.println("Período = " + p);
		
		LocalDateTime nowLDT = nowLD.atStartOfDay();
		LocalDateTime mesesAtrasLDT = mesesAtrasLD.atStartOfDay();
		Duration d = Duration.between(nowLDT, mesesAtrasLDT);
		System.out.println("Duration = " + d.toDays());

		System.out.println("LocalDate de 25 de janeiro de 2009: " + LocalDate.of(2009, Month.JANUARY, 25));

		System.out.println(nowLD.format(DateTimeFormatter.ofPattern("dd / MM / yyyy")));
		
		LocalDateTime ldt = LocalDateTime.now();

		ZonedDateTime zdt = ZonedDateTime.now();
	}

}
