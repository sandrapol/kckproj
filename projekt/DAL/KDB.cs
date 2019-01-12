using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using projekt.Models;

namespace projekt.DAL
{
    public class KDB : DbContext
    {
        public KDB() : base("mydb")
        {

        }

        public DbSet<klient> KlienciDB { get; set; }
        public DbSet<samochod> SamochodyDB { get; set; }

    }
}