import React, { useCallback, useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { MuiTabs, Wrapper } from "./filtered-news.styles";
import FilteredNewsItems from "./filtered-news-items";
import { useDispatch, useSelector } from "react-redux";
import { getFilterBarData } from "./../../store/reducer-and-action/language/language";
import {
  fetchNews,
  getNewsData,
  getNewsStatus,
} from "./../../store/reducer-and-action/news/newsSlice";
import Pagination from "./pagination/pagination";
import Loader from "components/common/loader/loader";
import { useLocation, useNavigate } from "react-router-dom";

export default function FilteredNews() {
  const news = useSelector(getNewsData);
  const filterBar = useSelector(getFilterBarData);
  const pending = useSelector(getNewsStatus);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [activeFiterTab, setActiveFilterTab] = useState(filterBar[0].route);

  const navigate = useNavigate();
  const handleChange = useCallback(
    (filter) => {
      setActiveFilterTab(filter);
      dispatch(fetchNews(filter));
      navigate(`/news/${filter}`);
    },
    [dispatch, navigate]
  );
  useEffect(() => {
    const filter = pathname.split("/").pop();
    if (filterBar.some((item) => item.route === filter)) handleChange(filter);
    // if (filter === "news") handleChange("all");
  }, [dispatch, filterBar, handleChange, pathname]);
  return (
    <Wrapper>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <MuiTabs value={activeFiterTab}>
            {filterBar.map(({ title, route }) => (
              <Tab
                key={route}
                label={title}
                onClick={() => handleChange(route)}
                value={route}
              />
            ))}
          </MuiTabs>
        </Box>
        {pending ? <Loader /> : <FilteredNewsItems news={news} />}
      </Box>
      <Pagination />
    </Wrapper>
  );
}
