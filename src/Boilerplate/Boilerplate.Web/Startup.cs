using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Boilerplate.Web.Startup))]
namespace Boilerplate.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
