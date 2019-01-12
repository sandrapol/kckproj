using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using projekt.ViewModels;

namespace projekt.ViewModels
{
    public class ListaSamochodowVM:SamochodVM
    {
        public List<SamochodVM> samochody { get; set; }
    }
}