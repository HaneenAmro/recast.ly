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
      query: query,
    };

    this.props.searchYoutube(options, (videos)=>{
      this.setState({
        singleVideo: videos[0],
        videoList: videos
      });
    });

  }

  // pass method as props to videoListEntry
  handleClick (video) {
    this.setState({
      singleVideo: video,
    });
  }

  render () {
    console.log('props within APP: ', this.props);
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.getYoutubeVideos.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.singleVideo} />
          </div>
          <div className="col-md-5">
            <VideoList handleClick={this.handleClick.bind(this)} videos={this.state.videoList} />
          </div>
        </div>
      </div>

    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
