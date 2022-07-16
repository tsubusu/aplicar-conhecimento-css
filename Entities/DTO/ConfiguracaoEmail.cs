using MimeKit;

namespace Entities.DTO
{
    public class ConfiguracaoEmail
    {
        public ConfiguracaoEmail(string corpo, string assunto, MailboxAddress destinatario)
        {
            Corpo = corpo;
            Assunto = assunto;
            Destinatario = destinatario;
        }

        public ConfiguracaoEmail(string destinatario)
        {
            this.Destinatario = new MailboxAddress("", destinatario);
        }

        public ConfiguracaoEmail()
        {
        }

        public string Corpo { get; set; }
        public string Assunto { get; set; }
        public MailboxAddress Destinatario { get; private set; }
        public List<MailboxAddress> Destinatarios { get; private set; }
        public string From { get; set; }
        public string SmtpServer { get; set; }
        public int Port { get; set; }
        public string Password { get; set; }

        public void SetMultiplosDestinatarios(List<string> destinatarios)
        {
            destinatarios.ForEach(x => this.Destinatarios.Add(new MailboxAddress("", x)));
        }

        public void CriarEmailConfirmacao(string userID, string codigoAtivacao)
        {
            this.Corpo = $"https://localhost:7163/ativar?UsuarioID={userID}&CodigoAtivacao={codigoAtivacao}";
        }
    }
}
