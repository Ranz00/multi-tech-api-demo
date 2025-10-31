var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// A simple GET endpoint
app.MapGet("/api/hello", () => new { message = "Hello from C# .NET!" });

// A POST endpoint that accepts a User object
app.MapPost("/api/user", (User user) => Results.Json(user));

app.Run();

// Record type for User
record User(int Id, string Name);
