using Entities.Model;

namespace Repository.Interface
{
    public interface IUserRepository
    {
        Task<List<User>> GetAll();
    }
}
