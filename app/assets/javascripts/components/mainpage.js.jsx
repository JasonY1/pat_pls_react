var MainPage = React.createClass({
  
  render: function() {
    return (
      <div className='navbar' id='nav-id' role='navigation'>
        <div className='container'>
          <div className='navbar-header' style={{textAlign: 'center'}}>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='.navbar-collapse'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <div className='navbar-brand'>
              <img src='https://unsplash.it/200/200/?blur'></img>
            </div>
          </div>
          
          <div className='collapse navbar-collapse navbutton'>
            <ul className='nav navbar-nav pull-left leftnav'>
              <li><a href='http://localhost:3000/connect'>Connect</a></li>
              <li><a href='http://localhost:3000/menu'>Menu</a></li>
            </ul>
            <ul className='nav navbar-nav pull-right rightnav'>
              <li><a href='http://localhost:3000/drinks'>Drinks</a></li>
              <li><a href='http://localhost:3000/connect'>About</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

var reactComponentJSX = React.render(
  <MainPage />,
  document.getElementById('mainpage')
);
  
  {/*var home = React.createElement('a', {href: 'https://localhost:3000/'}, 'Hello!')
  var about = React.createElement('a', {href: 'https://localhost:3000/about'}, 'Hello!')
  var menu = React.createElement('a', {href: 'https://localhost:3000/menu'}, 'Hello!')
  var connect = React.createElement('a', {href: 'localhost:3000/connect'}, 'Hello!')
  

*/}
