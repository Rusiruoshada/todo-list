const Home = () => {
    return ( 
        <div className="container">
                <h1 className="heading">todo-list</h1>
            <form action="#" >
                <input type="text" placeholder= "Add items" />
                <button type='submit'>Add</button>
            </form>
            <div>
                <ul></ul>
            </div>
        </div>
     );
}
 
export default Home;