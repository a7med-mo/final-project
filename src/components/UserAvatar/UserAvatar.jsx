/* eslint-disable react/prop-types */
import Avatar from 'react-avatar';

export default function UserAvatar({ name }) {
    return (
        <Avatar
            name={name}
            size="23"
            round={true}
            className="user-avatar"
        />
    );
}


