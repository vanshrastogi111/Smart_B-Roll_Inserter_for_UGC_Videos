const TimelineView = ({ timeline }) => {
  return (
    <div className="card">
      <h2>B-Roll Timeline</h2>
      <ul>
        {timeline.map((item, idx) => (
          <li key={idx}>
            Insert <b>{item.broll_id}</b> at {item.start_sec.toFixed(1)}s  
            (confidence: {item.confidence.toFixed(2)})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineView;
