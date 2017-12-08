import React from 'react';

// StaticRouter swaps props.context with props.staticContext
const NotFoundPage = ({staticContext}) => {
  staticContext.notFound = true;
  console.log('NotFoundPage context: ', staticContext);
  return (
    <h2>The page you're looking for doesn't exist.</h2>
  )
};

export default NotFoundPage;
