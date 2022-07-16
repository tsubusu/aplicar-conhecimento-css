using AutoMapper;
using Business.Interface;
using Business.Validation;
using Business.Validation.Enum;
using Entities.DTO;
using Entities.Model;
using FluentResults;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Repository.Interface;
using System.Web;

namespace Business.Imp
{
    public class UserBusiness : IUserBusiness
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly IValidator<User> _userDTOValidation;
        private readonly UserManager<IdentityUser<int>> _userManager;
        private readonly IEmailBusiness _emailBusiness;

        public UserBusiness(IUserRepository userRepository,
                            IMapper mapper,
                            IValidator<User> validationRules,
                            UserManager<IdentityUser<int>> userManager,
                            IEmailBusiness emailBusiness)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _userDTOValidation = validationRules;
            _userManager = userManager;
            _emailBusiness = emailBusiness;
        }

        public Result AddUserAsync(UserDTO userDTO)
        {
            var model = _mapper.Map<User>(userDTO);
            var userIdentity = _mapper.Map<IdentityUser<int>>(model);

            var result = _userManager.CreateAsync(userIdentity, userDTO.Password);

            if (result.Result.Succeeded)
            {
                var code = _userManager.GenerateEmailConfirmationTokenAsync(userIdentity).Result;
                var encodeCode = HttpUtility.UrlEncode(code);

                var configuracaoEmail = new ConfiguracaoEmail(userIdentity.Email);
                configuracaoEmail.CriarEmailConfirmacao(userIdentity.Id.ToString(), encodeCode);

                _emailBusiness.EnviarEmail(configuracaoEmail);
                return Result.Ok().WithSuccess(code);
            }

            return Result.Fail("Falha ao cadastrar usuário");
        }

        public Result AtivarContaUsuario(AtivarContaDTO ativarContaDTO)
        {
            var identityUser = _userManager
                .Users
                .FirstOrDefault(x => x.Id == ativarContaDTO.UsuarioID);

            var identityResult = _userManager
                .ConfirmEmailAsync(identityUser, ativarContaDTO.CodigoAtivacao).Result;
            if (identityResult.Succeeded)
            {
                return Result.Ok();
            }
            return Result.Fail("Falha ao ativar conta de usuario");
        }


        public async Task<List<UserDTO>> GetAll()
        {
            var user = await _userRepository.GetAll();

            var a = _userDTOValidation.Validate(user.FirstOrDefault(), opt => opt.IncludeRuleSets("Inserir"));

            return _mapper.Map<List<UserDTO>>(user);
        }
    }
}
