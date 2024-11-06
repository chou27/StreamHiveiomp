import { StreamPlayer } from "@/components/stream-player";
import { isBlockedByUser } from "@/lib/block-service";
import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";

interface UserPageProps {
    params: Promise<{ username: string }>;
}

const UserPage = async (props: UserPageProps) => {
    
    const params = await props.params;

    const {
        username
    } = params;

    const user = await getUserByUsername(username);

    if (!user || !user.stream) {
        notFound(); // Redirect if no user or no stream
    }

    const isFollowing = await isFollowingUser(user.id);
    const isBlocked = await isBlockedByUser(user.id);

    if (isBlocked) {
        notFound(); // Redirect if the user is blocked
    }

    return (
        <StreamPlayer 
         user={user}
         stream={user.stream}
         isFollowing={isFollowing}
        />
    );
}

export default UserPage;
