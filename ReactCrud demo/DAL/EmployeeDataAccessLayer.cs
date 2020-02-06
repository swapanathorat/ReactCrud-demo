using Microsoft.EntityFrameworkCore;
using ReactCrud_demo.Models;
using System.Collections.Generic;
using System.Linq;

namespace ReactCrud_demo.DAL
{
    public class EmployeeDataAccessLayer
    {
        ReactCrudDemoContext db = new ReactCrudDemoContext();

        /// <summary>
        /// Get All Employees
        /// </summary>
        /// <returns>List of all employees</returns>
        public IEnumerable<TblEmployee> GetAllEmployees()
        {
            try
            {
                return db.TblEmployee.ToList();
            }
            catch
            {
                throw;
            }
            
        }

        /// <summary>
        /// Add a New Employee
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        public int AddNewEmployee(TblEmployee employee)
        {
            try
            {
                db.TblEmployee.Add(employee);
                db.SaveChanges();
                return 1;
            }
            catch 
            {
                throw;
            }
        }

        /// <summary>
        /// Updates employee details
        /// </summary>
        /// <param name="employee">Employee entity</param>
        /// <returns>Interger value</returns>
        public int UpdateEmployee(TblEmployee employee)
        {
            try
            {
                db.Entry(employee).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        /// <summary>
        /// Get Employee details by Id
        /// </summary>
        /// <param name="id">Employee Id</param>
        /// <returns>Employee Entity</returns>
        public TblEmployee GetEmployeebyId(int id)
        {
            try
            {
                TblEmployee employee = db.TblEmployee.Find(id);
                return employee;
            }
            catch
            {
                throw;
            }

        }

        public int DeleteEmployee(int id)
        {
            try
            {
                TblEmployee employee = db.TblEmployee.Find(id);
                if (employee != null)
                {
                    db.TblEmployee.Remove(employee);
                    db.SaveChanges();
                }
                else
                {
                    // Log
                }
                return 1;
            }
            catch
            {

                throw;
            }

        }

    }
}
