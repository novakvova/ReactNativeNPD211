using Microsoft.EntityFrameworkCore;
using WebSpringApi.Abstract;
using WebSpringApi.Data;
using WebSpringApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<WebSpringDbContext>(opt =>
    opt.UseNpgsql(builder.Configuration.GetConnectionString("WebSpringConnection")));

builder.Services.AddScoped<IImageService, ImageService>();

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
//builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.MapOpenApi();
//}

app.UseSwagger();
app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Web Spring v1"));

app.UseAuthorization();

app.MapControllers();

app.Run();
