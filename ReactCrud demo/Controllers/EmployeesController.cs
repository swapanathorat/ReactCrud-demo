using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactCrud_demo.DAL;
using ReactCrud_demo.Models;

namespace ReactCrud_demo.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        //private readonly EmployeeDataAccessLayer _employeeDataAccessLayer;

        //public EmployeesController(EmployeeDataAccessLayer employeeDataAccessLayer)
        //{
        //    _employeeDataAccessLayer = employeeDataAccessLayer;
        //}

        EmployeeDataAccessLayer objemployee = new EmployeeDataAccessLayer();

        // GET: api/Employees
        [HttpGet]
        public IEnumerable<TblEmployee> GetAllEmployees()
        {
            return objemployee.GetAllEmployees();
        }

        // GET: api/Employees/5
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<TblEmployee>> GetTblEmployee(int id)
        {
            var employee = this.objemployee.GetEmployeebyId(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // PUT: api/Employees/5
        [HttpPut]
        public int updateEmployee([FromForm] TblEmployee employee)
        {
            return this.objemployee.UpdateEmployee(employee);
        }

        // POST: api/Employees
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public int CreateEmployee([FromForm]  TblEmployee employee)
        {
            return this.objemployee.AddNewEmployee(employee);
        }

        // DELETE: api/Employees/5
        [HttpDelete]
        [Route("{id}")]
        public int DeleteEmployee(int id)
        {
            return this.objemployee.DeleteEmployee(id);
        }

    }
}
