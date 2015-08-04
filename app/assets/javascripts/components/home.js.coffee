@Home = React.createClass
  render: ->
    React.DOM.div
      className: 'container'
      React.DOM.div
        className: 'splashbanner'
        React.DOM.div
          className: 'col-md-4 col-sm-6'
          React.DOM.img
            className: 'img-rounded img-responsive center-block'
            src: 'https://unsplash.it/300x300/?blur'
            
React.render(<Home/>, document.getElementById(