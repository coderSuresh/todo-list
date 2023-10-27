import ListControls from "@/components/ListControls"
import ListItem from "@/components/ListItem"
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

        <div className="bg-card-bg rounded-md shadow-lg px-5 py-2 mt-8">
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

        <div className="bg-card-bg relative rounded-md shadow-lg py-2 mt-8">

          <ListItem id={'1'} content='This is demo one' />
          <ListItem id={'2'} content='This is demo two' />
          <ListItem id={'3'} content='This is demo three' />
          <ListItem id={'4'} content='This is demo four' />
          <ListItem id={'5'} content='This is demo five' />

          <ListControls />

        </div>

      </section>

    </main>
  )
}

export default Home