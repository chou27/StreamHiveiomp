// import { StreamPlayer } from "@/components/stream-player";
// import { getUserByUsername } from "@/lib/user-service";
// import { currentUser } from "@clerk/nextjs/server";

// interface CreatorPageProps {
//     params: {
//         username: string;
//     };
// }

// const CreatorPage = async ({ params }: CreatorPageProps) => {
//     const externalUser = await currentUser();
//     const user = await getUserByUsername(params.username);

//     if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
//         throw new Error("Unauthorized");
//     }

//     return (
//         <div className="h-full">
//             <StreamPlayer 
//                 user={user}
//                 stream={user.stream}
//                 isFollowing
//             />
//         </div>
//     );
// }

// export default CreatorPage;



// import { StreamPlayer } from "@/components/stream-player";
// import { getUserByUsername } from "@/lib/user-service";
// import { currentUser } from "@clerk/nextjs/server";

// interface CreatorPageProps {
//     params: {
//         username: string;
//     };
// };


// const CreatorPage = async ({
//     params,
// } : CreatorPageProps) => {
//     const externalUser = await currentUser();
//     const user = await getUserByUsername(params.username);

//     if(!user || user.externalUserId !== externalUser?.id || !user.stream) {
//         throw new Error("Unauthorized");
//     }

//     return( 
//         <div className="h-full">
//             <StreamPlayer 
//              user = {user}
//              stream = {user.stream}
//              isFollowing
//             />
//         </div>
//     );
// }

// export default CreatorPage;

import { StreamPlayer } from "@/components/stream-player";
import { getUserByUsername } from "@/lib/user-service";
import { currentUser } from "@clerk/nextjs/server";

interface CreatorPageProps {
    params: {
        username: string;
    };
};

const CreatorPage = async ({
    params,
}: CreatorPageProps) => {
    // Await the params to ensure it's resolved
    const { username } = await params;

    const externalUser = await currentUser();
    const user = await getUserByUsername(username);

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
