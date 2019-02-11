const comet = {
    name: "siwon",
    age: 29,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => comet
    }
}

export default resolvers;