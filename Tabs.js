import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <button onClick={() => setActiveTab('posted')} className={activeTab === 'posted' ? 'active' : ''}>
        Posted
      </button>
      <button onClick={() => setActiveTab('bookmarked')} className={activeTab === 'bookmarked' ? 'active' : ''}>
        Bookmarked
      </button>
    </div>
  );
};

export default Tabs;
