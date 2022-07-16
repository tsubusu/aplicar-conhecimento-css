using Business.Interface;
using Entities.Model;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILoginBusiness _loginBusiness;
        public LoginController(ILoginBusiness loginBusiness)
        {
            _loginBusiness = loginBusiness;
        }

        [HttpPost]
        public IActionResult SignIn(LoginRequest loginRequest)
        {
            var result = _loginBusiness.SignIn(loginRequest);

            if (result.IsFailed) return Unauthorized(JsonConvert.SerializeObject(result.Errors));

            return Ok(JsonConvert.SerializeObject(result.Successes));
        }

        [HttpGet]
        public IActionResult DeslogaUsuario()
        {
            var resultado = _loginBusiness.DeslogaUsuario();
            if (resultado.IsFailed) return Unauthorized(resultado.Errors);
            return Ok(resultado.Successes);
        }
    }
}
