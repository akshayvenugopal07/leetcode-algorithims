import "./App.css";

import Carousal from "./components/Carousal";

function App() {
  const PHOTOS = [
    {
      src: "https://picsum.photos/800/300?random=1",
      alt: "Random Image 1",
      timeout: 2500,
    },
    {
      src: "https://picsum.photos/800/300?random=2",
      alt: "Random Image 2",
      timeout: 4200,
    },
    {
      src: "https://picsum.photos/800/300?random=3",
      alt: "Random Image 3",
      timeout: 3800,
    },
    {
      src: "https://picsum.photos/800/300?random=4",
      alt: "Random Image 4",
      timeout: 2000,
    },
    {
      src: "https://picsum.photos/800/300?random=5",
      alt: "Random Image 5",
      timeout: 5000,
    },
    {
      src: "https://picsum.photos/800/300?random=6",
      alt: "Random Image 6",
      timeout: 3200,
    },
    {
      src: "https://picsum.photos/800/300?random=7",
      alt: "Random Image 7",
      timeout: 4500,
    },
    {
      src: "https://picsum.photos/800/300?random=8",
      alt: "Random Image 8",
      timeout: 2800,
    },
    {
      src: "https://picsum.photos/800/300?random=9",
      alt: "Random Image 9",
      timeout: 3500,
    },
    {
      src: "https://picsum.photos/800/300?random=10",
      alt: "Random Image 10",
      timeout: 4000,
    },
    {
      src: "https://picsum.photos/800/300?random=11",
      alt: "Random Image 11",
      timeout: 2200,
    }
  ];

  return (
    <>
      <Carousal images={PHOTOS} />
    </>
  );
}

export default App;
