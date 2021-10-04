// import {rerenderEntireTree} from "../index";

let state = {
    profile: {
        posts: [
            {id: 1, message: "Hello! It is my post.", likesCount: 3},
            {id: 2, message: "Hello! It is my post.", likesCount: 3},
            {id: 3, message: "Hello! It is my post.", likesCount: 3},
            {id: 4, message: "Hello! It is my post.", likesCount: 3},
            {id: 5, message: "Hello! It is my post.", likesCount: 3},
        ]
    } ,
    newPostText: "IT-camasutra.com",
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

window.state = state;

let rerenderEntireTree = () => {
    console.log('rerender');
}

const addUser = userName => {
    state.users.push(userName)
}

export const addPost = () => {
    let newPost = {
        id: 58,
        message: state.newPostText,
        likesCount: 0
    };
    state.profile.posts.push(newPost);
    updateNewPostText('');

}

export const updateNewPostText = newText => {
    state.newPostText = newText;
    rerenderEntireTree(state);
}

export let subscribe = observer => {
    rerenderEntireTree = observer;
}

export default state;