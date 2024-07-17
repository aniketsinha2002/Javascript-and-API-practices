import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [idx, setIdx] = useState(0);
  const [loading, setLoading] = useState(false);

  //fetch images function
  const fetchImages = async () => {
    setLoading(false);
    const url = "https://www.reddit.com/r/aww/top/.json?t=all";
    const res = await fetch(url);
    const result = await res.json();
    const finalResult = result.data.children;
    const list = finalResult.filter((item) =>
      item.data.url_overridden_by_dest.includes(".jpg")
    );
    const imgList = list.map((item) => item.data.url_overridden_by_dest);

    //setting imageList in state var
    setImages(imgList);
    setLoading(true);
  };

  //one time API fetch when component renders
  useEffect(() => {
    fetchImages();
  }, []);

  //handling click
  const handleClick = (direction) => {
    console.log(direction, idx);
    const lastIdx = images.length - 1;
    if (direction === "left") {
      if (idx === 0) {
        setIdx(lastIdx);
      } else {
        setIdx((prevIdx) => prevIdx - 1);
      }
    } else {
      //right direction
      if (idx === lastIdx) {
        setIdx(0);
      } else {
        setIdx((prevIdx) => prevIdx + 1);
      }
    }
  };

  //handling animation
  useEffect(() => {
    // Create an interval that calls handleClick("left") every 2000 milliseconds (2 seconds)
    const tmp = setInterval(() => {
      handleClick("left");
    }, 2000);

    // Return a cleanup function that clears the interval when the component unmounts or dependencies change
    return () => {
      clearInterval(tmp);
    };
  }, [images, idx]);

  return (
    <div className="App">
      {loading ? (
        <>
          <button onClick={() => handleClick("left")}>{"<"}</button>
          <img src={images[idx]} alt="not found" />
          <button onClick={() => handleClick("right")} className="btn-right">
            {">"}
          </button>
        </>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
}

export default App;
