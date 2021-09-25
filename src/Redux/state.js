let state = {
    profile: {
        posts: [
            {id: 1, message: "Hello! It is my post.", likesCount: 3},
            {id: 2, message: "Hello! It is my post.", likesCount: 3},
            {id: 3, message: "Hello! It is my post.", likesCount: 3},
            {id: 4, message: "Hello! It is my post.", likesCount: 3},
            {id: 5, message: "Hello! It is my post.", likesCount: 3},
        ]
    },
    messenger: {
        messages: [
            {id: 1, message: "Hello! IT is my message."},
            {id: 2, message: "Hello! IT is my message."},
            {id: 3, message: "Hello! IT is my message."},
            {id: 4, message: "Hello! IT is my message."},
            {id: 5, message: "Hello! IT is my message."},
        ],
        dialogs: [
            {name: 'Alex', id: 1},
            {name: 'Dimych', id: 2},
            {name: 'Jurij', id: 3},
            {name: 'John', id: 4},
            {name: 'jack', id: 5}
        ]
    },
    news: {},
    music: {},
    settings: {}
}

let addUser = userName => {
    state.users.push(userName)
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 58, message: postMessage, likesCount: 0
    };
    state.profile.posts.push(newPost);
}

export default state;