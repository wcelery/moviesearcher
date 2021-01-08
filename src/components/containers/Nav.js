import React from "react";
import { Link } from "react-router-dom";
import Badge from "@bit/mui-org.material-ui.badge";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import { ReactComponent as HeartSvg } from "../../assets/svg/heart.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/github.svg";

export default function Nav() {
  let badgeContent = useSelector((state) => state.favoriteStore.favorites);
  let size = Object.keys(badgeContent).length;
  return (
    <div className="nav">
      <h3>mvsrchr</h3>
      <div className="nav-links">
        <Link to="/favorites" className="favorites-btn">
          <Badge
            color="secondary"
            badgeContent={size}
            classes={{ badge: "badge-style" }}
          >
            <HeartSvg className="svg-filter-grey" />
          </Badge>
        </Link>
        <GithubSvg className="svg-filter-grey about-btn" data-tip="data-tip" />
        <ReactTooltip place="bottom" type="dark" effect="solid">
          <p>github: /wcelery</p>
          <p>created despite laziness and procrastination</p>
        </ReactTooltip>
      </div>
    </div>
  );
}
