using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace FormCustomItem {

    public class DevExtremeBundleConfig {

        public static void RegisterBundles(BundleCollection bundles) {

            var styleBundle = new StyleBundle("~/Content/DevExtremeBundle");
            var scriptBundle = new ScriptBundle("~/Scripts/DevExtremeBundle");

            // Uncomment to use the Diagram control
            //styleBundle.Include("~/Content/dx-diagram.css");

            styleBundle.Include("~/Content/dx.common.css");

            // Predefined themes: https://js.devexpress.com/DevExtreme/Guide/Themes_and_Styles/Predefined_Themes/
            styleBundle.Include("~/Content/dx.light.css");

            // Uncomment to use the Diagram control
            //scriptBundle.Include("~/Scripts/dx-diagram.js");

            // NOTE: jQuery may already be included in the default script bundle. Check the BundleConfig.cs file.
            //scriptBundle.Include("~/Scripts/jquery-3.4.1.js");

            scriptBundle.Include("~/Scripts/cldr.js");
            scriptBundle.Include("~/Scripts/cldr/event.js");
            scriptBundle.Include("~/Scripts/cldr/supplemental.js");
            scriptBundle.Include("~/Scripts/cldr/unresolved.js");

            scriptBundle.Include("~/Scripts/globalize.js");
            scriptBundle.Include("~/Scripts/globalize/message.js");
            scriptBundle.Include("~/Scripts/globalize/number.js");
            scriptBundle.Include("~/Scripts/globalize/currency.js");
            scriptBundle.Include("~/Scripts/globalize/date.js");

            // Uncomment to enable client-side export
            //scriptBundle.Include("~/Scripts/jszip.js");

            scriptBundle.Include("~/Scripts/dx.all.js");

            // Uncomment to provide geo-data for the VectorMap control
            // Docs: https://js.devexpress.com/DevExtreme/Guide/Widgets/VectorMap/Providing_Data/#Data_for_Areas
            //scriptBundle.Include("~/Scripts/vectormap-data/world.js");

            scriptBundle.Include("~/Scripts/aspnet/dx.aspnet.mvc.js");
            scriptBundle.Include("~/Scripts/aspnet/dx.aspnet.data.js");

            bundles.Add(styleBundle);
            bundles.Add(scriptBundle);

#if !DEBUG
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}