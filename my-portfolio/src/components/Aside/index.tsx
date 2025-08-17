import profile from '@/asset/profile.png'
import { Badge } from "../ui/badge";

function Aside() {
  return (
    <div>
      <div className="profile text-center">
        <div className="profile-pic">
            <div className="m-10 bg-(--border-color) rounded-3xl">
                <img src={profile} alt='Profile-Picture'/>
            </div>
        </div>
        <div className="text-xl">Swornim Bhattarai</div>
        <Badge variant="secondary">Software Engineer</Badge>
      </div>
    </div>
  );
}

export default Aside;
