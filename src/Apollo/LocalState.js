// Local State는 기본적으로 Client에 없는 state이다.
export const defaults = {
    isLoggedIn: Boolean(localStorage.getItem("token")) || false
};


// logUserIn 실행 -> token을 setItem -> writeData -> 
// data의 isLoggedIn이 true면 OK
export const resolvers = {
    Mutation: { 
        logUserIn: (_, { token }, { cache }) => {
            localStorage.setItem("token", token);
            cache.writeData({
                data: {
                    isLoggedIn: true
                }
            });
            return null;
        },
        logUserOut: (_, __, { cache }) => {
            localStorage.removeItem("token");
            window.location = "/";
            return null;
        }
    }
};