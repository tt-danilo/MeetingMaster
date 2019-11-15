import React from 'react';

function StartMeeting() {
  return (
    <div className='start-meeting'>
      <h1>Who's attending this meeting?</h1>

      <div className='button-container'>
        <button>
          Start Meeting as Leader
        </button>
        <button>
          Preview Meeting
        </button>
      </div>
    </div>
  );
}

export default StartMeeting;
