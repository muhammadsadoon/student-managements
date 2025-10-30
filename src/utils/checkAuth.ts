export const Auth = () => {
    if (localStorage.getItem("sb-ltpkjageptpynecfrzlu-auth-token")) {
        return JSON.parse(String(localStorage.getItem("sb-ltpkjageptpynecfrzlu-auth-token")));
    } else {
        return null;
    }
}
