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
  handleSearch () {
    // get request (searchYoutube)
  }
  // pass method as props to videoListEntry
  handleClick (video) {
    this.setState({
      singleVideo: video,
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.singleVideo} />
          </div>
          <div className="col-md-5">
            <VideoList handleClick={this.handleClick} videos={this.state.videoList} />
          </div>
        </div>
      </div>

    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
