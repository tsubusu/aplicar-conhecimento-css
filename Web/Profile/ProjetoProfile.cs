using AutoMapper;
using Entities.DTO;
using Entities.Model;
using Microsoft.AspNetCore.Identity;

namespace Web.ProjetoProfile
{
    public class ProjetoProfile : Profile
    {
        public ProjetoProfile()
        {
            CreateMap<User, UserDTO>().ReverseMap();
            CreateMap<User, IdentityUser<int>>().ReverseMap();
        }
    }
}
