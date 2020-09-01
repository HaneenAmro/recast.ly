var VideoListEntry = props => {
  console.log("this.video: ", props.video);
  return React.createElement(
    "div",
    { className: "video-list-entry media" },
    React.createElement(
      "div",
      { className: "media-left media-middle" },
      React.createElement("img", { className: "media-object", src: props.video.snippet.thumbnails.default.url, alt: "" })
    ),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { onClick: () => props.handleClick(props.video), className: "video-list-entry-title" },
        props.video.snippet.title
      ),
      React.createElement(
        "div",
        { className: "video-list-entry-detail" },
        props.video.snippet.description
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInZpZGVvIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIiwiaGFuZGxlQ2xpY2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsaUJBQWtCQyxLQUFELElBQVc7QUFDOUJDLFVBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCRixNQUFNRyxLQUFsQztBQUNBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUseUJBQWY7QUFDRSxtQ0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS0gsTUFBTUcsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxVQUFwQixDQUErQkMsT0FBL0IsQ0FBdUNDLEdBQTFFLEVBQStFLEtBQUksRUFBbkY7QUFERixLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssU0FBUyxNQUFNUCxNQUFNUSxXQUFOLENBQWtCUixNQUFNRyxLQUF4QixDQUFwQixFQUFvRCxXQUFVLHdCQUE5RDtBQUF3RkgsY0FBTUcsS0FBTixDQUFZQyxPQUFaLENBQW9CSztBQUE1RyxPQURGO0FBRUU7QUFBQTtBQUFBLFVBQUssV0FBVSx5QkFBZjtBQUEwQ1QsY0FBTUcsS0FBTixDQUFZQyxPQUFaLENBQW9CTTtBQUE5RDtBQUZGO0FBSkYsR0FERjtBQVdELENBYkQ7O0FBZUE7QUFDQTtBQUNBWCxlQUFlWSxTQUFmLEdBQTJCO0FBQ3pCUixTQUFPUyxVQUFVQyxNQUFWLENBQWlCQztBQURDLENBQTNCOztBQUlBO0FBQ0E7QUFDQSxlQUFlZixjQUFmIiwiZmlsZSI6IlZpZGVvTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFZpZGVvTGlzdEVudHJ5ID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwidGhpcy52aWRlbzogXCIsIHByb3BzLnZpZGVvKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnkgbWVkaWFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIiBzcmM9e3Byb3BzLnZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybH0gYWx0PVwiXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQ2xpY2socHJvcHMudmlkZW8pfSBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5LXRpdGxlXCI+e3Byb3BzLnZpZGVvLnNuaXBwZXQudGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS1kZXRhaWxcIj57cHJvcHMudmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9MaXN0RW50cnkucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgVmlkZW9MaXN0RW50cnk7XG4iXX0=