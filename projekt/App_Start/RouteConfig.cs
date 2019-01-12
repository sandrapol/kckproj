using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace projekt
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapMvcAttributeRoutes();
            routes.MapRoute(
                "SamochodyPrzezRok",
                "Samochod/Produkcja/{rok}",
                new { controller = "Samochod", action = "RokProdukcja"},
                new {rok =@"\d{4}"}
           );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Samochod", action = "ListaSamochodow", id = UrlParameter.Optional }
            );
        }
    }
}
