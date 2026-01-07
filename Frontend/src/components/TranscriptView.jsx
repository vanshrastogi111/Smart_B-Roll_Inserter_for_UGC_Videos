const TranscriptView = ({ timeline }) => {
  return (
    <div className="card">
      <h2>Proposed Insertions</h2>
      {timeline.map((item, idx) => (
        <p key={idx}>
          ⏱ {item.start_sec.toFixed(1)}s – {item.duration_sec}s  
          <br />
          <strong>Reason:</strong> {item.reason}
        </p>
      ))}
    </div>
  );
};

export default TranscriptView;
