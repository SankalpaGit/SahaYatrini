namespace SahaYatrini.Models
{
    public class User
    {
        public int Id { get; set; }               // Primary Key
        public string Name { get; set; }          // User's Name
        public string Email { get; set; }         // User's Email
        public string PasswordHash { get; set; }  // Password (hashed)
    }
}