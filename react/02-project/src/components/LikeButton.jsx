import React, { useState } from 'react'

function LikeButton () {
    const [likes, setLikes] = useState(0);

    return (
        <div>
            <p>Likes: {likes}</p>
            {likes >= 10 && <p>Trending! 🔥</p>}
            <button onClick={ () => setLikes(likes+1)}>Like</button>
            <button onClick={ () => setLikes(likes-1)}>Unlike</button>
        </div>
    )
}
export default LikeButton