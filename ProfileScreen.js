import React, { useState, useEffect } from 'react';
import Avatar from '../components/Avatar';
import Bio from '../components/Bio';
import Tabs from '../components/Tabs';
import NewsCard from '../components/NewsCard';
import { fetchPostedArticles, fetchBookmarkedArticles } from '../api/newsApi';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('posted');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (activeTab === 'posted') {
      fetchPostedArticles()
        .then(articles => {
          setArticles(articles);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching posted articles:', error);
          setLoading(false);
        });
    } else if (activeTab === 'bookmarked') {
      fetchBookmarkedArticles()
        .then(articles => {
          setArticles(articles);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching bookmarked articles:', error);
          setLoading(false);
        });
    }
  }, [activeTab]);

  return (
    <div>
      <Avatar src="https://i.pinimg.com/736x/55/69/b3/5569b34844918895599af075e26163de--james-cameron-james-darcy.jpg" />
      <Bio name="Deep Dubey" bio="Software Developer." />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          articles.map(article => (
            <NewsCard key={article.id} title={article.title} excerpt={article.excerpt} thumbnail={article.thumbnail} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProfileScreen;
