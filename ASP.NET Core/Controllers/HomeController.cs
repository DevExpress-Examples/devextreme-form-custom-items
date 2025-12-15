using ASP_NET_Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP_NET_Core.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var model = new Employee
        {
            ID = 1,
            FirstName = "Peter",
            LastName = "Smith",
            Photo = "/images/petersmith.png",
        };

        return View(model);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View();
    }
}

