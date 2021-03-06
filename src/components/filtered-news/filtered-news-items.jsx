import React, { useEffect } from "react";
import { NewsItemWrapper, NewsInfo, NewsWrapper } from "./filtered-news.styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import NotFound from "components/not-found/not-found";
import { useSelector } from "react-redux";
import { getActiveFilter } from "store/reducer-and-action/news/newsSlice";
import EventIcon from "@mui/icons-material/Event";
import AOS from "aos";
import "aos/dist/aos.css";

const FilteredNewsItems = ({ news = [] }) => {
  const newsFilter = useSelector(getActiveFilter);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <NewsWrapper>
      {news.length ? (
        news.map((news) => (
          <div data-aos="fade-right">
            <Link to={`/news/${newsFilter}/${news.id}`} key={news.id}>
              <NewsItemWrapper role="tabpanel">
                <Grid
                  container
                  key={news.title}
                  columnSpacing={2}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <img src={news.images[0]} alt="" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <NewsInfo>
                      <h4>{news.title}</h4>
                      <p>{news.body}</p>
                      <h5>
                        <EventIcon /> {news.date}
                      </h5>
                    </NewsInfo>
                  </Grid>
                </Grid>
              </NewsItemWrapper>
            </Link>
          </div>
        ))
      ) : (
        <NotFound />
      )}
    </NewsWrapper>
  );
};

export default FilteredNewsItems;
