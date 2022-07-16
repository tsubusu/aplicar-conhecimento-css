using Business.Interface;
using Entities.DTO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserBusiness _userBusiness;
        public UserController(IUserBusiness userBusiness)
        {
            _userBusiness = userBusiness;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            return Ok(await _userBusiness.GetAll());
        }

        [HttpPost]
        public IActionResult CadastroUsuario(UserDTO userDTO)
        {
            var result = _userBusiness.AddUserAsync(userDTO);
            if (result.IsFailed) return StatusCode(500);

            var message = "";

            result.Successes.ForEach(x => message += x.Message);

            var json = JsonConvert.SerializeObject(message);

            return Ok(json);
        }

        [HttpGet("/ativar")]
        public IActionResult AtivarContaUsuario([FromQuery] AtivarContaDTO ativarContaDTO)
        {
            var result = _userBusiness.AtivarContaUsuario(ativarContaDTO);
            if (result.IsFailed) return StatusCode(500);

            var message = "";

            result.Successes.ForEach(x => message += x.Message);

            var json = JsonConvert.SerializeObject(message);

            return Ok(JsonConvert.SerializeObject(result.Successes));
        }

    }
}
