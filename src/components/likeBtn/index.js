import React, { useState } from "react";

import HeartLineIcon from "remixicon-react/HeartLineIcon";
import HeartFillIcon from "remixicon-react/HeartFillIcon";
import { Badge, makeStyles } from "@material-ui/core";
export default function LikeBtn() {
  const [isLiked, setLiked] = useState(false);
  const [count, setCount] = useState(3);
  const classes = useStyle();

  const handleLiked = () => {
    setLiked(!isLiked);
    if (isLiked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <Badge badgeContent={count} color="secondary" className={classes.likeBadge}>
      {isLiked ? (
        <HeartFillIcon isClick={isLiked} onClick={handleLiked} />
      ) : (
        <HeartLineIcon isClick={isLiked} onClick={handleLiked} />
      )}
    </Badge>
  );
}

const useStyle = makeStyles(() => ({
  likeBadge: {
    "& svg": {
      color: "red",
    },
    "& .MuiBadge-anchorOriginTopRightRectangle": {
      backgroundColor: "transparent",
      color: "black",
    },
  },
}));
