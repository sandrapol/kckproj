using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace projekt.Models
{
    public class samochod
    {
        [Key]
        public int Id { get; set; }
        [Display(Name = "Marka")]
        public string Marka { get; set; }
        [Display(Name = "Model")]
        public string Modell { get; set; }
        [Display(Name = "Rok")]
        public int Rok { get; set; }
        [Display(Name = "Silnik")]
        public string TypSilnika { get; set; }
        [Display(Name = "Moc")]
        public int KM { get; set; }
        [Display(Name = "Kolor")]
        public string Kolor { get; set; }
    }
}