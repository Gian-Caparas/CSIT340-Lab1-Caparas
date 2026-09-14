import './App.css'
 
function App() {
  return (
    <>
      <header className="max-w-2xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">Terence Emmanuel De Vera</h1>
        <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
        <hr className="mt-8 border-slate-200" />
      </header>
 
         <main className="max-w-2xl mx-auto px-6 py-10">
 
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-3">About</h2>
              <p className="leading-relaxed text-slate-700">
                I grew up in Mambaling Cebu City eversince I was a kid. I picked IT because I originally want to make games
                since I love to play games , and I have been slowly figuring out
                what part of that I enjoy most. So far it is the part where something finally runs.
              </p>
            </section>
 
               <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Details</h2>
      <p className="leading-relaxed text-slate-700">
        Course: BS Information Technology
       </p>
      <p className="leading-relaxed text-slate-700">
         
        Year level: Third year
        </p>
        <p className="leading-relaxed text-slate-700">
        Hometown: Mambaling, Cebu City, Cebu
      </p>
    </section>    
    <section className="mb-10">
     <h2 className="text-xl font-semibold mb-3">Things I like</h2>
     <ul className="list-disc list-inside space-y-1 text-slate-700">
        <li>Playing volleyball on freetime</li>
        <li>Playing Video games</li>
        <li>Chocolate and Oreo Cravings</li>
      </ul>
    </section>
 
    <section>
      <h2 className="text-xl font-semibold mb-3">Reach me</h2>
      <p className="leading-relaxed text-slate-700">
        terenceemmanuel.devera@cit.edu
        </p>
        <p className="leading-relaxed text-slate-700">
        @notdevz on ig
      </p>
    </section>
 
    </main>
   
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <hr className="mb-6 border-slate-200" />
        <p className="text-sm text-slate-500">Made for CSIT340.</p>
      </section>
    </>
  )
}
 
export default App
 