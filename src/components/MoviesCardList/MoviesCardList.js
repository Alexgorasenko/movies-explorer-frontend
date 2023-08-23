import React, {useState, useEffect} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
const movies = [
  {
    _id: "1231232132131231",
    name: "Film 1",
    link: "https://www.ejin.ru/wp-content/uploads/2017/09/7-667.jpg",
    duration: "1,23",
    savedFavorite: true,
  },
  {
    _id: "1231232132131232",
    name: "Film 1",
    link: "https://www.ejin.ru/wp-content/uploads/2017/09/7-667.jpg",
    duration: "1,23",
    savedFavorite: true,
  },
  {
    _id: "1231232132131233",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "1231232132131234",
    name: "Film 1",
    link: "https://www.ejin.ru/wp-content/uploads/2017/09/7-667.jpg",
    duration: "1,23",
    savedFavorite: true,
  },
  {
    _id: "1231232132131235",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "1231232132131236",
    name: "Film 1",
    link: "https://www.ejin.ru/wp-content/uploads/2017/09/7-667.jpg",
    duration: "1,23",
    savedFavorite: true,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 1",
    link: "https://www.ejin.ru/wp-content/uploads/2017/09/7-667.jpg",
    duration: "1,23",
    savedFavorite: true,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
  {
    _id: "123123213213123",
    name: "Film 1",
    link: "https://www.ejin.ru/wp-content/uploads/2017/09/7-667.jpg",
    duration: "1,23",
    savedFavorite: true,
  },
  {
    _id: "123123213213123",
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
];

function MoviesCardList() {

  const [width, setWidth] = useState(window.innerWidth);
  const [moviesListLength, setmoviesListLength] = useState(12);


  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect (()=>{
    if(width > 1024){
      setmoviesListLength(12)
    }
    else if (width <=1024 && width >=601){
      setmoviesListLength(8)
    } else {
      setmoviesListLength(4)
    }
  },[width]);

  return (
    <section className="movies">
      <div className="movies__list">
        {movies.slice(0, moviesListLength).map((movie) => {
          return <MoviesCard key={movie._id} movie={movie} />;
        })}
      </div>
      <button className="movies__more-button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
