import React, { useState } from 'react';
import moment from 'moment';
import Search from './Search';
import Result from './Result';

const SearchIndex = (props) => {
  const [page, setPage] = useState(1);
  const [KM, setKM] = useState(60);
  const [rate, setRate] = useState(18);
  const [volume, setVolume] = useState(2);
  const [rating, setRating] = useState(3);
  const [vehicles, setVehicles] = useState(new Set([4]));
  const [day, setDay] = useState(moment().format('YYYY-MM-DD'));
  const [from, setFrom] = useState(6);
  const [to, setTo] = useState(8);
  const [deliveries, setDeliveries] = useState(1);

  return (
    <>
      {page === 2 ? (
        <Result
          page={page}
          setPage={setPage}
          filters={{
            KM,
            rate,
            volume,
            rating,
            vehicles,
            day,
            from,
            to,
            deliveries,
          }}
          setKM={setKM}
          setRate={setRate}
          setVolume={setVolume}
          setRating={setRating}
          setVehicles={setVehicles}
          setDay={setDay}
          setFrom={setFrom}
          setTo={setTo}
          setDeliveries={setDeliveries}
        />
      ) : (
        <Search
          page={page}
          setPage={setPage}
          KM={KM}
          setKM={setKM}
          rate={rate}
          setRate={setRate}
          volume={volume}
          setVolume={setVolume}
          rating={rating}
          setRating={setRating}
          vehicles={vehicles}
          setVehicles={setVehicles}
          day={day}
          setDay={setDay}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
          deliveries={deliveries}
          setDeliveries={setDeliveries}
        />
      )}
    </>
  );
};

export default SearchIndex;
