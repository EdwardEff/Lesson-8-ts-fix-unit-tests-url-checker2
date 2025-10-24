import {calculatePasswordStrength} from "../src/HW8-PasswordStrength";

describe("calculatePasswordStrength  tests", () => {
    // Граничные значения длины
    test("Граничное значение меньше минимального 7. Учитывая проверку наличия цифр, полученных баллов = 1, что приравнивается к значению Very Weak. ", () => {
        expect(calculatePasswordStrength("1234567")).toBe("Very Weak");
    });

    test("Граничное значение в пределе, длина ровно 8. Учитывая проверку наличия цифр, полученных баллов = 2, что приравнивается к значению Very Weak.", () => {
        expect(calculatePasswordStrength("12345678")).toBe("Very Weak");
    });

    test("Граничное значение в пределе, длина ровно 12 символов. Учитывая проверку наличия цифр, полученных баллов = 3, что приравнивается к значению Weak.", () => {
        expect(calculatePasswordStrength("123456789012")).toBe("Weak");
    });

    // Только один тип символов
    test("только строчные буквы, ожидание ответа: Very Weak ", () => {
        expect(calculatePasswordStrength("abcdefg")).toBe("Very Weak");
    });

    test("только цифры, ожидание ответа: Very Weak", () => {
        expect(calculatePasswordStrength("1234567")).toBe("Very Weak");
    });

    test("только спецсимволы, ожидание ответа: Very Weak", () => {
        expect(calculatePasswordStrength("!@#$%")).toBe("Very Weak");
    });

    // Нестандартные сценарии
    test("Использование в пароле «пробел» должен являться спецсимволом, учитывая совокупность всех параметров, ожидается, что при значении =5 равнивается к Strong ", () => {
        expect(calculatePasswordStrength("Abc 1234")).toBe("Strong");
    });

    test("Использование символов Emoji должно засчитываться как спецсимвол, учитывая длину 12 и наличие спецсимволов, ожидается, что при значении =4 приравнивается к Weak", () => {
        expect(calculatePasswordStrength("😂 😃 😄 😅 😆 😇 ")).toBe("Weak");
    });

    //Невалидные значения
    test("При использовании пустой строки для пароля, учитывая все параметры, приравнивается к Very Weak", () => {
        expect(calculatePasswordStrength("")).toBe("Very Weak");
    });

    test("строка из пробелов", () => {
        expect(calculatePasswordStrength("     ")).toBe("Very Weak");
    });

});