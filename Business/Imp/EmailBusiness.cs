using Business.Interface;
using Entities.DTO;
using MailKit.Net.Smtp;
using MimeKit;

namespace Business.Imp
{
    public class EmailBusiness : IEmailBusiness
    {
        private readonly ConfiguracaoEmail _emailSettings;
        public EmailBusiness(ConfiguracaoEmail emailSettings)
        {
            _emailSettings = emailSettings;
        }

        public void EnviarEmail(ConfiguracaoEmail configuracaoEmail)
        {
            var email = CriarEmail(configuracaoEmail);
            Enviar(email);
        }

        private MimeMessage CriarEmail(ConfiguracaoEmail configuracaoEmail)
        {
            var email = new MimeMessage();
            email.From.Add(new MailboxAddress("", _emailSettings.From));
            email.To.Add(configuracaoEmail.Destinatario);
            email.Subject = _emailSettings.Assunto;
            email.Body = new TextPart(MimeKit.Text.TextFormat.Text)
            {
                Text = configuracaoEmail.Corpo
            };

            return email;
        }

        private void Enviar(MimeMessage email)
        {
            using (var client = new SmtpClient())
            {
                try
                {
                    client.Connect(_emailSettings.SmtpServer, _emailSettings.Port, true);
                    client.AuthenticationMechanisms.Remove("XOUATH2");
                    client.Authenticate(_emailSettings.From, _emailSettings.Password);
                    client.Send(email);
                } 
                catch(Exception e)
                {

                } 
                finally
                {
                    client.Disconnect(true);
                    client.Dispose();
                }
            }
        }
    }
}
