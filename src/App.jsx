import "./App.css";

function App() {
  return (
    <>
      <header className="max-w-2xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">Gian Joebert B. Caparas</h1>
        <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
        <hr className="mt-8 border-slate-200" />
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="leading-relaxed text-slate-700">
            I am 20 years old and I am currently a third year BSIT student at Cebu Institute of Technology - University. I am a person who is passionate aboout design and development. Currently, I am learning and exploring more about Data Analytics and at the same time I am also working as a freelance graphic designer of a small business in San Antonio US.

          </p>
        </section>
        <br />
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Details</h2>
          <p className="leading-relaxed text-slate-700">
            Course: BS Information Technology
            <br />
            Year level: Third year
            <br />
            Hometown: Minglanilla, Cebu
          </p>
        </section>
        <br />
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Things I like</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Playing volleyball</li>
            <li>Doing discipleship</li>
            <li>Reading and writing specially doing devotionals</li>
          </ul>
        </section>
        <br />
        <section>
          <h2 className="text-xl font-semibold mb-3">Reach me</h2>
          <p className="leading-relaxed text-slate-700">
            gianjoebert.caparas@cit.edu
            <br />
            @gianjoebert on most things
          </p>
        </section>

      </main>

      <section className="max-w-2xl mx-auto px-6 pb-16">
        <hr className="mb-6 border-slate-200" />
        <p className="text-sm text-slate-500">Made for CSIT340.</p>
      </section>
    </>

  );
}

export default App;