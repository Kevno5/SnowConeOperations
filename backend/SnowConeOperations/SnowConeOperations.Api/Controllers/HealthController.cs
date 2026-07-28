using Microsoft.AspNetCore.Mvc;
[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult GetHealth()
    {
        return Ok(new
        {
            message = "Backend connection successful"
        });
    }
}
