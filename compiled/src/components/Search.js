import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.props.handleSearch(e.target.value);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'search-bar form-inline' },
      React.createElement('input', { value: this.state.value, className: 'form-control', type: 'text' }),
      React.createElement(
        'button',
        { className: 'btn hidden-sm-down', onClick: () => this.props.handleSearch(this.state.value) },
        React.createElement('span', { className: 'glyphicon glyphicon-search' })
      )
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJTZWFyY2giLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaGFuZGxlU2VhcmNoIiwiZSIsInRhcmdldCIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjs7QUFFQSxNQUFNQyxNQUFOLFNBQXFCRCxNQUFNRSxTQUEzQixDQUFxQztBQUNuQ0MsY0FBYUMsS0FBYixFQUFvQjtBQUNsQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBR0Q7O0FBRURDLGVBQWNDLEtBQWQsRUFBcUI7QUFDbkIsU0FBS0osS0FBTCxDQUFXSyxZQUFYLENBQXdCQyxFQUFFQyxNQUFGLENBQVNMLEtBQWpDO0FBRUQ7O0FBRURNLFdBQVU7QUFDUixXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsd0JBQWY7QUFDRSxxQ0FBTyxPQUFPLEtBQUtQLEtBQUwsQ0FBV0MsS0FBekIsRUFBZ0MsV0FBVSxjQUExQyxFQUF5RCxNQUFLLE1BQTlELEdBREY7QUFFRTtBQUFBO0FBQUEsVUFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFXLE1BQUssS0FBS0YsS0FBTCxDQUFXSyxZQUFYLENBQXdCLEtBQUtKLEtBQUwsQ0FBV0MsS0FBbkMsQ0FBdkQ7QUFDRSxzQ0FBTSxXQUFVLDRCQUFoQjtBQURGO0FBRkYsS0FERjtBQVFEO0FBdEJrQzs7QUF5QnJDO0FBQ0E7QUFDQSxlQUFlTCxNQUFmIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgKGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCIgb25DbGljayA9IHsoKT0+IHRoaXMucHJvcHMuaGFuZGxlU2VhcmNoKHRoaXMuc3RhdGUudmFsdWUpfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXX0=