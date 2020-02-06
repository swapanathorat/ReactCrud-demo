using ReactCrud_demo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCrud_demo.DAL
{
    public class CitiesDAL
    {
        public List<TblCities> GetAllCities ()
        {
			ReactCrudDemoContext db = new ReactCrudDemoContext();

			try
			{
				return db.TblCities.ToList();
			}
			catch
			{

				throw;
			}

        }
    }
}
