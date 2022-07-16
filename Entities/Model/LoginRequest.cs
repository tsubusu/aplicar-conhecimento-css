﻿using System.ComponentModel.DataAnnotations;

namespace Entities.Model
{
    public class LoginRequest
    {
        [Required]
        public string Login { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
