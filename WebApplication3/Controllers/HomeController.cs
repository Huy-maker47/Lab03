using System;
using System.Collections.Generic;
using System.EnterpriseServices.Internal;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult bang()
        {
            return View();
        }
        public ActionResult baif4()
        {
            return View();
        }
        public ActionResult baif5()
        {
            return View();
        }
        public ActionResult bang3()
        {
            return View();
        }
        public ActionResult BANG2()
        {
            return View();
        }


    }
}