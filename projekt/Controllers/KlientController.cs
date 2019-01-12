using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using projekt.Models;
using projekt.ViewModels;

namespace projekt.Controllers
{
    public class KlientController : Controller
    {
        public List<klient> klienciList
        {
            get
            {
                klientBL users = new klientBL();
                List<klient> klienciList = users.GetUsers();
                return klienciList;
            }
        }
        // GET: Klient
        public ActionResult ListaKlientow()
        {
         
        var Klienci = new List<KlientVM>
            {
                new KlientVM{IdKlienta=1,Imie="Ja",Nazwisko="Jakaś",Wiek=18,Ulica="Potajemna",NrDomu=13},
                new KlientVM{IdKlienta=2,Imie="Ty",Nazwisko="Jakiś",Wiek=18,Ulica="Dziwna",NrDomu=3}
            };
            ListaklientowtVM viewModel = new ListaklientowtVM();
            viewModel.klienci = Klienci;
            
            return View(klienciList);
        }
    }
}