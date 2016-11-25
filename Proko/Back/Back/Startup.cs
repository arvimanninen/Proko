using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Back.Startup))]
namespace Back
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
