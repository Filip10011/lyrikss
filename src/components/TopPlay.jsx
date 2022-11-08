import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import PlayPause from "./PlayPause";
import { playPause, setACtiveSong } from "../redux/features/playerSlice";
import { useGetTopChartQuery } from "../redux/services/shazamCore";

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartQuery();
  const divRef = useRef(null);
};

export default TopPlay;
