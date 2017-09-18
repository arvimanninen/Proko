using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Back
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // TODO: Find out why this works:
            // https://docs.microsoft.com/en-us/aspnet/web-api/overview/formats-and-model-binding/json-and-xml-serialization#handling_circular_object_references

            var json = config.Formatters.JsonFormatter;
            json.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
            // TODO: TEST IF THIS IS NECESSARY?
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            // Web API routes
            // TODO: REMOVE CORS IF UNNECESSARY (PROBABLY IS)
            config.EnableCors();
            config.MapHttpAttributeRoutes();

            

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
