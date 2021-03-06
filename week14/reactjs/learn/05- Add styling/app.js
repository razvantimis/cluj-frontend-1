// 5. Styling
// sa afisam 3 posturi 

function PostComponent(props) {
  return (
    <div className="single-post">
      <h1>{props.title}</h1>
      <p style={{
        backgroundColor: 'green',
        fontSize: '10px'
      }}>{props.content}</p>
    </div>
  )
}

function PostList() {
  return (
    <div>
      <h2>Lista posturi</h2>
      <PostComponent title={'Post 1'} content={'Post Content 1'} abc={1} />
      <PostComponent title={'Post 2'} content={'Post Content 2'} />
      <PostComponent title={'Post 3'} content={'Post Content 3'} />
    </div>
  )
}

function App() {

  return (
    <div>
      <PostList />
    </div>
  )
}


const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM) 