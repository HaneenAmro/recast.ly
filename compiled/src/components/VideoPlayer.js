var VideoPlayer = ({ video }) => React.createElement(
  "div",
  { className: "video-player" },
  React.createElement(
    "div",
    { className: "embed-responsive embed-responsive-16by9" },
    React.createElement("iframe", { className: "embed-responsive-item", src: `https://www.youtube.com/embed/${video.id.videoId}`, allowFullScreen: true })
  ),
  React.createElement(
    "div",
    { className: "video-player-details" },
    React.createElement(
      "h3",
      null,
      video.snippet.title
    ),
    React.createElement(
      "div",
      null,
      video.snippet.description
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsInZpZGVvIiwiaWQiLCJ2aWRlb0lkIiwic25pcHBldCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxjQUFjLENBQUMsRUFBQ0MsS0FBRCxFQUFELEtBQ2hCO0FBQUE7QUFBQSxJQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUseUNBQWY7QUFDRSxvQ0FBUSxXQUFVLHVCQUFsQixFQUEwQyxLQUFNLGlDQUFnQ0EsTUFBTUMsRUFBTixDQUFTQyxPQUFRLEVBQWpHLEVBQW9HLHFCQUFwRztBQURGLEdBREY7QUFJRTtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUtGLFlBQU1HLE9BQU4sQ0FBY0M7QUFBbkIsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFNSixZQUFNRyxPQUFOLENBQWNFO0FBQXBCO0FBRkY7QUFKRixDQURGOztBQVlBO0FBQ0E7QUFDQU4sWUFBWU8sU0FBWixHQUF3QjtBQUN0Qk4sU0FBT08sVUFBVUMsTUFBVixDQUFpQkM7QUFERixDQUF4Qjs7QUFJQTtBQUNBO0FBQ0EsZUFBZVYsV0FBZiIsImZpbGUiOiJWaWRlb1BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBWaWRlb1BsYXllciA9ICh7dmlkZW99KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj5cbiAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZS1pdGVtXCIgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlby5pZC52aWRlb0lkfWB9IGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLXBsYXllci1kZXRhaWxzXCI+XG4gICAgICA8aDM+e3ZpZGVvLnNuaXBwZXQudGl0bGV9PC9oMz5cbiAgICAgIDxkaXY+e3ZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9QbGF5ZXIucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QbGF5ZXI7XG4iXX0=