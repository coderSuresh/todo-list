import Image from "next/image"

const Home = () => {
  return (
    <main className="bg-card-bg h-screen">
      <div
        className="fixed md:bg-desktop-light bg-mobile-light 
        bg-no-repeat bg-cover w-full 
        md:h-72 h-60"
      />

      <section className="container relative max-w-lg mx-auto p-5">

        <div className="flex items-center justify-between sm:pt-16 pt-8">
          <h1 className="uppercase tracking-widest md:text-4xl text-2xl font-bold text-white">
            Todo
          </h1>

          <button>
            <Image src='/images/icon-sun.svg' width={30} height={30} alt='dark mode icon' />
          </button>

        </div>

        <div className="bg-white rounded-md shadow-lg px-5 py-2 mt-8">
          <form className="flex items-center relative">
            <div
              className="mr-2 w-6 h-6 aspect-square rounded-full border border-divider"
            />
            <input
              type="text"
              placeholder="Create a new todo..."
              className="w-full py-2 focus:outline-none"
            />
          </form>
        </div>

        {/* list */}

        <div className="bg-white rounded-md shadow-lg px-5 py-2 mt-8">

          <div className="todo_item flex items-center justify-between w-full group py-2 relative">
            <div>
              <input
                id="item1"
                type="checkbox"
                className="todo_checkbox h-0 cursor-pointer
                before:h-6 before:w-6 before:rounded-full
                before:border before:border-divider
                before:absolute before:top-1/2 before:-translate-y-1/2 mr-5
                before:checked:bg-check-bg before:checked:group-hover:border-divider
                before:checked:content-tick before:z-20
                group-hover:before:border-transparent group-hover:bg-transparent
                before:flex before:items-center before:justify-center
               "
              />

              <div
                className="z-10 absolute top-1/2 -translate-y-1/2 left-0 
                flex items-center justify-center
                before:hidden before:border
                bg-card-bg w-[23px] h-[23px] rounded-full
                before:border-transparent
                before:absolute before:h-[21px] before:w-[21px] before:z-20 before:bg-card-bg before:rounded-full
                group-hover:bg-check-bg group-hover:before:block
                "
              />

              <label htmlFor="item1" className="cursor-pointer">This is demo todo item.</label>
            </div>

            <button className="group-hover:block hidden" aria-label="delete todo item">
              <Image src='/images/icon-cross.svg' height={15} width={15} alt="" />
            </button>

          </div>

          <hr className="my-2" />

        </div>

      </section>

    </main>
  )
}

export default Home