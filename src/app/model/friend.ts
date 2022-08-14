interface NewFriend {
    name: string
}

interface Friend {
    id: string
    name: string
}

interface Friends {
    friends: Friend[]
}

export { NewFriend, Friend, Friends }