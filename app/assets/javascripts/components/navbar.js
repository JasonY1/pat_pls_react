var Navbar = React.createClass({
  render: function() {
    return (
      <div className="navbar" id="nav-id" role="navigation">
        <div className="container">
          <div className="navbar-header" style="text-align: center">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          <div className="navbar-brand">
            <img src="https://unsplash.it/200/300/?blur", className= "img-responsive"></img>
          </div>
        </div>

        <div className="collapse navbar-collapse navbutton">
          <ul className="nav navbar-nav pull-left leftnav">
            <li>Connect</li>
            <li>Menu</li>
          </ul>
          <ul className="nav navbar-nav pull-right rightnav">
            <li>Drinks</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
    )
  }
});

