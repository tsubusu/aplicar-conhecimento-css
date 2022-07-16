using Business.Interface;
using Entities.Model;
using FluentResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Business.Imp
{
    public class LoginBusiness : ILoginBusiness
    {
        private SignInManager<IdentityUser<int>> _signInManager;

        public LoginBusiness(SignInManager<IdentityUser<int>> signInManager)
        {
            _signInManager = signInManager;
        }

        public Token GetToken(IdentityUser<int> user)
        {
            var claimsUser = new Claim[]
            {
                new Claim("username", user.UserName),
                new Claim("id", user.Id.ToString())
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes("12323r2r2r23r2r23r32r32r32r23r2r3321erwerewrwerwer32t"));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                claims: claimsUser,
                signingCredentials: credentials,
                expires: DateTime.UtcNow.AddHours(1)
                );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
            return new Token(tokenString);
        }

        public Result SignIn(LoginRequest loginRequest)
        {
            var result = _signInManager
                    .PasswordSignInAsync(loginRequest.Login, loginRequest.Password, false, false);

            if (!result.Result.Succeeded) return Result.Fail("Login Falhou!");

            var identityUser = _signInManager.UserManager.Users
                    .FirstOrDefault(x => x.NormalizedUserName.Equals(loginRequest.Login.ToUpper()));

            var token = GetToken(identityUser);
            return Result.Ok().WithSuccess(token.Value); 
        }

        public Result DeslogaUsuario()
        {
            var resultadoIdentity = _signInManager.SignOutAsync();

            if (resultadoIdentity.IsCompletedSuccessfully)
            {
                return Result.Ok();
            }
            return Result.Fail("Logout falhou");
        }
    }
}
