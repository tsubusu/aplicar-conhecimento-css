using Entities.Base;
using System.ComponentModel.DataAnnotations;

namespace Entities.Model
{
    public class Menu : IEntity
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required(ErrorMessage = "Nome do Menu é obrigatório")]
        [MinLength(1), MaxLength(100)]
        public string Name { get; set; }
    }
}
