import Gradient from "../Grandient/Gradient";
import { Button, ProfilePic, RankingInfo } from "./style";

export default function UserCombo({ onpress, sourceImg, position }) {
  return (
    <Button
      onPress={() => {
        onpress();
      }}
    >
      <UserCombo>
        <ProfilePic source={sourceImg} />
        <RankingInfo>
          <Gradient styleCustom={{ borderRadius: 6 }}>
            <RankingInfo>{position}º</RankingInfo>
          </Gradient>
        </RankingInfo>
      </UserCombo>
    </Button>
  );
}
