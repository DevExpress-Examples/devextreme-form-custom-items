using System.ComponentModel.DataAnnotations;

namespace FormCustomItem {
    public class Employee {
        public int ID { get; set; }
        public string FirstName { get; set; }
        [Required(ErrorMessage = "LastName is required")]
        public string LastName { get; set; }
        public string Photo { get; set; }
    }
}