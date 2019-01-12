using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using projekt.Models;
using System.ComponentModel.DataAnnotations;

namespace projekt.ViewModels
{
    public class KlientVM : projekt.Models.klient
    {

        public KlientVM()
        {

        }

        public KlientVM(projekt.Models.klient u)
        {
            IdKlienta = u.IdKlienta;
            Nazwisko = u.Nazwisko;
            Imie = u.Imie;
            Wiek = u.Wiek;
            Ulica = u.Ulica;
            NrDomu = u.NrDomu;
        }
        [Display(Name = "Nazwisko i imię")]
        public string name
        {
            get
            {
                return Nazwisko + "" + Imie;
            }
        }
        public string colorAge
        {
            get
            {
                if (Wiek < 18)
                {
                    return "yellow";
                }
                return "white";
            }
        }
    }
}