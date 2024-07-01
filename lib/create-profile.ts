import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";

export const initialProfile = async() => {

    const user = await currentUser();


    if(!user)
        return auth().redirectToSignIn();


    console.log(user.id)

    const profile = await db.profile.findUnique({
        where: {
            userId: user.id
        }
    });

    if(profile)
        return profile;

    const newProfile = await db.profile.create({
        data:{
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
        }
    })

    return newProfile
}
