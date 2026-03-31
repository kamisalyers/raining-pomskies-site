export default function Home() {
  const puppies = [
    {
      name: "Luna",
      gender: "Female",
      eyes: "Blue",
      coat: "Wooly",
      size: "Mini",
      ready: "June 20th",
      status: "Available",
      price: "$3,500",
    },
    {
      name: "Storm",
      gender: "Male",
      eyes: "Blue",
      coat: "Plush",
      size: "Toy",
      ready: "June 28th",
      status: "Reserved",
      price: "$4,000",
    },
    {
      name: "Skye",
      gender: "Female",
      eyes: "Blue",
      coat: "Wooly",
      size: "Standard",
      ready: "July 5th",
      status: "Available",
      price: "$3,200",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-200">
            Raining Pomskies
          </p>
          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Quality Pomsky Puppies Raised in the Heart of Oklahoma
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Embark tested Pomskies in Toy, Mini, and Standard sizes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950">
              View Available Puppies
            </button>
            <button className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white">
              Join the Waitlist
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Available Puppies</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {puppies.map((puppy) => (
            <div
              key={puppy.name}
              className="rounded-3xl border border-white/10 bg-slate-900 p-6"
            >
              <div className="mb-5 h-56 rounded-2xl bg-slate-800" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{puppy.name}</h3>
                  <p className="text-slate-400">{puppy.gender}</p>
                </div>
                <span className="rounded-full bg-blue-400/15 px-3 py-1 text-sm text-blue-200">
                  {puppy.status}
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-200">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Eyes</span>
                  <span>{puppy.eyes}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Coat</span>
                  <span>{puppy.coat}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Size</span>
                  <span>{puppy.size}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Ready</span>
                  <span>{puppy.ready}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price</span>
                  <span>{puppy.price}</span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-800 px-4 py-3 text-sm text-slate-200">
                ✔ Embark Tested
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Why Families Choose Us</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Health Focus</h3>
              <p className="mt-3 text-slate-300">
                Embark testing, thoughtful pairings, and transparent puppy info.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Size Options</h3>
              <p className="mt-3 text-slate-300">
                Toy, Mini, and Standard Pomskies with clear expectations.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Oklahoma Raised</h3>
              <p className="mt-3 text-slate-300">
                Quality Pomsky puppies raised in the heart of Oklahoma.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
