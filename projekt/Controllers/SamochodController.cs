using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using projekt.Models;
using projekt.ViewModels;

namespace projekt.Controllers
{
    public class SamochodController : Controller
    {
        // GET: Samochod/Random
        public ActionResult ListaSamochodow()
        {
            var Samochody = new List<SamochodVM>
            {
                new SamochodVM {Id=1, Marka="Audi",Modell="A3",Rok=2017,KM=142,TypSilnika="Diesel",Kolor="Czerwony"},
                new SamochodVM {Id=2, Marka="Mazda",Modell="6",Rok=2017,KM=204,TypSilnika="Benzyna",Kolor="Czarny"},
                new SamochodVM {Id=1, Marka="VW",Modell="Golf V",Rok=2017,KM=75,TypSilnika="Diesel",Kolor="Srebrny"}
            };
            ListaSamochodowVM viewModel = new ListaSamochodowVM();
            viewModel.samochody = Samochody;

            return View(viewModel);
        }
     
        public ActionResult RokProdukcja(int rok)
        {
            
            return Content("15");
        }

    }
    
}