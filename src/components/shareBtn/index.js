import React, { useState } from "react";

import ShareForwardLineIcon from "remixicon-react/ShareForwardLineIcon";
import ShareForwardFillIcon from "remixicon-react/ShareForwardFillIcon";
import { Badge, makeStyles } from "@material-ui/core";
export default function ShareBtn() {
  const [isShare, setShare] = useState(false);
  const [count, setCount] = useState(3);
  const classes = useStyle();

  const handleShare = () => {
    setShare(!isShare);
    setCount(count + 1);

    if (isShare) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <Badge badgeContent={count} color="secondary" className={classes.likeBadge}>
      {isShare ? (
        <ShareForwardFillIcon isClick={isShare} onClick={handleShare} />
      ) : (
        <ShareForwardLineIcon isClick={isShare} onClick={handleShare} />
      )}
    </Badge>
  );
}

const useStyle = makeStyles(() => ({
  likeBadge: {
    "& svg": {
      color: "black",
    },
    "& .MuiBadge-anchorOriginTopRightRectangle": {
      backgroundColor: "transparent",
      color: "black",
    },
  },
}));
