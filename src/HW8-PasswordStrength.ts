export function calculatePasswordStrength(password: string): string {
    let strength = 0;
// Проверка основных требований к длине.
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;

// Проверка наличия цифр
    if (/\d/.test(password)) strength += 1;
// Проверка наличия строчных букв
    if (/[a-z]/.test(password)) strength += 1;
// Проверка наличия заглавных букв
    if (/[A-Z]/.test(password)) strength += 1;
// Проверка наличия специальных символов
    if (/[\W_]/.test(password)) strength += 1;
// Определить уровень надежности пароля на основе оценки его надежности
    if (strength <= 2) {
        return "Very Weak";
    } else if (strength === 3) {

        return "Weak";
    } else if (strength === 4) {
        return "Moderate";
    } else if (strength >= 5) {
        return "Strong";
    }
}