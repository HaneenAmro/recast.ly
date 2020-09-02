var VideoListEntry = props => {
  console.log('this.video: ', props.video);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInZpZGVvIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIiwiaGFuZGxlQ2xpY2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsaUJBQWtCQyxLQUFELElBQVc7QUFDOUJDLFVBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCRixNQUFNRyxLQUFsQztBQUNBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUseUJBQWY7QUFDRSxtQ0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS0gsTUFBTUcsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxVQUFwQixDQUErQkMsT0FBL0IsQ0FBdUNDLEdBQTFFLEVBQStFLEtBQUksRUFBbkY7QUFERixLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssU0FBUyxNQUFNUCxNQUFNUSxXQUFOLENBQWtCUixNQUFNRyxLQUF4QixDQUFwQixFQUFvRCxXQUFVLHdCQUE5RDtBQUF3RkgsY0FBTUcsS0FBTixDQUFZQyxPQUFaLENBQW9CSztBQUE1RyxPQURGO0FBRUU7QUFBQTtBQUFBLFVBQUssV0FBVSx5QkFBZjtBQUEwQ1QsY0FBTUcsS0FBTixDQUFZQyxPQUFaLENBQW9CTTtBQUE5RDtBQUZGO0FBSkYsR0FERjtBQVdELENBYkQ7O0FBZUE7QUFDQTtBQUNBWCxlQUFlWSxTQUFmLEdBQTJCO0FBQ3pCUixTQUFPUyxVQUFVQyxNQUFWLENBQWlCQztBQURDLENBQTNCOztBQUlBO0FBQ0E7QUFDQSxlQUFlZixjQUFmIiwiZmlsZSI6IlZpZGVvTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFZpZGVvTGlzdEVudHJ5ID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCd0aGlzLnZpZGVvOiAnLCBwcm9wcy52aWRlbyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCIgc3JjPXtwcm9wcy52aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmx9IGFsdD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUNsaWNrKHByb3BzLnZpZGVvKX0gY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS10aXRsZVwiPntwcm9wcy52aWRlby5zbmlwcGV0LnRpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktZGV0YWlsXCI+e3Byb3BzLnZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcblZpZGVvTGlzdEVudHJ5LnByb3BUeXBlcyA9IHtcbiAgdmlkZW86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IFZpZGVvTGlzdEVudHJ5O1xuIl19