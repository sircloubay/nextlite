export async function getServerSideProps(context) {
  const param = context.params;
  const res =  await fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=c52c61fffc096fd851dd26718d082f8e&language=en-US`)
  let movie = await res.json()

  return {
    props: {
      movie
    },
  };
}

const Detail = ({movie}) => {
  return (
    <div className="container detail-movie">
      <div className="row">
        <div className="col-lg-3">
          <div className="thumbnail">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          </div>
        </div>

        <div className="col-lg-7">
          <div className="detail-movie-show">
              <h2 className="title-detail-movie">{movie.original_title}</h2>
              <span>{movie.release_date}</span>
              <p style={{marginTop:'10px'}}>{movie.overview}</p>
          </div>
        </div>

        <div className="col-lg-2">
           <div className="button-buy"> Watch Now</div>
        </div>
      </div>
    </div>
  );
}
 
export default Detail;