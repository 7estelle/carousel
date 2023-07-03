import Carousel from "./components/Carousel.jsx";

const Images = [
  {
    src: "https://picsum.photos/id/1/400/300",
    alt: "Writing on a computer"
  },
  {
    src: "https://picsum.photos/id/2/400/300",
    alt: "A computer and a coffee"
  },
  {
    src: "https://picsum.photos/id/3/400/300",
    alt: "Handing a phone"
  }
];

function App() {
  return (
    <>
    <h1>Carousel</h1>
    <Carousel slides={Images} />
    </>
  )
}

export default App
