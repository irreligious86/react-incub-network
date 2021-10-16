
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



let store = {

    _state: {
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
    },
    _callSubscriber () { console.log('rerender') },

    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if ( action.type === ADD_POST ) {
            let newPost = {
                id: 58,
                message: this._state.newPostText,
                likesCount: 0
            };
            this._state.profile.posts.push(newPost);
            this._state.newPostText = '';
            this._callSubscriber(this._state);
        } else if ( action.type === UPDATE_NEW_POST_TEXT ) {
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}



export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })


export default store;