import { Box, Card, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCreatorHistory } from "../../redux/user/userProfile/userProfile.actions";
import ActivityCard from "../activityCard";
import { Skeleton as MuiSkeleton } from "@material-ui/lab";
import NftMainCard from "../nftMainCard";
import useStyles from "./useStyles";

export const InWalletArts = ({ arts, loading }) => {
  const classes = useStyles();

  if (!arts.length && !loading) {
    return (
      <Typography
        style={{
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No Arts To Show!
      </Typography>
    );
  }
  return (
    <div className={classes.createdSec}>
      {arts &&
        arts.map(
          (
            {
              art_name,
              art_img,
              owner_name,
              tokenId,
              owner_walletAddress,
              isAuction,
              isFixedprice,
              listingType,
              creator_name,
              id,
              chain,
            },
            i
          ) => {
            return (
              <NftMainCard
                key={i}
                id={id}
                image={art_img}
                art_name={art_name}
                creator_name={creator_name}
                owner_name={owner_name}
                tokenId={tokenId}
                owner_walletAddress={owner_walletAddress}
                isOnProfilePage
                isAuction={isAuction}
                isFixedprice={isFixedprice}
                listingType={listingType}
                chain={chain}
              />
            );
          }
        )}

      {loading &&
        Array(8)
          .fill(1)
          ?.map((_, i) => <InWalletSkelton key={i} />)}
    </div>
  );
};

export const CreatorHistory = () => {
  const dispatch = useDispatch();
  const {
    userProfileData: { walletAddress },
    creatorHistory: { transactionHistory },
    isCreatorHistoryLoading,
  } = useSelector((state) => state.UserProfile);
  useEffect(() => {
    dispatch(getCreatorHistory(walletAddress));
  }, [dispatch, walletAddress]);
  return (
    <Box display={"grid"} justifyItems="center" pt={5}>
      <Box display={"grid"} gridGap={20}>
        {isCreatorHistoryLoading &&
          Array(4)
            .fill(1)
            ?.map((_, i) => <HistoryCardSkeleton key={i} />)}

        {isCreatorHistoryLoading ||
          transactionHistory.map((item) => {
            return <ActivityCard {...item} />;
          })}
      </Box>
    </Box>
  );
};
const HistoryCardSkeleton = () => {
  const classes = useStyles();

  return (
    <Card className={classes.skeletonCard}>
      <Box>
        <MuiSkeleton variant="circle" className={classes.skeletonImage} />
      </Box>
      <Box className={classes.skeletontextConent}>
        <MuiSkeleton height={60} width="100%" />
        <MuiSkeleton height={60} width="100%" />
      </Box>{" "}
    </Card>
  );
};
const InWalletSkelton = () => {
  return (
    <div style={{ width: "100%" }}>
      <Skeleton variant="rect" height="300px" animation="wave" />
      <Skeleton variant="text" animation="wave" />
      <Skeleton variant="text" animation="wave" />
    </div>
  );
};
