export const getFullName = (user) => {
    if (!user) return "Guest";
    
    const first = user.firstName?.trim() || "";
    const last = user.lastName?.trim() || "";
                            
    return `${first} ${last}`.trim() || "User";
};                                