
using Entities.DTO;

namespace Business.Interface
{
    public interface IEmailBusiness
    {
        void EnviarEmail(ConfiguracaoEmail configuracaoEmail);
    }
}
