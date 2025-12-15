using System.ComponentModel.DataAnnotations;

namespace ASP_NET_Core.Models;

public class Employee
{
    public int ID { get; set; }

    [Required(ErrorMessage = "FirstName is required")]
    public string FirstName { get; set; } = string.Empty;

    [Required(ErrorMessage = "LastName is required")]
    public string LastName { get; set; } = string.Empty;

    [Required(ErrorMessage = "Photo is required")]
    public string Photo { get; set; } = string.Empty;
}
