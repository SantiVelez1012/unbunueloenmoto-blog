export class DateFormatter {


    static formatDateToSpanishColombia(dateString: string): string {
        return new Date(dateString).toLocaleDateString("es-CO", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

}