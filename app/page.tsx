import BackgroundImage from "@/components/BackgroundImage"
import DarkModeToggler from "@/components/DarkModeToggler"
import Form from "@/components/Form"
import ListControls from "@/components/ListControls"
import ListItem from "@/components/ListItem"
import ThemeProvider from "@/provider/ThemeProvider"

const Home = () => {
  return (
    <ThemeProvider>
      <main className="bg-bg h-screen">

        <BackgroundImage />

        <section className="container relative max-w-2xl mx-auto p-5">

          <div className="flex items-center justify-between sm:pt-16 pt-8">
            <h1 className="uppercase tracking-widest md:text-4xl text-2xl font-bold text-white">
              Todo
            </h1>

            <DarkModeToggler />

          </div>

          <div className="bg-card-bg rounded-md shadow-lg px-5 py-2 mt-8">
            <Form />
          </div>

          <div className="bg-card-bg relative rounded-md shadow-md py-2 mt-8 mb-10">

            <ListItem id={'1'} content='This is demo one' />
            <ListItem id={'2'} content='This is demo two' />
            <ListItem id={'3'} content='This is demo three' />
            <ListItem id={'4'} content='This is demo four' />
            <ListItem id={'5'} content='This is demo five' />

            <ListControls />

          </div>

        </section>

        <p className="text-grayish-text text-center md:mt-0 pb-10 mt-20">Drag and drop yo reorder list</p>

      </main>
    </ThemeProvider>
  )
}

export default Home