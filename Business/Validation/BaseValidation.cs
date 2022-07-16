using FluentValidation;

namespace Business.Validation
{
    public abstract class BaseValidation<T> : AbstractValidator<T> where T : class
    {
    }
}
