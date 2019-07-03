
using Nancy;

namespace School
{
    public class SampleModule : Nancy.NancyModule
    {
        public SampleModule()
        {
             Get["/nancy/demo"] = _ => "Hello World!";
            //Get["/nancy/demo"] = parameters => new string[] { "Hello", "World" };
        }
    }
}