using System.Web.Mvc;

namespace FormCustomItem.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {
            var model = new Employee() {
                ID = 1,
                FirstName = "Peter",
                LastName = "Smith",
                Photo = "/content/images/petersmith.png"
            };

            return View(model);
        }
    }
}