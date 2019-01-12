using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace projekt.Models
{
    public class klient
    {
        [Key]
        public int IdKlienta { get; set; }
        [Display(Name = "Imię")]
        public string Imie{ get; set; }
        [Display(Name = "Nazwisko")]
        public string Nazwisko { get; set; }
        [Display(Name = "Wiek")]
        public int Wiek { get; set; }
        [Display(Name = "Ulica")]
        public string Ulica { get; set; }
        [Display(Name = "NrDomu")]
        public int NrDomu{ get; set; }
    }
}