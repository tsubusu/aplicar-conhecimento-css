using Entities.Model;
using FluentResults;
using Microsoft.AspNetCore.Identity;

namespace Business.Interface
{
    public interface ILoginBusiness
    {
        Result SignIn(LoginRequest loginRequest);
        Token GetToken(IdentityUser<int> user);
        Result DeslogaUsuario();
    }
}
