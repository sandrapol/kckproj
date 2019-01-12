using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using projekt.ViewModels;

namespace projekt.ViewModels
{
    public class ListaklientowtVM : KlientVM
    {
        public List<KlientVM> klienci { get; set; }
       // public string nazwaklienta { get; set; }
    }
}