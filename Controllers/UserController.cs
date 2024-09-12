using Microsoft.AspNetCore.Mvc;
using SahaYatrini.Config;
using SahaYatrini.Models;

namespace SahaYatrini.Controllers
{
    public class UserController : Controller
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            // Fetch all users from the database
            var users = _context.Users.ToList();
            return View(users);  // Return the view with the list of users
        }

        public IActionResult Create(User user)
        {
            if (ModelState.IsValid)
            {
                // Add a new user to the database
                _context.Users.Add(user);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(user);
        }
    }
}
