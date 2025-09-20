export default function MemoStreaming() {
  const categories = [
    {
      title: "Video",
      items: [
        { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { name: "Amazon Prime Video", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" },
        { name: "Max", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Max_logo.svg" },
        { name: "Disney+", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" },
        { name: "Apple TV", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_TV_logo.svg" },
        { name: "Crunchyroll", logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Crunchyroll_Logo.svg" },
        { name: "DirecTV GO + Win", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Directv_logo_2021.svg" },
        { name: "Paramount", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Paramount_Pictures_logo.svg" },
        { name: "ViX", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vix_logo.svg" },
        { name: "Pornhub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Pornhub-logo.svg" },
      ]
    },
    {
      title: "Música",
      items: [
        { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
        { name: "YouTube", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" },
      ]
    },
    {
      title: "Productividad & Creatividad",
      items: [
        { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" },
        { name: "CapCut", logo: "https://seeklogo.com/images/C/capcut-logo-6F9C2E67E6-seeklogo.com.png" },
        { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
      ]
    },
    {
      title: "Educación",
      items: [
        { name: "Duolingo", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Duolingo_logo_%282019%29.svg" },
      ]
    }
  ];

  const plans = [
    {
      name: "Básico",
      price: "$10.000/mes",
      features: [
        "1 plataforma a elegir",
        "Calidad HD (según servicio)",
        "Soporte por WhatsApp",
      ],
      cta: "Elegir Básico",
    },
    {
      name: "Full Streaming",
      price: "$20.000/mes",
      popular: true,
      features: [
        "Hasta 4 plataformas",
        "Calidad hasta 4K (según servicio)",
        "Perfiles personalizados",
        "Soporte 7/24",
      ],
      cta: "Elegir Full",
    },
    {
      name: "Combo Pro",
      price: "$30.000/mes",
      features: [
        "Full Streaming + IPTV",
        "Incluye ChatGPT Plus *",
        "Mantenimiento remoto mensual",
        "Asesoría tecnológica",
      ],
      note: "*Sujeto a disponibilidad y términos del proveedor",
      cta: "Elegir Combo",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="inline-block h-8 w-8 rounded-2xl bg-emerald-500" />
            <span className="font-bold text-xl tracking-wide">MEMOSTREAMING</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#servicios" className="hover:text-emerald-400">Servicios</a>
            <a href="#planes" className="hover:text-emerald-400">Planes</a>
            <a href="#soporte" className="hover:text-emerald-400">Soporte</a>
            <a href="#contacto" className="hover:text-emerald-400">Contacto</a>
          </nav>
          <a href="https://wa.me/573169141004" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600">WhatsApp</a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/20 via-gray-900 to-gray-950" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Todo tu entretenimiento y soporte tech en un solo lugar</h1>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg">
            Ofrecemos cuentas de las principales plataformas de streaming (incluyendo Max) y apps digitales,
            además de <span className="text-white font-semibold">soporte técnico</span> y <span className="text-white font-semibold">programación de computadores</span>.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#planes" className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 font-medium">Ver Planes</a>
            <a href="#contacto" className="px-6 py-3 rounded-2xl border border-gray-700 hover:border-gray-500">Hablar con un asesor</a>
          </div>
        </div>
      </section>

      {/* STREAMING GRID */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Plataformas disponibles</h2>
        {categories.map(cat => (
          <div key={cat.title} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {cat.items.map(s => (
                <div key={s.name} className="bg-gray-900 rounded-2xl p-4 border border-gray-800 hover:border-gray-700 flex flex-col items-center justify-center">
                  <img src={s.logo} alt={s.name} className="h-10 object-contain mb-3" />
                  <span className="text-sm text-gray-300">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* TECH SERVICES */}
      <section id="soporte" className="bg-gray-900/40">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Soporte técnico & programación</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 bg-gray-900 border border-gray-800">
              <h3 className="font-semibold text-lg">Mantenimiento & Optimización</h3>
              <p className="mt-2 text-gray-300">Limpieza, formateo, instalación de drivers, optimización de arranque, copias de seguridad.</p>
            </div>
            <div className="rounded-2xl p-6 bg-gray-900 border border-gray-800">
              <h3 className="font-semibold text-lg">Soporte Remoto 7/24</h3>
              <p className="mt-2 text-gray-300">Diagnóstico por escritorio remoto, solución de fallos en apps, correo, impresoras y red.</p>
            </div>
            <div className="rounded-2xl p-6 bg-gray-900 border border-gray-800">
              <h3 className="font-semibold text-lg">Programación de Computadores</h3>
              <p className="mt-2 text-gray-300">Automatizaciones, scripts a medida, instalación de software, asesoría en hardware.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="planes" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Planes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 border ${p.popular ? 'border-emerald-500 bg-gray-900' : 'border-gray-800 bg-gray-900/60'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.popular && <span className="text-xs px-2 py-1 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-600/40">Más popular</span>}
              </div>
              <p className="mt-3 text-3xl font-extrabold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 items-start">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {p.note && <p className="mt-3 text-xs text-gray-400">{p.note}</p>}
              <a href="#contacto" className="mt-6 inline-flex w-full justify-center px-4 py-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600">{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="bg-gray-900/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Listo para empezar?</h2>
          <p className="text-gray-300 mb-6">Escríbenos por WhatsApp o deja tus datos y te contactamos.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <form className="rounded-2xl p-6 bg-gray-900 border border-gray-800">
              <label className="block text-sm">Nombre</label>
              <input className="mt-1 w-full rounded-xl bg-gray-800 border border-gray-700 p-3" placeholder="Tu nombre" />
              <label className="block text-sm mt-4">Correo</label>
              <input className="mt-1 w-full rounded-xl bg-gray-800 border border-gray-700 p-3" placeholder="tunombre@correo.com" />
              <label className="block text-sm mt-4">Mensaje</label>
              <textarea className="mt-1 w-full rounded-xl bg-gray-800 border border-gray-700 p-3 h-28" placeholder="¿Qué servicio necesitas?" />
              <button type="button" className="mt-4 w-full rounded-2xl bg-emerald-500 hover:bg-emerald-600 p-3">Enviar</button>
              <p className="text-xs text-gray-500 mt-3">Este formulario es demostrativo. Conecta tu backend o servicio de formularios.</p>
            </form>
            <div className="rounded-2xl p-6 bg-gray-900 border border-gray-800">
              <h3 className="font-semibold">Atención inmediata</h3>
              <p className="mt-2 text-gray-300">WhatsApp: <a className="text-emerald-400 hover:underline" href="https://wa.me/573169141004" target="_blank" rel="noreferrer">+57 316 914 1004</a></p>
              <p className="text-gray-300">Correo: <a className="text-emerald-400 hover:underline" href="mailto:inge03chara@gmail.com">inge03chara@gmail.com</a></p>
              <p className="text-gray-300 mt-2">Pagos Nequi: <span className="text-emerald-400 font-semibold">300 838 6156</span></p>
              <div className="mt-6 text-sm text-gray-400">
                <p>Nota: el uso de cada plataforma está sujeto a los términos del proveedor. Respetamos políticas de uso justo y disponibilidad por región.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} MEMOSTREAMING. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#terminos" className="hover:text-gray-200">Términos</a>
            <a href="#privacidad" className="hover:text-gray-200">Privacidad</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
