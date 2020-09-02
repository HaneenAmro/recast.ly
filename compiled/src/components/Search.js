

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange() {
    this.props.handleSearch(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return React.createElement(
      "div",
      { className: "search-bar form-inline" },
      React.createElement("input", { value: this.state.value, onChange: this.handleChange.bind(this), className: "form-control", type: "text" }),
      React.createElement(
        "button",
        { className: "btn hidden-sm-down" },
        React.createElement("span", { className: "glyphicon glyphicon-search" })
      )
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVNlYXJjaCIsImUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInJlbmRlciIsImJpbmQiXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsTUFBTUMsU0FBM0IsQ0FBcUM7QUFDbkNDLGNBQWFDLEtBQWIsRUFBb0I7QUFDbEIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUdEOztBQUVEQyxpQkFBZ0I7QUFDZCxTQUFLSCxLQUFMLENBQVdJLFlBQVgsQ0FBd0JDLEVBQUVDLE1BQUYsQ0FBU0osS0FBakM7QUFDQSxTQUFLSyxRQUFMLENBQWM7QUFDWkwsYUFBT0csRUFBRUMsTUFBRixDQUFTSjtBQURKLEtBQWQ7QUFHRDs7QUFJRE0sV0FBVTtBQUNSLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx3QkFBZjtBQUNFLHFDQUFPLE9BQU8sS0FBS1AsS0FBTCxDQUFXQyxLQUF6QixFQUFnQyxVQUFVLEtBQUtDLFlBQUwsQ0FBa0JNLElBQWxCLENBQXVCLElBQXZCLENBQTFDLEVBQXdFLFdBQVUsY0FBbEYsRUFBaUcsTUFBSyxNQUF0RyxHQURGO0FBRUU7QUFBQTtBQUFBLFVBQVEsV0FBVSxvQkFBbEI7QUFDRSxzQ0FBTSxXQUFVLDRCQUFoQjtBQURGO0FBRkYsS0FERjtBQVFEO0FBMUJrQzs7QUE2QnJDO0FBQ0E7QUFDQSxlQUFlYixNQUFmIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlICgpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG5cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXX0=