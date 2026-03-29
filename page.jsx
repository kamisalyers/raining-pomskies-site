export default function RainingPomskiesWebsite() {
  const availablePuppies = [
    {
      name: 'Luna',
      gender: 'Female',
      eyes: 'Blue',
      coat: 'Wooly',
      size: 'Mini',
      ready: 'June 20th',
      status: 'Available',
      price: '$3,500',
    },
    {
      name: 'Storm',
      gender: 'Male',
      eyes: 'Blue',
      coat: 'Plush',
      size: 'Toy',
      ready: 'June 28th',
      status: 'Reserved',
      price: '$4,000',
    },
    {
      name: 'Skye',
      gender: 'Female',
      eyes: 'Blue',
      coat: 'Wooly',
      size: 'Standard',
      ready: 'July 5th',
      status: 'Available',
      price: '$3,200',
    },
  ];

  const highlights = [
    'Quality Pomsky Puppies Raised in the Heart of Oklahoma',
    'Embark Tested',
    'Toy, Mini, and Standard Sizes',
    'Blue-Eyed, Wooly, and Plush Coats',
  ];

  const processSteps = [
    {
      title: 'Join the Waitlist',
      text: 'Reach out to learn about current and upcoming litters, availability, and puppy matching.',
    },
    {
      title: 'Choose Your Puppy',
      text: 'Review photos, puppy details, temperament notes, and size expectations before reserving.',
    },
    {
      title: 'Prepare for Pick Up',
      text: 'Get updates, ready dates, and next-step guidance so your puppy transition is smooth.',
    },
  ];

  const faqs = [
    {
      question: 'Are your puppies Embark tested?',
      answer:
        'Yes. Health transparency is a key part of the program, and Embark-tested lines are highlighted throughout the site.',
    },
    {
      question: 'What sizes do you offer?',
      answer:
        'Toy, Mini, and Standard Pomskies are featured, with size expectations included on each puppy card when available.',
    },
    {
      question: 'How do I reserve a puppy?',
      answer:
        'The site is designed to support a simple inquiry, application, and deposit flow for approved homes.',
    },
    {
      question: 'Can out-of-state buyers apply?',
      answer:
        'Yes. The layout supports local Oklahoma buyers as well as families traveling in from other states.',
    },
  ];

  const stats = [
    { label: 'Pomsky sizes', value: '3' },
    { label: 'Health focus', value: 'Embark' },
    { label: 'Location', value: 'Oklahoma' },
    { label: 'Style', value: 'Midnight' },
  ];

  const testimonials = [
    {
      name: 'Happy Pomsky Family',
      quote:
        'Our puppy is gorgeous, healthy, and so well-loved. The whole process felt professional and caring.',
    },
    {
      name: 'Oklahoma Buyer',
      quote:
        'Clear communication, beautiful puppies, and a breeder who truly cares about quality and temperament.',
    },
    {
      name: 'Repeat Buyer',
      quote:
        'The branding drew us in, but the puppy quality and honesty made us come back again.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_40%),linear-gradient(to_bottom,rgba(2,6,23,1),rgba(15,23,42,1))]">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.12)_1%,transparent_2%)] bg-[length:100%_18px]" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div className="relative z-10 flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-1 text-sm tracking-wide text-blue-100">
              Raining Pomskies
            </span>
            <h1 className="max-w-xl text-5xl font-semibold leading-tight md:text-6xl">
              Quality Pomsky Puppies Raised in the Heart of Oklahoma
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              A midnight-inspired breeder website with elegant presentation, realistic pomsky imagery, and clear puppy information built to feel trustworthy, premium, and warm.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 shadow-lg shadow-blue-500/20 transition hover:scale-[1.02]">
                View Available Puppies
              </button>
              <button className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10">
                Join the Waitlist
              </button>
            </div>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-4 self-center">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-blue-950/40 backdrop-blur">
              <div className="flex h-[380px] items-end justify-center rounded-[1.5rem] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 p-4">
                <div className="w-full rounded-[1.5rem] border border-blue-200/10 bg-[radial-gradient(circle_at_top,rgba(147,197,253,0.35),transparent_35%),linear-gradient(to_bottom,#0f172a,#020617)] p-6 text-center">
                  <div className="mx-auto mb-4 h-44 w-44 rounded-full border border-white/10 bg-slate-800 shadow-inner shadow-blue-300/10" />
                  <p className="text-xl font-semibold">Black & White Pomsky</p>
                  <p className="mt-2 text-sm text-slate-300">Blue eyes • realistic-soft style</p>
                </div>
              </div>
            </div>
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-blue-950/40 backdrop-blur">
              <div className="flex h-[380px] items-end justify-center rounded-[1.5rem] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 p-4">
                <div className="w-full rounded-[1.5rem] border border-orange-200/10 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.22),transparent_35%),linear-gradient(to_bottom,#1e293b,#020617)] p-6 text-center">
                  <div className="mx-auto mb-4 h-44 w-44 rounded-full border border-white/10 bg-slate-800 shadow-inner shadow-orange-300/10" />
                  <p className="text-xl font-semibold">Red & White Pomsky</p>
                  <p className="mt-2 text-sm text-slate-300">Blue eyes • plush, fox-like coat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">Available puppies</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Current and upcoming litters</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Replace these sample listings with your real puppies, photos, deposits, and ready dates.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {availablePuppies.map((puppy) => (
            <div key={puppy.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-xl shadow-slate-950/30 backdrop-blur">
              <div className="mb-5 h-56 rounded-[1.5rem] bg-gradient-to-b from-slate-800 to-slate-950" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{puppy.name}</h3>
                  <p className="text-slate-400">{puppy.gender}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-sm ${puppy.status === 'Available' ? 'bg-emerald-400/15 text-emerald-200' : 'bg-amber-400/15 text-amber-200'}`}>
                  {puppy.status}
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-3 text-sm">
                <span className="text-slate-300">Starting at</span>
                <span className="font-semibold text-white">{puppy.price}</span>
              </div>
              <div className="mt-5 space-y-3 text-sm text-slate-200">
                <div className="flex justify-between border-b border-white/10 pb-2"><span>Eyes</span><span>{puppy.eyes}</span></div>
                <div className="flex justify-between border-b border-white/10 pb-2"><span>Coat</span><span>{puppy.coat}</span></div>
                <div className="flex justify-between border-b border-white/10 pb-2"><span>Size</span><span>{puppy.size}</span></div>
                <div className="flex justify-between pb-1"><span>Ready</span><span>{puppy.ready}</span></div>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
                <span>Embark Tested</span>
                <span className="text-blue-200">✔</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-4 lg:px-10">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3 lg:px-10">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/15 text-lg font-semibold text-blue-100">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">About</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Raised with care, bred with intention</h2>
            <p className="mt-5 text-slate-300">
              Use this section to tell your story, explain your standards, describe temperament goals, and share what makes your program different. This layout is built for clear trust signals and easy reading.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-900/70 p-5">
                <p className="text-lg font-semibold">Health Focus</p>
                <p className="mt-2 text-sm text-slate-300">Embark testing, informed pairings, and transparent puppy details.</p>
              </div>
              <div className="rounded-2xl bg-slate-900/70 p-5">
                <p className="text-lg font-semibold">Size Options</p>
                <p className="mt-2 text-sm text-slate-300">Toy, Mini, and Standard pomskies with clear expectations.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))] p-8 shadow-xl shadow-blue-950/30">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">Testimonials</p>
            <div className="mt-5 space-y-4">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-slate-200">“{item.quote}”</p>
                  <p className="mt-3 text-sm text-blue-100">— {item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">Parents</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Meet the dogs behind the program</h2>
            <p className="mt-4 text-slate-300">
              Add your parent dogs, their photos, coat types, temperament notes, and testing highlights here. This section helps buyers connect with your program and understand the quality behind each litter.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
                <div className="mb-4 h-44 rounded-[1.25rem] bg-gradient-to-b from-slate-700 to-slate-950" />
                <p className="text-xl font-semibold">Sire Profile</p>
                <p className="mt-2 text-sm text-slate-300">Blue eyes • black & white • balanced structure</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
                <div className="mb-4 h-44 rounded-[1.25rem] bg-gradient-to-b from-slate-700 to-slate-950" />
                <p className="text-xl font-semibold">Dam Profile</p>
                <p className="mt-2 text-sm text-slate-300">Red & white • plush coat • sweet temperament</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))] p-8 shadow-xl shadow-blue-950/30">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Common questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-lg font-semibold text-white">{faq.question}</p>
                  <p className="mt-2 text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.25),transparent_35%),linear-gradient(to_bottom,#0f172a,#020617)] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Bring home your next best friend</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Add your Facebook page, Instagram, phone number, email, and deposit process here.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex justify-between border-b border-white/10 pb-3"><span>Facebook</span><span>@RainingPomskies</span></div>
                <div className="flex justify-between border-b border-white/10 pb-3"><span>Instagram</span><span>@RainingPomskies</span></div>
                <div className="flex justify-between border-b border-white/10 pb-3"><span>Email</span><span>hello@rainingpomskies.com</span></div>
                <div className="flex justify-between"><span>Location</span><span>Oklahoma</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
