@Products = React.createClass
  getInitialState: ->
    products: @props.data
  getDefaultProps: ->
    categories: []
    
  render: ->
    React.DOM.div
      className: 'container'
      React.DOM.h1
        className: 'col-xs-12'
        'Products go here'
        