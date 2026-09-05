export function getAuthErrorMessage(code: string): string {
  switch (code) {
    case "auth/invalid-email":
      return "Geçerli bir e-posta adresi giriniz.";
    case "auth/user-disabled":
      return "Bu hesap devre dışı bırakılmış.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Kullanıcı adı veya şifre hatalı.";
    case "auth/too-many-requests":
      return "Çok fazla başarısız deneme. Lütfen daha sonra tekrar deneyin.";
    case "auth/network-request-failed":
      return "Bağlantı hatası. İnternet bağlantınızı kontrol edin.";
    default:
      return "Giriş yapılamadı. Lütfen tekrar deneyin.";
  }
}
