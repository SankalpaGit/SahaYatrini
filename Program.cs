using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Serve static files from Views/static
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "Views", "static")),
    RequestPath = "/static"
});

// Serve signup.html from Views/templates
app.MapGet("/", async context =>
{
    var file = Path.Combine(Directory.GetCurrentDirectory(), "Views", "templates", "signup.html");
    await context.Response.SendFileAsync(file);
});

// Serve login.html from Views/templates
app.MapGet("/login", async context =>
{
    var file = Path.Combine(Directory.GetCurrentDirectory(), "Views", "templates", "login.html");
    await context.Response.SendFileAsync(file);
});

app.Run();
