import ApolloClient from 'apollo-boost';
import { defaults, resolvers } from "./LocalState";
//apollo boost는 apollo client 를 시작하는 가장 쉬운 방법

export default new ApolloClient({
    uri: "http://localhost:4000",
    clientState: {
        defaults,
        resolvers
    }
});