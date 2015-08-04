@Categories = React.createClass
  getInitialState: ->
    categories: @props.data
  getDefaultProps: ->
    categories: []

  render: ->
    React.DOM.div
      className: 'container'
      React.DOM.h1
        className: 'col-xs-12'
        'CATEGORY NAME HERE'
        React.DOM.div
          className: 'col-sm-12 menuitem'
        
        