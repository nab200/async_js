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
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
        },1000);

        const error=true;

        if(!error){
            resolve();
        }else{
            reject('error: something went wrong');
        }
    });
    
}
createPost({title: 'post3', body: 'this is post3'})
.then(getPost)
.catch(err=>console.log(err))
