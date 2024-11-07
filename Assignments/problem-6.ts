{

    //problem-6

    interface Profile {
        name: string,
        age: number,
        email: string
    }


    type UpdateProfile = Partial<Profile>
 
    const updateProfile = (profile:Profile,update:UpdateProfile) => {
        return {...profile,...update}
    }

    const myProfile:Profile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 29 }));
}