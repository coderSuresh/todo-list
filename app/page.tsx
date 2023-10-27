import Image from "next/image"

const Home = () => {
  return (
    <main className="bg-card-bg h-screen">
      <div
        className="fixed md:bg-desktop-light bg-mobile-light 
        bg-no-repeat bg-cover w-full 
        md:h-72 sm:h-52 h-40"
      />

      <section className="container relative max-w-lg mx-auto">

        <div className="flex items-center justify-between pt-16">
          <h1 className="uppercase tracking-widest md:text-4xl text-xl font-bold text-white">
            Todo
          </h1>

          <button>
            <Image src='/images/icon-sun.svg' width={30} height={30} alt='dark mode icon' />
          </button>

        </div>

        <div className="bg-white rounded-md shadow-lg px-5 py-2 mt-8">
          <form className="flex items-center relative">
            <input
              type="radio"
              className="mr-4 h-0 before:absolute before:top-2 before:w-5 before:h-5 before:border before:border-divider before:rounded-full"
              disabled
            />
            <input
              type="text"
              placeholder="Create a new todo..."
              className="w-full py-2 text-sm  focus:outline-none"
            />
          </form>
        </div>

      </section>

    </main>
  )
}

export default Home