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
              type="checkbox"
              className="mr-5 h-0 before:absolute before:top-2 before:w-6 before:h-6 before:border before:border-divider before:rounded-full"
              disabled
            />
            <input
              type="text"
              placeholder="Create a new todo..."
              className="w-full py-2 focus:outline-none"
            />
          </form>
        </div>

        <div className="bg-white rounded-md shadow-lg px-5 py-2 mt-8">
          <form className="flex items-center py-2 relative">
            <input
              id="item1"
              type="checkbox"
              className="todo_checkbox mr-5 h-0 cursor-pointer checked:before:content-tick checked:before:bg-check-bg before:absolute before:top-2 before:flex before:items-center before:justify-center before:w-6 before:h-6 before:border before:border-divider before:rounded-full"
            />
            <label htmlFor="item1" className="cursor-pointer">This is demo todo item.</label>
          </form>
        </div>

      </section>

    </main>
  )
}

export default Home