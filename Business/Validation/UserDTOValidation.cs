using Business.Validation.Enum;
using Entities.Model;
using FluentValidation;

namespace Business.Validation
{
    public class UserDTOValidation : BaseValidation<User>
    {
        public UserDTOValidation()
        {
            RuleSet("Inserir", () =>
            {
                RuleFor(x => x.Id)
                .Must(x =>
                {
                    return false;
                })
                .NotNull()
                .NotEmpty()
                .WithMessage("teste");
            });
            
        }
    }
}
