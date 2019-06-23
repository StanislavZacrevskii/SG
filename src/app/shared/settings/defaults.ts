export class Defaults {

    public static limit = {
        titleRecordMax: 255,
        recordDescMax: 20000
    };

    public static regexp = {
        telephoneRegexp: new RegExp("^\\d+$"),
        registerPassword: new RegExp("^(?=.*[a-z])(?=.*[A-Z])((?=.*\\d)|(?=.*[!@#$%^&*()'\"]))[A-Za-z\\d!@#$%^&*()'\"](?!\\s).{8,20}$")
    };

}
