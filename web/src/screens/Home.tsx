import NewRide from "../components/NewRide"
import Welcome from "../components/Welcome"

function Home() {
  return (
    <main className="bg-emerald-500 h-screen flex items-center justify-center p-6">
      <div className="bg-welcome bg-contain bg-no-repeat bg-white/80 max-w-[800px] rounded-md bg-center">
        <div className="p-8 bg-white/40 flex flex-col gap-8">
          <Welcome />
          <NewRide />
        </div>
      </div>
    </main>
  )
}

export default Home
