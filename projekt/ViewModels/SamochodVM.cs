using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using projekt.Models;
using System.ComponentModel.DataAnnotations;

namespace projekt.ViewModels
{
    public class SamochodVM : projekt.Models.samochod
    {


            public SamochodVM()
            {

            }

            public SamochodVM(projekt.Models.samochod u)
            {
                Id = u.Id;
                Modell = u.Modell;
                Rok = u.Rok;
                KM = u.KM;
                TypSilnika = u.TypSilnika;
                Kolor= u.Kolor;
            }
            [Display(Name = "Marka i Model")]
            public string name
            {
                get
                {
                    return Marka + "" + Modell;
                }
            }
        }
    }

