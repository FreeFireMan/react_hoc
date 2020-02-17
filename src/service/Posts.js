
class PostsService  {

    baseUrl='https://jsonplaceholder.typicode.com';

    getPosts =()=> fetch(`${this.baseUrl}/posts`)
      .then(res=>res.json());
    getComments=()=>fetch(`${this.baseUrl}/comments`)
      .then(res=>res.json());
}
export default new PostsService()
