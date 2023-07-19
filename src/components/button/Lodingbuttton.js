import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function simulateNetworkRequest(props) {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null }
    >
      {isLoading ? 'Loading…' : '결과'}
    </Button>
  );
}

export default LoadingButton;