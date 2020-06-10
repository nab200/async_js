const posts= [
    {title: 'post1', body:'this is post1'},
    {title: 'post2', body:'this is post2'}
]

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },2000);
}
function createPost(post, callbacks){
    setTimeout(()=>{
        posts.push(post);
        callbacks();// as soon as it is pushed getPost function is run and posts gets printed with the newly added post.
    },1000);//when the time of creating the post is greater than getting the post
}//then obvs we don't see the newly added post.
//as it is asynchronous so getting post takes 1s, but after calling getPost
//thread doesn't wait for it, it moves down to the next in queue, createPost,
//it calls createPost if it responds back before getPost responds then we get posts
//with the newly added post too.

//getPost();//we made it callback
createPost({title: 'post3', body: 'this is post3'}, getPost);//no parenthesis?

