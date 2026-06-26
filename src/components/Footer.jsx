const footerData = [
   {
      title: "Quick Links",
      links: [
         { name: "Our Story", href: "#" },
         { name: "Newsroom", href: "#" },
      ],
   },
];

function Footer() {
   return (
      <footer className="bg-white pt-16 pb-8 px-4 md:px-8 text-center">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-8">
               {footerData.map((section) => (
                  <div key={section.title}>
                     <h3 className="text-slate-900 font-semibold text-sm mb-6">
                        {section.title}
                     </h3>
                     <ul className="space-y-4 text-slate-600 text-sm font-normal">
                        {section.links.map((link) => (
                           <li key={link.name}>
                              <a
                                 href={link.href}
                                 className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                              >
                                 {link.name}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            <hr className="border-slate-300 my-8" />

            <div className="text-left">
               <p className="text-slate-600 text-sm">
                  © Task Tracker. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}

export default Footer;