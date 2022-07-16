import React, { useEffect, useState } from "react";
import ModelVideo from "~/components/modals/ModelVideo";
import {
  ContainerMovie,
  ColCard,
  CardImg,
  CardContent,
  LogoStart,
  CardPlay,
  CardBooking,
  LogoPlay,
  Booking,
  ContainerContent,
  Content,
  DescStart,
} from "./ItemMovieElement";
const ItemMovie = ({ movie }) => {
  let starts = [];
  const [showHover, setShowHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const loopStart = (length) => {
    for (let i = 0; i < length; i++) {
      starts.push(i);
    }
  };
  loopStart(movie.danhGia);
  useEffect(() => {
    setTimeout(() => {}, 200);
  }, [showHover]);
  const handleHover = () => {
    setShowHover(!showHover);
  };
  return (
    <>
      <ContainerMovie onMouseEnter={handleHover}>
        <ColCard onMouseLeave={handleHover}>
          <CardImg>
            <img src={movie.hinhAnh} alt={movie.name} />
            {showHover && (
              <>
                <CardPlay>
                  <LogoPlay onClick={() => setShowModal(!showModal)} />
                </CardPlay>
                <CardBooking>
                  <Booking to="movie-detail">Booking</Booking>
                </CardBooking>
              </>
            )}
          </CardImg>
          <CardContent>
            <ContainerContent>
              <DescStart>
                {movie.danhGia}.
                {starts.map((start, index) => (
                  <LogoStart key={index} />
                ))}
              </DescStart>
              <Content nameMovie={movie.tenPhim}>
                <p>{movie.tenPhim}</p>
              </Content>
            </ContainerContent>
          </CardContent>
        </ColCard>
      </ContainerMovie>
      {showModal && (
        <ModelVideo
          showModal={showModal}
          trailer={movie.trailer}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default ItemMovie;
