import Image from "next/image"
import Link from "next/link"

export const getServerSideProps = async () => {
    let data = null

    while(!data || data == null){
      let page_number = await Math.floor(Math.random()*1000+1)
      let page = await page_number.toString()
      const res =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c52c61fffc096fd851dd26718d082f8e&language=en-ID&page=${page}`)
      data = await res.json()
      data = data.results
    }
  
    return {
      props: {
        movies: data
      }
    }

}

const index = ({movies, page}) => {
  return (
    <div className="container section-movie">

      <div className="row">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="type movie title to search" />
          </div>
        </div>
      </div>

      <div className="row">
      {
        movies.map((movie) => (
          <div className="col-md-3" key={movie.id}>
            <div className="movie">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
              <div className="rating">{movie.vote_average}</div>
             <div className="button-watch">
              <Link href={`/movie/${movie.id}`}>
                <a className="detail">Watch Now</a>
              </Link>
             </div>
            </div>
          </div>
        ))
      }

      </div>
    </div>
  );
}
 
export default index;