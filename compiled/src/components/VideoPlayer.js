var VideoPlayer = props => React.createElement(
  "div",
  { className: "video-player" },
  React.createElement(
    "div",
    { className: "embed-responsive embed-responsive-16by9" },
    React.createElement("iframe", { className: "embed-responsive-item", src: `https://www.youtube.com/embed/${props.video.id.videoId}`, allowFullScreen: true })
  ),
  React.createElement(
    "div",
    { className: "video-player-details" },
    React.createElement(
      "h3",
      null,
      props.video.snippet.title
    ),
    React.createElement(
      "div",
      null,
      props.video.snippet.description
    )
  )
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsInByb3BzIiwidmlkZW8iLCJpZCIsInZpZGVvSWQiLCJzbmlwcGV0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGNBQWVDLEtBQUQsSUFDaEI7QUFBQTtBQUFBLElBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSx5Q0FBZjtBQUNFLG9DQUFRLFdBQVUsdUJBQWxCLEVBQTBDLEtBQU0saUNBQWdDQSxNQUFNQyxLQUFOLENBQVlDLEVBQVosQ0FBZUMsT0FBUSxFQUF2RyxFQUEwRyxxQkFBMUc7QUFERixHQURGO0FBSUU7QUFBQTtBQUFBLE1BQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLSCxZQUFNQyxLQUFOLENBQVlHLE9BQVosQ0FBb0JDO0FBQXpCLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBTUwsWUFBTUMsS0FBTixDQUFZRyxPQUFaLENBQW9CRTtBQUExQjtBQUZGO0FBSkYsQ0FERjs7QUFZQTtBQUNBO0FBQ0FQLFlBQVlRLFNBQVosR0FBd0I7QUFDdEJOLFNBQU9PLFVBQVVDLE1BQVYsQ0FBaUJDO0FBREYsQ0FBeEI7O0FBSUE7QUFDQTtBQUNBLGVBQWVYLFdBQWYiLCJmaWxlIjoiVmlkZW9QbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVmlkZW9QbGF5ZXIgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Byb3BzLnZpZGVvLmlkLnZpZGVvSWR9YH0gYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyLWRldGFpbHNcIj5cbiAgICAgIDxoMz57cHJvcHMudmlkZW8uc25pcHBldC50aXRsZX08L2gzPlxuICAgICAgPGRpdj57cHJvcHMudmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5WaWRlb1BsYXllci5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBWaWRlb1BsYXllcjtcbiJdfQ==