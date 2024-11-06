import { StreamPlayer } from "@/components/stream-player";
import { getUserByUsername } from "@/lib/user-service";
import { currentUser } from "@clerk/nextjs/server";

type CreatorPageProps = {
    params: {
        username: string;
    };
};

const CreatorPage = async ({ params }: CreatorPageProps) => {
    // Destructure username from params
    const { username } = params;

    // Get the current user and the user by username
    const externalUser = await currentUser();
    const user = await getUserByUsername(username);

    // Check for authorization
    if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
        throw new Error("Unauthorized");
    }

    return (
        <div className="h-full">
            <StreamPlayer 
                user={user}
                stream={user.stream}
                isFollowing
            />
        </div>
    );
}

export default CreatorPage;
