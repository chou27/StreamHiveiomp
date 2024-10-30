"use server";

import { revalidatePath } from "next/cache";
import { followUser, unfollowUser } from "@/lib/follow-service";

export const onFollow = async (id: string) => {
    try {
        const followedUser = await followUser(id);

        // Revalidate the home path
        revalidatePath("/");

        // Revalidate the followed user's path if they exist
        if (followedUser) {
            revalidatePath(`/${followedUser.following.username}`);
        }

        return followedUser;
    } catch (error) {
        console.error("Error in onFollow:", error); // Log the original error
        throw new Error("Internal Error"); // You can also rethrow with the original message if needed
    }
};


export const onUnfollow = async( id: string) => {
    try{
        const unfollowedUser = await unfollowUser(id);

        revalidatePath("/");

        if(unfollowedUser) {
            revalidatePath(`/${unfollowedUser.following.username}`)
        }

        return unfollowedUser;
    }catch(error) {
        throw new Error("Internal Error")
    }
}