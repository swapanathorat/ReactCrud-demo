using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using ReactCrud_demo.DAL;
using Microsoft.AspNetCore.Mvc;
using ReactCrud_demo.Models;

namespace ReactCrud_demo.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        //private readonly CitiesDAL _citiesDal;


        //       public CityController(CitiesDAL citiesDal)
        //{
        //    _citiesDal = citiesDal;
        //}

        CitiesDAL citiesDal = new CitiesDAL();

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
       [HttpGet]
        public IEnumerable<TblCities> GetCities()
        {
            return this.citiesDal.GetAllCities();
        }
    }
}