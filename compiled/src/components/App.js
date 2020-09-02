// import video data here
// refactor app to be a class
// store app state within app contructor
// import React from 'react';

import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';

//console.log(videos);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      singleVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  componentDidMount() {
    this.getYoutubeVideos('Jojo siwa');
  }

  getYoutubeVideos(query) {

    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYoutube(options, videos => {
      this.setState({
        singleVideo: videos[0],
        videoList: videos
      });
    });
  }

  // pass method as props to videoListEntry
  handleClick(video) {
    this.setState({
      singleVideo: video
    });
  }

  render() {
    console.log('props within APP: ', this.props);
    return React.createElement(
      'div',
      null,
      React.createElement(
        'nav',
        { className: 'navbar' },
        React.createElement(
          'div',
          { className: 'col-md-6 offset-md-3' },
          React.createElement(Search, { handleSearch: this.getYoutubeVideos.bind(this) })
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
          React.createElement(VideoList, { handleClick: this.handleClick.bind(this), videos: this.state.videoList })
        )
      )
    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiVmlkZW9QbGF5ZXIiLCJWaWRlb0xpc3QiLCJTZWFyY2giLCJleGFtcGxlVmlkZW9EYXRhIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzaW5nbGVWaWRlbyIsInZpZGVvTGlzdCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0WW91dHViZVZpZGVvcyIsInF1ZXJ5Iiwib3B0aW9ucyIsImtleSIsIkFQSV9LRVkiLCJzZWFyY2hZb3V0dWJlIiwidmlkZW9zIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayIsInZpZGVvIiwicmVuZGVyIiwiY29uc29sZSIsImxvZyIsImJpbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU9BLFdBQVAsTUFBd0Isa0JBQXhCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsNkJBQTdCOztBQUVBOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDOztBQUVoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhUCxpQkFBaUIsQ0FBakIsQ0FERjtBQUVYUSxpQkFBV1I7QUFGQSxLQUFiO0FBTUQ7O0FBRURTLHNCQUFvQjtBQUNsQixTQUFLQyxnQkFBTCxDQUFzQixXQUF0QjtBQUNEOztBQUdEQSxtQkFBaUJDLEtBQWpCLEVBQXdCOztBQUV0QixRQUFJQyxVQUFVO0FBQ1pDLFdBQUssS0FBS1IsS0FBTCxDQUFXUyxPQURKO0FBRVpILGFBQU9BO0FBRkssS0FBZDs7QUFLQSxTQUFLTixLQUFMLENBQVdVLGFBQVgsQ0FBeUJILE9BQXpCLEVBQW1DSSxNQUFELElBQVU7QUFDMUMsV0FBS0MsUUFBTCxDQUFjO0FBQ1pWLHFCQUFhUyxPQUFPLENBQVAsQ0FERDtBQUVaUixtQkFBV1E7QUFGQyxPQUFkO0FBSUQsS0FMRDtBQU9EOztBQUVEO0FBQ0FFLGNBQWFDLEtBQWIsRUFBb0I7QUFDbEIsU0FBS0YsUUFBTCxDQUFjO0FBQ1pWLG1CQUFhWTtBQURELEtBQWQ7QUFHRDs7QUFFREMsV0FBVTtBQUNSQyxZQUFRQyxHQUFSLENBQVksb0JBQVosRUFBa0MsS0FBS2pCLEtBQXZDO0FBQ0EsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHNCQUFmO0FBQ0UsOEJBQUMsTUFBRCxJQUFRLGNBQWMsS0FBS0ssZ0JBQUwsQ0FBc0JhLElBQXRCLENBQTJCLElBQTNCLENBQXRCO0FBREY7QUFERixPQURGO0FBTUU7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0UsOEJBQUMsV0FBRCxJQUFhLE9BQU8sS0FBS2pCLEtBQUwsQ0FBV0MsV0FBL0I7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0UsOEJBQUMsU0FBRCxJQUFXLGFBQWEsS0FBS1csV0FBTCxDQUFpQkssSUFBakIsQ0FBc0IsSUFBdEIsQ0FBeEIsRUFBcUQsUUFBUSxLQUFLakIsS0FBTCxDQUFXRSxTQUF4RTtBQURGO0FBSkY7QUFORixLQURGO0FBa0JEOztBQTVEK0I7QUErRGxDO0FBQ0E7O0FBRUEsZUFBZVAsR0FBZiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgdmlkZW8gZGF0YSBoZXJlXG4vLyByZWZhY3RvciBhcHAgdG8gYmUgYSBjbGFzc1xuLy8gc3RvcmUgYXBwIHN0YXRlIHdpdGhpbiBhcHAgY29udHJ1Y3RvclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4vVmlkZW9QbGF5ZXIuanMnO1xuaW1wb3J0IFZpZGVvTGlzdCBmcm9tICcuL1ZpZGVvTGlzdC5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzJztcbmltcG9ydCBleGFtcGxlVmlkZW9EYXRhIGZyb20gJy4uL2RhdGEvZXhhbXBsZVZpZGVvRGF0YS5qcyc7XG5cbi8vY29uc29sZS5sb2codmlkZW9zKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2luZ2xlVmlkZW86IGV4YW1wbGVWaWRlb0RhdGFbMF0sXG4gICAgICB2aWRlb0xpc3Q6IGV4YW1wbGVWaWRlb0RhdGFcbiAgICB9O1xuXG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0WW91dHViZVZpZGVvcygnSm9qbyBzaXdhJyk7XG4gIH1cblxuXG4gIGdldFlvdXR1YmVWaWRlb3MocXVlcnkpIHtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAga2V5OiB0aGlzLnByb3BzLkFQSV9LRVksXG4gICAgICBxdWVyeTogcXVlcnksXG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMuc2VhcmNoWW91dHViZShvcHRpb25zLCAodmlkZW9zKT0+e1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNpbmdsZVZpZGVvOiB2aWRlb3NbMF0sXG4gICAgICAgIHZpZGVvTGlzdDogdmlkZW9zXG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgLy8gcGFzcyBtZXRob2QgYXMgcHJvcHMgdG8gdmlkZW9MaXN0RW50cnlcbiAgaGFuZGxlQ2xpY2sgKHZpZGVvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaW5nbGVWaWRlbzogdmlkZW8sXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnNvbGUubG9nKCdwcm9wcyB3aXRoaW4gQVBQOiAnLCB0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICA8U2VhcmNoIGhhbmRsZVNlYXJjaD17dGhpcy5nZXRZb3V0dWJlVmlkZW9zLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgIDxWaWRlb1BsYXllciB2aWRlbz17dGhpcy5zdGF0ZS5zaW5nbGVWaWRlb30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICA8VmlkZW9MaXN0IGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9IHZpZGVvcz17dGhpcy5zdGF0ZS52aWRlb0xpc3R9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbn1cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==