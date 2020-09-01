// import video data here
// refactor app to be a class
// store app state within app contructor
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
//console.log(videos);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      singleVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleSearch() {}
  // get request (searchYoutube)

  // pass method as props to videoListEntry
  handleClick(video) {
    this.setState({
      singleVideo: video
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'nav',
        { className: 'navbar' },
        React.createElement(
          'div',
          { className: 'col-md-6 offset-md-3' },
          React.createElement(Search, { handleSearch: this.handleSearch })
        )
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col-md-7' },
          React.createElement(VideoPlayer, { video: this.state.singleVideo })
        ),
        React.createElement(
          'div',
          { className: 'col-md-5' },
          React.createElement(VideoList, { handleClick: this.handleClick, videos: this.state.videoList })
        )
      )
    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvUGxheWVyIiwiVmlkZW9MaXN0IiwiU2VhcmNoIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzaW5nbGVWaWRlbyIsInZpZGVvTGlzdCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImhhbmRsZVNlYXJjaCIsInZpZGVvIiwic2V0U3RhdGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLE9BQU9BLGdCQUFQLE1BQTZCLDZCQUE3QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0Isa0JBQXhCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5CO0FBQ0E7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7O0FBRWhDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWFWLGlCQUFpQixDQUFqQixDQURGO0FBRVhXLGlCQUFXWDtBQUZBLEtBQWI7QUFJQSxTQUFLWSxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBRUQ7QUFDREMsaUJBQWdCLENBRWY7QUFEQzs7QUFFRjtBQUNBRixjQUFhRyxLQUFiLEVBQW9CO0FBQ2xCLFNBQUtDLFFBQUwsQ0FBYztBQUNaTixtQkFBYUs7QUFERCxLQUFkO0FBR0Q7O0FBRURFLFdBQVU7QUFDUixXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFDRSw4QkFBQyxNQUFELElBQVEsY0FBYyxLQUFLSCxZQUEzQjtBQURGO0FBREYsT0FERjtBQU1FO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFLDhCQUFDLFdBQUQsSUFBYSxPQUFPLEtBQUtMLEtBQUwsQ0FBV0MsV0FBL0I7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0UsOEJBQUMsU0FBRCxJQUFXLGFBQWEsS0FBS0UsV0FBN0IsRUFBMEMsUUFBUSxLQUFLSCxLQUFMLENBQVdFLFNBQTdEO0FBREY7QUFKRjtBQU5GLEtBREY7QUFrQkQ7O0FBeEMrQjtBQTJDbEM7QUFDQTs7QUFFQSxlQUFlUCxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB2aWRlbyBkYXRhIGhlcmVcbi8vIHJlZmFjdG9yIGFwcCB0byBiZSBhIGNsYXNzXG4vLyBzdG9yZSBhcHAgc3RhdGUgd2l0aGluIGFwcCBjb250cnVjdG9yXG5pbXBvcnQgZXhhbXBsZVZpZGVvRGF0YSBmcm9tICcuLi9kYXRhL2V4YW1wbGVWaWRlb0RhdGEuanMnO1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4vVmlkZW9QbGF5ZXIuanMnO1xuaW1wb3J0IFZpZGVvTGlzdCBmcm9tICcuL1ZpZGVvTGlzdC5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzJztcbi8vY29uc29sZS5sb2codmlkZW9zKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2luZ2xlVmlkZW86IGV4YW1wbGVWaWRlb0RhdGFbMF0sXG4gICAgICB2aWRlb0xpc3Q6IGV4YW1wbGVWaWRlb0RhdGFcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG5cbiAgfVxuICBoYW5kbGVTZWFyY2ggKCkge1xuICAgIC8vIGdldCByZXF1ZXN0IChzZWFyY2hZb3V0dWJlKVxuICB9XG4gIC8vIHBhc3MgbWV0aG9kIGFzIHByb3BzIHRvIHZpZGVvTGlzdEVudHJ5XG4gIGhhbmRsZUNsaWNrICh2aWRlbykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2luZ2xlVmlkZW86IHZpZGVvLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICA8U2VhcmNoIGhhbmRsZVNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgIDxWaWRlb1BsYXllciB2aWRlbz17dGhpcy5zdGF0ZS5zaW5nbGVWaWRlb30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICA8VmlkZW9MaXN0IGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSB2aWRlb3M9e3RoaXMuc3RhdGUudmlkZW9MaXN0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG59XG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=