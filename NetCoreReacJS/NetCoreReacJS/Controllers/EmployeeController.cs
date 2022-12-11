using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NetCoreReacJS.Models;

namespace NetCoreReacJS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly AdventureWorks2019Context _dbContext;

        public EmployeeController(AdventureWorks2019Context context)
        {
            _dbContext = context;
        }

        [HttpGet]
        [Route("GetEmployee")]
        public IActionResult GetEmployee()
        {
            List<Employee> list = _dbContext.Employees.ToList();

            return StatusCode(StatusCodes.Status200OK, list);
        }
    }
}
